"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createProject(formData) {
  const title = formData.get("title")
  const description = formData.get("description")
  const image = formData.get("image")
  const link = formData.get("link")
  const techStackString = formData.get("techStack")
  const techStack = techStackString ? techStackString.split(",").map(s => s.trim()) : []
  const status = formData.get("status")

  await db.project.create({
    data: {
      title,
      description,
      image,
      link,
      techStack,
      status,
    }
  })

  revalidatePath("/admin/projects")
  revalidatePath("/")
  redirect("/admin/projects")
}

export async function updateProject(id, formData) {
  const title = formData.get("title")
  const description = formData.get("description")
  const image = formData.get("image")
  const link = formData.get("link")
  const techStackString = formData.get("techStack")
  const techStack = techStackString ? techStackString.split(",").map(s => s.trim()) : []
  const status = formData.get("status")

  await db.project.update({
    where: { id },
    data: {
      title,
      description,
      image,
      link,
      techStack,
      status,
    }
  })

  revalidatePath("/admin/projects")
  revalidatePath("/")
  redirect("/admin/projects")
}

export async function deleteProject(id) {
  await db.project.delete({
    where: { id }
  })
  
  revalidatePath("/admin/projects")
  revalidatePath("/")
}
