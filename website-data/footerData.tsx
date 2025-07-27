// src/data/footerData.ts

import { Twitter, Linkedin, Github } from "lucide-react"

export const brand = {
  name: "Devvore",
  tagline: "Crafted with passion.",
}

export const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" },
  { label: "Contact", href: "#contact" },
]

export const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  // {
  //   label: "GitHub",
  //   href: "https://github.com",
  //   icon: Github,
  // },
]
