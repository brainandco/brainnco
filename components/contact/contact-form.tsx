"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"
import { formConfig, getContactSubmitUrl, getContactWeb3FormsPayload } from "@/lib/form-submit"

const CONTACT_EMAIL = "contact@brainnco.com"

const services = [
  "SEO & Organic Growth",
  "PPC & Paid Media",
  "Content Marketing",
  "Brand Strategy",
  "Social Media Marketing",
  "Email Marketing",
  "Web Design & Development",
  "Other",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError(null)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const payload = formConfig.useWeb3Forms
        ? getContactWeb3FormsPayload(formData)
        : {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            service: formData.service,
            budget: formData.budget,
            message: formData.message,
          }
      const url = getContactSubmitUrl()
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
      let data: { success?: boolean; message?: string }
      try {
        data = await res.json()
      } catch {
        throw new Error(`Server returned ${res.status}. Try again later or email us at ${CONTACT_EMAIL}.`)
      }
      if (!res.ok || !(data?.success ?? res.ok)) {
        throw new Error(data?.message || `Failed to send (${res.status})`)
      }
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      })
    } catch (err) {
      setError(
        err instanceof Error ? err.message : `Something went wrong. Please try again or email us at ${CONTACT_EMAIL}.`
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Reach out directly or fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="mt-10 flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:contact@brainnco.com"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      contact@brainnco.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      +966 11 456 3983
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Office
                    </p>
                    <p className="text-sm text-muted-foreground">
                      7218-Al Takhsusi Road, Building No.2 , Office No.201
                      <br />
                      Riyadh, Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-border bg-secondary/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Office Hours
                </p>
                <div className="mt-3 flex flex-col gap-1 text-sm text-foreground">
                  <p>Sunday - Thursday: 8:00 AM - 5:00 PM AST</p>
                  <p>Friday - Saturday: Closed</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay="animation-delay-200">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center lg:p-16">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
                    Message Sent
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "",
                        budget: "",
                        message: "",
                      })
                    }}
                    className="mt-6 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-8 lg:p-10"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Send Us a Message
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form below and we will be in touch shortly.
                  </p>

                  {error && (
                    <div className="mt-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {error}
                    </div>
                  )}

                  <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Full Name"
                        className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email Address"
                        className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="company"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter Company Name"
                        className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="service"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={cn(
                          "rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all appearance-none",
                          formData.service
                            ? "text-foreground"
                            : "text-muted-foreground/50"
                        )}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label
                        htmlFor="budget"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Monthly Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={cn(
                          "rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all appearance-none",
                          formData.budget
                            ? "text-foreground"
                            : "text-muted-foreground/50"
                        )}
                      >
                        <option value="">Select your budget</option>
                        <option value="<5k">Under $1,000</option>
                        <option value="5k-15k">$1,000 - $5,000</option>
                        <option value="15k-30k">$5,000 - $15,000</option>
                        <option value="30k-50k">$15,000 - $30,000</option>
                        <option value="50k+">$30,000+</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and how we can help..."
                        className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-all hover:opacity-90 disabled:opacity-60 disabled:pointer-events-none sm:w-auto"
                  >
                    {loading ? "Sending…" : "Send Message"}
                    {!loading && <Send className="h-4 w-4" />}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
