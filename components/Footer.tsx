import Link from "next/link";
import { Globe, Twitter, Linkedin, Github } from "lucide-react";
import { footerLinks,brand,socialLinks } from "@/website-data/footerData";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-purple-400" />
          <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {brand.name}
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {brand.name}. {brand.tagline}
      </div>
    </footer>
  );
};

export default Footer;