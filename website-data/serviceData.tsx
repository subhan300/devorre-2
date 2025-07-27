// src/data/servicesData.ts

import { Globe, Megaphone, Palette, Video } from "lucide-react";

export const servicesData = {
  header: {
    badge: "Features",
    title: "Comprehensive Web Solutions",
    description:
      "From custom website development to powerful SaaS products, we offer everything you need to succeed online.",
    actionBtn: "Learn More",
    link: "https://calendly.com/subhan-akram2400/30min"
  },
  services: [
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Website Development",
    description: "Custom-designed websites and SaaS platforms optimized for performance and growth.",
    gradient: "linear-gradient(to bottom right, #a855f7, #ec4899)",
    actionBtn: "Learn More",
    link: "https://calendly.com/subhan-akram2400/30min",
  },
  {
    icon: <Megaphone className="h-6 w-6 text-white" />,
    title: "Digital Marketing",
    description: "SEO, social media, and ad strategies that drive measurable traffic and conversions.",
    gradient: "linear-gradient(to bottom right, #22c55e, #3b82f6)",
    actionBtn: "Learn More",
    link: "https://calendly.com/subhan-akram2400/30min",
  },
  {
    icon: <Palette className="h-6 w-6 text-white" />,
    title: "Graphics Design",
    description: "Branding, UI/UX, and visual assets that capture attention and tell your story.",
    gradient: "linear-gradient(to bottom right, #facc15, #f43f5e)",
    actionBtn: "Learn More",
    link: "https://calendly.com/subhan-akram2400/30min",
  },
  {
    icon: <Video className="h-6 w-6 text-white" />,
    title: "Video Editing",
    description: "High-quality video production and editing to enhance your brand narrative.",
    gradient: "linear-gradient(to bottom right, #facc15, #f43f5e)",
    actionBtn: "Learn More",
    link: "https://calendly.com/subhan-akram2400/30min",
  },
]

};
