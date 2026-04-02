import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    const existingSubscriber = await db.subscriber.findUnique({
      where: { email }
    })

    if (existingSubscriber) {
      if (existingSubscriber.status === "UNSUBSCRIBED") {
        await db.subscriber.update({
          where: { email },
          data: { status: "ACTIVE" }
        })
        return NextResponse.json({ success: true, message: "Resubscribed successfully." })
      }
      return NextResponse.json({ error: "You are already subscribed." }, { status: 400 })
    }

    await db.subscriber.create({
      data: { email }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
