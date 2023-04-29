import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <DynamicCustomTitleBar /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// export default dynamic(() => , {ssr: false})
