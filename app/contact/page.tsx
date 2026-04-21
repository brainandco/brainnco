import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with brain & co. Let's discuss how we can help grow your business through strategic marketing.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  )
}
