"use client"
import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"

const Pricing = () => {
  const [pricingRef, pricingInView] = useIntersectionObserver()

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white" ref={pricingRef}>
      <div
        className={`container px-4 md:px-6 transition-all duration-1000 ${pricingInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-up">
              Transparent, Value-Based Pricing
            </h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Choose the package that fits your business needs and budget.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-4 md:gap-6 py-8 md:py-12 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$999",
              description: "Perfect for small businesses just getting started online.",
              features: [
                "5-page responsive website",
                "Basic SEO setup",
                "Contact form",
                "Mobile optimization",
                "3 months support",
              ],
            },
            {
              name: "Business",
              price: "$2,499",
              description: "Comprehensive solution for established businesses.",
              features: [
                "10-page responsive website",
                "Advanced SEO package",
                "Content management system",
                "E-commerce integration",
                "12 months support",
              ],
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "Tailored solutions for large organizations with complex needs.",
              features: [
                "Custom web application",
                "SaaS product development",
                "API integrations",
                "Advanced analytics",
                "Dedicated support team",
              ],
            },
          ].map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${index === 1 ? "border-primary shadow-lg scale-105" : ""} animate-fade-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <div className="mt-2 text-3xl font-bold">{plan.price}</div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-auto" variant={index === 1 ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing