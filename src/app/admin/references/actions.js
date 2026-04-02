"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createReference(formData) {
  const name = formData.get("name")
  const company = formData.get("company")
  const role = formData.get("role")
  const testimony = formData.get("testimony")
  const link = formData.get("link")

  await db.reference.create({
    data: { name, company, role, testimony, link }
  })

  revalidatePath("/admin/references")
  revalidatePath("/")
  redirect("/admin/references")
}

export async function updateReference(id, formData) {
  const name = formData.get("name")
  const company = formData.get("company")
  const role = formData.get("role")
  const testimony = formData.get("testimony")
  const link = formData.get("link")

  await db.reference.update({
    where: { id },
    data: { name, company, role, testimony, link }
  })

  revalidatePath("/admin/references")
  revalidatePath("/")
  redirect("/admin/references")
}

export async function deleteReference(id) {
  await db.reference.delete({ where: { id } })
  revalidatePath("/admin/references")
  revalidatePath("/")
}
