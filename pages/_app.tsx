import { Layout } from "@/components/layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* <LLMCommandMenu /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
