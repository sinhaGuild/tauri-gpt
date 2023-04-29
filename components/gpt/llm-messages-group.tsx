// import { UserProfile } from "@auth0/nextjs-auth0/client";

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism"
import remarkGfm from "remark-gfm"

import { LLMMessageProps } from "@/types/gpt"
// xonokai, base16AteliersulphurpoolLight
import {
  motionVariantForStaggerChild,
  motionVariantForStaggerParent,
} from "@/lib/constants/motion-variants"
import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"

interface LLMMessagesGroupProps {
  chatlog: LLMMessageProps[]
  // user: UserProfile | undefined;
}

export const LLMMessagesGroup = ({ chatlog }: LLMMessagesGroupProps) => {
  return (
    <ScrollArea className="px-4 py-2 h-[70vh] w-full">
      {/* <Label>Responses</Label> */}
      <motion.div
        variants={motionVariantForStaggerParent}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="grid grid-cols-1 space-y-2">
          {chatlog.map((message, i) => (
            // <pre key={i}>{JSON.stringify(chat, null, 2)}</pre>
            <MessagesGroup
              key={`${message.user}-${i}`}
              message={message}
              // user={user}
            />
          ))}
        </div>
      </motion.div>
    </ScrollArea>
  )
}

const MessagesGroup = ({
  message,
}: // user,
{
  message: LLMMessageProps
  // user: UserProfile | undefined;
}) => {
  const messagesRef = useRef<any>(null)

  const scrollToBottom = () => {
    if (isInViewport(messagesRef.current)) {
      messagesRef.current.scrollIntoView({
        behavior: "smooth",
        // ease: "linear",
        block: "end",
        inline: "end",
      })
    }
  }

  function isInViewport(el: any) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  useEffect(scrollToBottom, [message])

  return (
    <>
      <motion.div
        className={cn(
          "flex px-4 space-x-7 justify-items-center",
          // "shadow-md bg-white dark:bg-ai-dark-side-bg rounded-xl",
          // "w-[calc(100%-50px)] lg:w-[calc(100%-115px)]",
          "whitespace-pre-wrap break-words"
        )}
        variants={motionVariantForStaggerChild}
      >
        {message.response && (
          <>
            {/* <AvatarMessageGroup local={false} /> */}
            <div className="w-full break-words">
              {/* <TypeWrite text={message.response} /> */}
              <ReactMarkdown
                className=""
                remarkPlugins={[remarkGfm]}
                components={{
                  // intercept code blocks and pass theme..
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "")
                    return !inline && match ? (
                      <SyntaxHighlighter
                        // children={String(children).replace(/\n$/, "")}
                        //@ts-ignore
                        style={materialOceanic}
                        customStyle={{
                          lineHeight: 1.4,
                          paddingLeft: "2em",
                          borderRadius: "1em",
                        }}
                        language={match[1]}
                        PreTag="div"
                        wrapLongLines={true}
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  },
                  // intercept p tags
                  // p({ children, key }) {
                  //   return <TypeWrite key={key} text={children.toString()} />;
                  // },
                }}
              >
                {message.response}
              </ReactMarkdown>
              {/* <TextWrapper text={message.response} /> */}
            </div>
          </>
        )}
        {/* {message.prompt && (
          <>
            <AvatarMessageGroup user={user} />
            <span>{message.prompt}</span>
          </>
        )} */}
      </motion.div>
      <div className="scroll-to-this" ref={messagesRef}></div>
    </>
  )
}

// const AvatarMessageGroup = ({
//   user,
//   local = true,
// }: {
//   user?: UserProfile | undefined;
//   local?: boolean;
// }) => {
//   return (
//     <Avatar>
//       {local && (
//         <AvatarImage
//           src={user!.picture!}
//           // alt="@sinhaguild"
//         />
//       )}
//       {!local && (
//         <AvatarImage src="https://i.imgur.com/brHjqVY.png" alt="@sinhaguild" />
//       )}
//       <AvatarFallback>
//         {`${user ? user : "UND"}`.substring(0, 3)}
//       </AvatarFallback>
//     </Avatar>
//   );
// };
