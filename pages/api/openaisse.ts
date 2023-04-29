// type RequestData = {
//   currentModel: string;
//   message: string;
// };

import { OAIStreamRequestData, OpenAIStreamPayload } from "@/types/gpt"
import { OpenAIStream } from "@/lib/handlers"

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI")
}

export const runtime = "edge"

export default async function POST(request: Request) {
  //   const { currentModel, message } = (await request.json()) as RequestData;
  const beforePrompt = ``

  // const afterPrompt = ``;
  const afterPrompt = `Format output with Markdown`
  const breakPoint = `\n\n'''\n\n`

  const {
    prompt,
    temperature,
    frequencyPenalty,
    maxTokens,
    presencePenalty,
    topP,
  } = (await request.json()) as OAIStreamRequestData

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 })
  }

  let input_prompt = `${beforePrompt} ${breakPoint} ${prompt} ${breakPoint} ${afterPrompt}`

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    // model: `${currentModel}`,
    messages: [{ role: "user", content: input_prompt }],
    // temperature: 0.7,
    // top_p: 1,
    // frequency_penalty: 0,
    // presence_penalty: 0,
    // max_tokens: 200,
    max_tokens: maxTokens ? maxTokens : 256,
    temperature: temperature ? temperature : 0.7,
    top_p: topP ? topP : 1,
    presence_penalty: presencePenalty ? presencePenalty : 0,
    frequency_penalty: frequencyPenalty ? frequencyPenalty : 0,
    stream: true,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}

// Retrieve completions as a stream
