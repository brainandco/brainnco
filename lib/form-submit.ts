/**
 * Form submission targets:
 *
 * - Default: POST to `/api/send-email` and `/api/newsletter` (same origin). Configure **Resend**
 *   on the server: `RESEND_API_KEY`, `RESEND_CONTACT_FROM` (contact from), and `RESEND_NEWSLETTER_FROM` (newsletter from).
 * - Web3Forms: set `NEXT_PUBLIC_USE_WEB3FORMS=true` and set `NEXT_PUBLIC_WEB3FORMS_*` keys (browser submit).
 */
const USE_WEB3FORMS = process.env.NEXT_PUBLIC_USE_WEB3FORMS === "true"
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"
const WEB3FORMS_CONTACT_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_CONTACT_ACCESS_KEY || ""
const WEB3FORMS_NEWSLETTER_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_NEWSLETTER_ACCESS_KEY || ""

export const formConfig = {
  useWeb3Forms: USE_WEB3FORMS,
  web3forms: {
    endpoint: WEB3FORMS_ENDPOINT,
    contactAccessKey: WEB3FORMS_CONTACT_KEY,
    newsletterAccessKey: WEB3FORMS_NEWSLETTER_KEY,
  },
  contact: { apiUrl: "/api/send-email" },
  newsletter: { apiUrl: "/api/newsletter" },
} as const

export function getContactSubmitUrl(): string {
  if (formConfig.useWeb3Forms) return formConfig.web3forms.endpoint
  return formConfig.contact.apiUrl
}

export function getNewsletterSubmitUrl(): string {
  if (formConfig.useWeb3Forms) return formConfig.web3forms.endpoint
  return formConfig.newsletter.apiUrl
}

export function getContactWeb3FormsPayload(fields: {
  name: string
  email: string
  company: string
  service: string
  budget: string
  message: string
}): Record<string, string> {
  return {
    access_key: formConfig.web3forms.contactAccessKey,
    subject: "brain & co. – Contact form submission",
    name: fields.name,
    "Sender Email": fields.email,
    company: fields.company,
    service: fields.service,
    budget: fields.budget,
    message: fields.message,
  }
}

export function getNewsletterWeb3FormsPayload(subscriberEmail: string): Record<string, string> {
  return {
    access_key: formConfig.web3forms.newsletterAccessKey,
    subject: "brain & co. – Newsletter signup",
    email: subscriberEmail,
    "Subscriber Email": subscriberEmail,
  }
}
