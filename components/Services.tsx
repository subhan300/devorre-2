
"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import PageHeaderTitle from "./PageHeaderTtitle"
import { servicesData } from "@/website-data/serviceData"
import Link from "next/link"

const Services = () => {
  const [servicesRef, servicesInView] = useIntersectionObserver()

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white" ref={servicesRef}>
      <div
        className={`container px-4 md:px-6 transition-all duration-1000 ${
          servicesInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-[42px]">
            <PageHeaderTitle
              badge={servicesData.header.badge}
              title={servicesData.header.title}
              description={servicesData.header.description}
            />
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.services.map((service, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-slate-50 border border-slate-50 backdrop-blur-lg shadow-xl transition-all hover:scale-[1.03] hover:shadow-2xl animate-fade-up flex flex-col"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div
                  style={{background:service?.gradient}}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br  ${service.gradient} shadow-lg mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-black">{service.title}</h3>
                <p className="text-sm text-gray-400 mt-2 flex-1">{service.description}</p>
               <a
  href={service.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 px-0 text-sm hover:bg-transparent hover:text-purple-400 text-purple-400 hover:underline inline-flex items-center justify-start gap-1"
>
  {service.actionBtn}
  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Services
