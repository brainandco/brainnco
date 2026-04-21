/**
 * Newsletter signup API – sends notification email via **Resend** (server-side only).
 */
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { escapeHtml } from "@/lib/escape-html"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_FROM = process.env.RESEND_FROM
const NEWSLETTER_TO = process.env.RESEND_NEWSLETTER_TO || "newsletter@brainnco.com"

export async function POST(request: NextRequest) {
  if (!RESEND_API_KEY || !RESEND_FROM) {
    return NextResponse.json(
      {
        success: false,
        message: "Newsletter is not configured. Set RESEND_API_KEY and RESEND_FROM on the server.",
      },
      { status: 503 }
    )
  }

  let body: { email?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    )
  }

  const trimmedEmail = String(body.email ?? "").trim()
  if (!trimmedEmail) {
    return NextResponse.json(
      { success: false, message: "Email is required." },
      { status: 400 }
    )
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmedEmail)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    )
  }

  const emailHtml = `
    <h2>New newsletter signup – brain &amp; co.</h2>
    <p><strong>Subscriber email:</strong> <a href="mailto:${escapeHtml(trimmedEmail)}">${escapeHtml(trimmedEmail)}</a></p>
    <p><em>Sent from the website footer newsletter form.</em></p>
  `
  const textBody = `New newsletter signup\n\nEmail: ${trimmedEmail}\n\nSent from the website footer newsletter form.`

  const resend = new Resend(RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: NEWSLETTER_TO,
    replyTo: trimmedEmail,
    subject: `brain & co. – Newsletter signup: ${trimmedEmail}`,
    text: textBody,
    html: emailHtml,
  })

  if (error) {
    console.error("Resend newsletter error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to subscribe. Please try again later." },
      { status: 500 }
    )
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[Newsletter] Signup email sent to:", NEWSLETTER_TO)
  }
  return NextResponse.json({ success: true, message: "Thanks for subscribing." })
}
