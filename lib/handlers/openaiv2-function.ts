import { GetLLMResponseProps } from "@/types/gpt"

// call function(chatlog, prompt) to get response and setChatlog
export const getLLMResponse = async ({
  newChatlogWithChatInput,
  currentModel,
  setChatlog,
  setPrompt,
  temperature,
  maxTokens,
  topP,
  presencePenalty,
  frequencyPenalty,
  setIsLoading,
}: GetLLMResponseProps) => {
  const url = `${currentModel}`
  console.log("🚀 ~ file: llm-input-group.tsx:39 ~ getLLMResponse ~ url:", url)

  let inputPrompt = newChatlogWithChatInput
    .map((m) => `${m.user}:${m.prompt ? m.prompt : m.response}`)
    .join(" ")

  // const toasting = await toast
  //   .promise(
  //     fetch(url, {
  try {
    const response = await fetch(url, {
      body: JSON.stringify({
        prompt: inputPrompt,
        temperature: temperature ? temperature[0] : 0.56,
        maxTokens: maxTokens ? maxTokens[0] : 256,
        topP: topP ? topP[0] : 1,
        presencePenalty: presencePenalty ? presencePenalty[0] : 0,
        frequencyPenalty: frequencyPenalty ? frequencyPenalty[0] : 0,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      // mode: "cors",
    })
      // {
      //   pending: {
      //     render() {
      //       return `"~(˘▾˘~) COMPILING COMPLETIONS..`;
      //     },
      //     className: "model-change-notification",
      //     bodyClassName: "model-change-notification",
      //   },
      //   success: "ヘ( ^o^)ノ DONE!",
      //   error: "(╯°□°）╯︵ ┻━┻ REQUEST FAILED!",
      // }
      // )
      .then((res) => res.json())
      .then((data) =>
        setChatlog([
          ...newChatlogWithChatInput,
          {
            user: data.response.user,
            response: data.response.output,
          },
        ])
      )
    // setPrompt("");
    setIsLoading(false)
    // return toasting;
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
  }
}
