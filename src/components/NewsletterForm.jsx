"use client"

import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle, loading, success, error
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      setStatus("success")
      setMessage("Thanks for subscribing! You're on the list.")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setMessage(err.message || "An error occurred.")
    }
  }

  return (
    <div className="bg-blue-50 rounded-2xl p-8 sm:p-10 text-center shadow-inner">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Subscribe to my newsletter</h3>
      <p className="mt-4 mx-auto max-w-xl text-lg text-gray-500">
        Get the latest articles, tutorials, and insights delivered straight to your inbox. No spam, ever.
      </p>
      
      <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:justify-center sm:max-w-md sm:mx-auto">
        <label htmlFor="email-address" className="sr-only">Email address</label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:max-w-xs rounded-md sm:rounded-r-none"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-0 sm:flex-shrink-0">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md sm:rounded-l-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </form>

      {status === "success" && (
        <p className="mt-4 text-sm text-green-600 font-medium">{message}</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600 font-medium">{message}</p>
      )}
    </div>
  )
}
