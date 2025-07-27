"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "./ui/Typography"
import { ctaData } from "@/website-data/ctaData"

const CTA = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const formData = new FormData()
    formData.append("EMAIL", email)

    // Mailchimp endpoint with u & id from your embed form
    const endpoint =
      "https://app.us21.list-manage.com/subscribe/post-json?u=6e6ef88af15fa279d07ba2b3b&id=cb5d84a71e&f_id=00a343e6f0&c=?"

    try {
      const url = `${endpoint}&EMAIL=${encodeURIComponent(email)}`
      const response = await fetch(url, {
        method: "GET",
        mode: "no-cors", // Mailchimp requires this, even though it prevents full response parsing
      })

      // Since we can't get a proper response due to no-cors, we just assume success
      setMessage("✅ You're subscribed!")
      setEmail("")
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id={ctaData.id}
      className="relative w-full py-20 px-4 md:px-6 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-500 text-white overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl">
        <div className="w-[30rem] h-[30rem] bg-white/20 rounded-full absolute top-[-10%] left-[20%]" />
        <div className="w-[25rem] h-[25rem] bg-white/10 rounded-full absolute bottom-[-10%] right-[10%]" />
      </div>

      <div className="container mx-auto max-w-[700px] text-center space-y-8">
        <div>
          <Typography variant="h1" className="animate-fade-up text-center">
            {ctaData.title}
          </Typography>
          <p
            className="text-white/80 text-base md:text-lg font-light animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            {ctaData.description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <input
            type="email"
            name="EMAIL"
            required
            placeholder={ctaData.placeholder}
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-black placeholder:text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            size="lg"
            type="submit"
            className="w-full bg-white text-purple-700 font-semibold hover:bg-white/90 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : ctaData.buttonText}
          </Button>

          {message && (
            <p className="text-sm text-white text-center mt-2">{message}</p>
          )}

          <p className="text-sm text-white/70">{ctaData.note}</p>
        </form>
      </div>
    </section>
  )
}

export default CTA
