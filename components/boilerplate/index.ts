import dynamic from "next/dynamic"

export * from "./animated-background"
export * from "./layout-container"
export * from "./stars-illustration"

export const DynamicCustomTitleBar = dynamic(() => import("./tauri-titlebar"), {
  ssr: false,
})
