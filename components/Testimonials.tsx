"use client"
import { Card, CardContent } from "@/components/ui/card"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { Avatar } from "./ui/avatar"
import PageHeaderTitle from "./PageHeaderTtitle"
import { testimonialsData,testimonialsHeader } from "@/website-data/testimonalData"

const Testimonials = () => {
  const [testimonialsRef, testimonialsInView] = useIntersectionObserver()

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background" ref={testimonialsRef}>
      <div
        className={`container px-4 md:px-6 transition-all duration-1000 ${testimonialsInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <PageHeaderTitle
            classTitle="dark:text-foreground"
            classDescription="text-muted-foreground"
            badge={testimonialsHeader.badge}
            title={testimonialsHeader.title}
            description={testimonialsHeader.description}
          />
        </div>
        <div className="mx-auto grid max-w-5xl gap-4 md:gap-6 py-8 md:py-12 lg:grid-cols-2">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

const TestimonialCard = ({ testimonial, index }: any) => (
  <Card
    className="animate-fade-up transition-transform duration-300 hover:scale-[1.02] shadow-xl border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    <CardContent className="p-6 space-y-4">
      <div className="flex justify-start items-start gap-[8px]">
        <div className="flex items-center space-x-4">
          <Avatar className="bg-gradient-to-tr from-pink-500 to-violet-500 text-white">
            {testimonial.author
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .toUpperCase()}
          </Avatar>
          <div>
            <p className="font-semibold text-white">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>
        <div className="flex space-x-[2px] mt-[2px]">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      </div>
      <p className="text-sm text-white/90 italic leading-relaxed">
        “{testimonial.quote}”
      </p>
    </CardContent>
  </Card>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-[16px] w-[16px] text-yellow-400"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 
                  5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 
                  1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 
                  7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273 
                  -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 
                  2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);
