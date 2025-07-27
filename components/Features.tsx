"use client"

import { CheckCircle, Laptop } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { Badge } from "./ui/badge"
import { Typography } from "./ui/Typography"
import PageHeaderTitle from "./PageHeaderTtitle"
import { tabWebsite,tabAi,tabSaas } from "@/website-data/featureData"

const Features = () => {
  const [featuresRef, featuresInView] = useIntersectionObserver()

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground" ref={featuresRef}>
      <div
        className={`container px-4 md:px-6 transition-all duration-1000 ${featuresInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <PageHeaderTitle
            classTitle="dark:text-foreground"
            badge="Features"
            title="Why Choose Devvore?"
            description="We combine cutting-edge technology with creative design to deliver exceptional digital experiences."
          />
        </div>
        <div className="mx-auto grid max-w-[1120px] gap-[48px] sm:gap-4 md:gap-[48px] py-8 md:py-12 lg:grid-cols-2">
          <Tabs defaultValue="websites" className="w-full animate-fade-up">
            <TabsList className="grid text-[12px] w-full grid-cols-3">
              <TabsTrigger value="ai">Generative AI</TabsTrigger>
              <TabsTrigger value="websites">Websites</TabsTrigger>
              <TabsTrigger value="saas">SaaS Products</TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className="mt-6 space-y-4">
              <TabContentComponent features={tabAi} />
            </TabsContent>
            <TabsContent value="websites" className="mt-6 space-y-4">
              <TabContentComponent features={tabWebsite} />
            </TabsContent>
            <TabsContent value="saas" className="mt-6 space-y-4">
              <TabContentComponent features={tabSaas} />
            </TabsContent>
          </Tabs>
          <RightSide />
        </div>
      </div>
    </section>
  )
}

export default Features

const TabContentComponent = ({ features }: { features: { title: string, description: string }[] }) => <div className="grid gap-4">
  {features.map((feature, index: number) => (
    <div key={index} className="flex items-start space-x-4">
      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-bold">{feature.title}</h3>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </div>
  ))}
</div>

const RightSide = () => <div className="relative h-full animate-fade-left">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-xl opacity-20 animate-pulse"></div>
  <div className="relative h-full flex items-center justify-center bg-white dark:bg-gray-900 border rounded-lg shadow-lg p-6">
    <Laptop className="h-64 w-64 text-primary" />
  </div>
</div>
