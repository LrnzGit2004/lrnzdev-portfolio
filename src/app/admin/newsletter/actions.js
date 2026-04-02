"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function deleteSubscriber(id) {
  await db.subscriber.delete({ where: { id } })
  revalidatePath("/admin/newsletter")
}

export async function toggleSubscriberStatus(id, currentStatus) {
  const newStatus = currentStatus === "ACTIVE" ? "UNSUBSCRIBED" : "ACTIVE"
  await db.subscriber.update({
    where: { id },
    data: { status: newStatus }
  })
  revalidatePath("/admin/newsletter")
}
