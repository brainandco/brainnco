/**
 * Contact form API – sends notification email via **Resend** (server-side only).
 */
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { escapeHtml } from "@/lib/escape-html"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_FROM = process.env.RESEND_FROM
const CONTACT_TO = process.env.RESEND_CONTACT_TO || "contact@brainnco.com"

export async function POST(request: NextRequest) {
  if (!RESEND_API_KEY || !RESEND_FROM) {
    return NextResponse.json(
      {
        success: false,
        message: "Email is not configured. Set RESEND_API_KEY and RESEND_FROM on the server.",
      },
      { status: 503 }
    )
  }

  let body: { name?: string; email?: string; company?: string; service?: string; budget?: string; message?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body." },
      { status: 400 }
    )
  }

  const { name = "", email = "", company = "", service = "", budget = "", message = "" } = body
  const trimmedName = String(name).trim()
  const trimmedEmail = String(email).trim()
  const trimmedMessage = String(message).trim()

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json(
      { success: false, message: "Name, email, and message are required." },
      { status: 400 }
    )
  }

  const companyT = String(company).trim()
  const serviceT = String(service).trim()
  const budgetT = String(budget).trim()

  const textBody = [
    `From: ${trimmedName} <${trimmedEmail}>`,
    companyT ? `Company: ${companyT}` : "",
    serviceT ? `Service: ${serviceT}` : "",
    budgetT ? `Budget: ${budgetT}` : "",
    "",
    "Message:",
    trimmedMessage,
  ]
    .filter(Boolean)
    .join("\n")

  const emailHtml = `
    <h2>New contact form submission – brain &amp; co.</h2>
    <p><strong>From:</strong> ${escapeHtml(trimmedName)} &lt;${escapeHtml(trimmedEmail)}&gt;</p>
    ${companyT ? `<p><strong>Company:</strong> ${escapeHtml(companyT)}</p>` : ""}
    ${serviceT ? `<p><strong>Service:</strong> ${escapeHtml(serviceT)}</p>` : ""}
    ${budgetT ? `<p><strong>Budget:</strong> ${escapeHtml(budgetT)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(trimmedMessage)}</pre>
  `

  const resend = new Resend(RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: CONTACT_TO,
    replyTo: trimmedEmail,
    subject: `brain & co. – New message from ${trimmedName}`,
    text: textBody,
    html: emailHtml,
  })

  if (error) {
    console.error("Resend contact error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[Contact form] Email sent successfully to:", CONTACT_TO)
  }
  return NextResponse.json({ success: true, message: "Message sent successfully." })
}
