import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SplashAndTransition } from "@/components/splash-and-transition"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: {
    default: "brain & co. - Marketing Agency",
    template: "%s | brain & co.",
  },
  description:
    "brain & co. is a results-driven marketing agency specializing in SEO, PPC, content strategy, and digital growth for ambitious businesses.",
  keywords: [
    "marketing",
    "marketing agency",
    "SEO",
    "PPC",
    "content marketing",
    "digital marketing",
  ],
  icons: {
    icon: [{ url: "/images/favicon-b.png", type: "image/png" }],
    apple: [{ url: "/images/favicon-b.png", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#1d488f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <SplashAndTransition>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SplashAndTransition>
        <Analytics />
      </body>
    </html>
  )
}
