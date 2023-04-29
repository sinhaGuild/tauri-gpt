import { useEffect, useRef } from "react"
import { appWindow } from "@tauri-apps/api/window"

import { cn } from "@/lib/utils"
import { RIcons } from "./icons-radix"

export default function TauriTitleBar() {
  const min = useRef(null)
  const max = useRef(null)
  const close = useRef(null)

  useEffect(() => {
    min.current.addEventListener("click", () => appWindow.minimize())
    max.current.addEventListener("click", () => appWindow.toggleMaximize())
    close.current.addEventListener("click", () => appWindow.close())
  }, [])

  return (
    <div
      data-tauri-drag-region
      className={cn(
        "h-8 select-none grid grid-cols-2 fixed top-0 left-0 right-0 py-1"
      )}
    >
      <div className="flex justify-start">
        <div className="flex titlebar-button" id="titlebar-minimize" ref={min}>
          <RIcons.drag />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="titlebar-button" id="titlebar-minimize" ref={min}>
          <RIcons.minimize />
        </div>
        <div className="titlebar-button" id="titlebar-maximize" ref={max}>
          <RIcons.fullscreen />
        </div>
        <div className="titlebar-button" id="titlebar-close" ref={close}>
          <RIcons.close />
        </div>
      </div>
    </div>
  )
}
