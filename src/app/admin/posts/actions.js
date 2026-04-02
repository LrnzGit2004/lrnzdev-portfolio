"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createPost(formData) {
  const title = formData.get("title")
  const content = formData.get("content")
  const slug = formData.get("slug") || title.toLowerCase().replace(/[\s\W-]+/g, '-')
  const coverImage = formData.get("coverImage")
  const published = formData.get("published") === "on" || formData.get("published") === "true" || formData.get("published") === "1"

  await db.post.create({
    data: { title, slug, content, coverImage, published }
  })

  revalidatePath("/admin/posts")
  revalidatePath("/blog")
  redirect("/admin/posts")
}

export async function updatePost(id, formData) {
  const title = formData.get("title")
  const content = formData.get("content")
  const slug = formData.get("slug") || title.toLowerCase().replace(/[\s\W-]+/g, '-')
  const coverImage = formData.get("coverImage")
  const published = formData.get("published") === "on" || formData.get("published") === "true" || formData.get("published") === "1"

  await db.post.update({
    where: { id },
    data: { title, slug, content, coverImage, published }
  })

  revalidatePath("/admin/posts")
  revalidatePath("/blog")
  redirect("/admin/posts")
}

export async function deletePost(id) {
  await db.post.delete({ where: { id } })
  revalidatePath("/admin/posts")
  revalidatePath("/blog")
}
