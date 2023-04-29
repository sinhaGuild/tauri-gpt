import { cn } from "@/lib/utils"

export const AnimatedBlobs = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "bg-grey-100 min-h-screen flex items-center justify-start px-40 -mt-[5rem] overflow-hidden"
        // "bg-ai-bg dark:bg-ai-dark-bg text-ai-text dark:text-ai-dark-text"
      )}
    >
      {children}
      <div className="sticky self-start">
        <div className="relative max-w-lg right-[90vw] top-[50vh]">
          <Blob classname="bg-emerald-200/80 dark:bg-emerald-800/80 -right-8 left-20 animation-delay-4000" />
          <Blob classname="bg-pink-300/75 top-40 dark:bg-purple-800/75 animation-delay-2000" />
          <Blob classname="bg-yellow-300/75 dark:bg-orange-800/75 -left-8" />
          {/* <Blob classname="bg-emerald-300 -bottom-20 animation-delay-2000" /> */}
          {/* <div className="absolute top-0 bg-yellow-300 rounded-full -right-4 w-72 h-72 mix-blend-multiply filter opacity-70 blur-2xl"></div>
        <div className="absolute top-0 bg-pink-300 rounded-full -bottom-8 left-20 w-72 h-72 mix-blend-multiply filter opacity-70 blur-2xl"></div> */}
        </div>
      </div>
    </div>
  )
}

export const Blob = ({ classname }: { classname: string }) => {
  return (
    <div
      className={cn(
        "absolute w-96 h-96",
        "rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob",
        `${classname}`
      )}
    ></div>
  )
}
