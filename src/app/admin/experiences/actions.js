"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createExperience(formData) {
  const title = formData.get("title")
  const company = formData.get("company")
  const startDate = new Date(formData.get("startDate"))
  const endDateStr = formData.get("endDate")
  const endDate = endDateStr ? new Date(endDateStr) : null
  const description = formData.get("description")

  await db.experience.create({
    data: { title, company, startDate, endDate, description }
  })

  revalidatePath("/admin/experiences")
  revalidatePath("/")
  redirect("/admin/experiences")
}

export async function updateExperience(id, formData) {
  const title = formData.get("title")
  const company = formData.get("company")
  const startDate = new Date(formData.get("startDate"))
  const endDateStr = formData.get("endDate")
  const endDate = endDateStr ? new Date(endDateStr) : null
  const description = formData.get("description")

  await db.experience.update({
    where: { id },
    data: { title, company, startDate, endDate, description }
  })

  revalidatePath("/admin/experiences")
  revalidatePath("/")
  redirect("/admin/experiences")
}

export async function deleteExperience(id) {
  await db.experience.delete({ where: { id } })
  revalidatePath("/admin/experiences")
  revalidatePath("/")
}
