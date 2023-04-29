import { GetLLMResponseProps } from "@/types/gpt"

// call function(chatlog, prompt) to get response and setChatlog
export const getCompletionStream = async ({
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
  //   const [partial, setPartial] = useState<string[]>([]);
  const url = `${currentModel}`
  console.log("🚀 ~ file: llm-input-group.tsx:39 ~ getLLMResponse ~ url:", url)

  let inputPrompt = newChatlogWithChatInput
    .map((m) => `${m.user}:${m.prompt ? m.prompt : m.response}`)
    .join(" ")

  try {
    const response = await fetch(url, {
      body: JSON.stringify({
        // prompt: newChatlogWithChatInput
        //   .map((c: any) => (c.user ? c.user : "" + ":" + c.prompt))
        //   .join(" "),
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

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = response.body
    if (!data) {
      return
    }

    const reader = data.getReader()
    const decoder = new TextDecoder()
    let done = false

    let currentResponse: string[] = []

    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)
      // currentResponse = [...currentResponse, message, chunkValue];
      currentResponse = [...currentResponse, chunkValue]
      // set partial
      //   setPartial((prev) => [...prev.slice(0, -1), currentResponse.join("")]);

      setChatlog((prev) => [
        // ...prev.slice(0, -1),
        ...newChatlogWithChatInput.slice(0, -1),
        {
          user: "",
          response: `${currentResponse.join("")}`,
        },
      ])
      //   setChatlog((prev) => [...prev.slice(0, -1), currentResponse.join("")]);
    }

    //   .then((res) => res.json())
    //   .then((data) =>
    //     setChatlog([
    //       ...newChatlogWithChatInput,
    //       {
    //         user: data.response.user,
    //         response: data.response.output,
    //       },
    //     ])
    //   );
    // setPrompt(" ");
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
