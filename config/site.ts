import { NavItem } from "@/types/common"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Itihasa",
  description: "Experimental bot for LLM exploration.",
  mainNav: [
    // {
    //   title: "Home",
    //   href: "/",
    // },
  ],
  links: {
    twitter: "https://twitter.com/pikaso",
    github: "https://github.com/sinhaguild",
    docs: "#",
  },
}
