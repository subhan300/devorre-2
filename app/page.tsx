import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Features from "@/components/Features"
import Portfolio from "@/components/Portfolio"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-[1700px] mx-auto">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Features />
        <Portfolio />
        {/* <Pricing /> */}
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}