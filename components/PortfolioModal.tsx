"use client"
import { useState } from "react"
import Link from "next/link"
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

interface PortfolioModalProps {
  project: Project | null
  onClose: () => void
}

const PortfolioModal = ({ project, onClose }: PortfolioModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const projectImages = project?.modalImages || []

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex  items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl hide-scrollbar max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative h-[350px] md:h-[400px] overflow-hidden">
          <Image
            src={projectImages[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button asChild size="sm" className="group">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Live Demo
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="group">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Code
                </Link>
              </Button>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Responsive Design",
                "Performance Optimized",
                "SEO Friendly",
                "Modern UI/UX",
                "Cross-browser Compatible",
                "Mobile First Approach",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <svg className="h-4 w-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioModal