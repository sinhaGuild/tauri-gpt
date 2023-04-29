import { SiteHeader } from "@/components/site-header"
import { AnimatedBlobs } from "./boilerplate"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <AnimatedBlobs>
        <main>{children}</main>
      </AnimatedBlobs>
    </>
  )
}
