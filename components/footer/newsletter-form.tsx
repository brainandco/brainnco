"use client"

import { useState } from "react"
import { formConfig, getNewsletterSubmitUrl, getNewsletterWeb3FormsPayload } from "@/lib/form-submit"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const trimmed = email.trim()
    if (!trimmed) {
      setError("Please enter your email.")
      return
    }
    setLoading(true)
    try {
      const payload = formConfig.useWeb3Forms
        ? getNewsletterWeb3FormsPayload(trimmed)
        : { email: trimmed }
      const url = getNewsletterSubmitUrl()
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
      const data: { success?: boolean; message?: string } = await res.json().catch(() => ({}))
      if (!res.ok || !(data?.success ?? res.ok)) {
        throw new Error(data?.message || "Something went wrong. Please try again.")
      }
      setSuccess(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <p className="text-sm text-background/80">
        Thanks for subscribing. We&apos;ll keep you updated.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError(null)
          }}
          placeholder="Enter your email"
          className="min-w-0 flex-1 rounded-full border border-background/20 bg-transparent px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/50"
          aria-label="Email for newsletter"
          disabled={loading}
          autoComplete="email"
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 rounded-full bg-background text-foreground px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80 disabled:opacity-60"
        >
          {loading ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {error && (
        <p className="text-xs text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
