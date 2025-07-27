"use client"

import { ReactElement, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import PortfolioModal from "./PortfolioModal"
import { Typography } from "./ui/Typography"
import PageHeaderTitle from "./PageHeaderTtitle"
import { portfolioHeader,portfolioProjects } from "@/website-data/portfolioData"
import { ApexcareproDashboard } from "@/app/assets"
import Image from "next/image"

interface Project {
  id: number
  title: string
  category: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string,
  isImage?:boolean,
  image:any,
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [portfolioRef, portfolioInView] = useIntersectionObserver()
 
  return (
    <>
      <section
        id="portfolio"
        ref={portfolioRef}
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div
          className={`container px-4 md:px-6 transition-all duration-1000 ${
            portfolioInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <PageHeaderTitle
              badge={portfolioHeader.badge}
              title={portfolioHeader.title}
              description={portfolioHeader.description}
            />
          </div>
          <div className="flex flex-start gap-[22px] mt-[22px] flex-wrap">
            {portfolioProjects.map((project) => (
             <Card
                key={project.id}
                className="group w-full sm:w-[48%] bg-gray-200 xl:w-[32%] cursor-pointer overflow-hidden border-0 !border-none bg-transparent shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >

                <div className="relative overflow-hidden">
                   <div className="bg-gray-100  h-[280px]">
                      <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-110"
                  />
                   </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-2 py-1 bg-primary rounded text-xs font-medium mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 min-h-[200px] dark:bg-light">
                  <Typography variant={"h6"} className="font-bold mb-2 dark:text-black group-hover:text-black transition-colors">
                    {project.title}
                  </Typography>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-400 text-xs rounded-full text-foreground">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-400  text-xs rounded-full text-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}

export default Portfolio
