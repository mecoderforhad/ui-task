import type { Metadata } from "next"
import { News_Cycle, Inter } from "next/font/google"
import "./globals.css"

const newsCycle = News_Cycle({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-news-cycle",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "News UI Task",
  description: "Featured news section implementation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${newsCycle.variable}
          antialiased
          bg-gray-50
          text-gray-900
        `}
      >
        {children}
      </body>
    </html>
  )
}