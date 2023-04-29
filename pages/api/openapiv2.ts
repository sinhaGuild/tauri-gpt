import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Prompt values
  const beforePrompt = ``;
  // const afterPrompt = ``;
  const afterPrompt = `Format output with Markdown`;
  const breakPoint = `\n\n'''\n\n`;

  const {
    prompt,
    temperature,
    maxTokens,
    topP,
    presencePenalty,
    frequencyPenalty,
  } = req.body;

  let input_prompt = `${beforePrompt} ${breakPoint} ${prompt} ${breakPoint} ${afterPrompt}`;

  try {
    const completion = await openai.createCompletion({
      //   model: `${currentModel}` /*"text-davinci-003"*/,
      // model: "gpt-3.5-turbo",
      model: "text-davinci-003",
      // echo: true,
      prompt: `${input_prompt}`,
      max_tokens: maxTokens ? maxTokens : 256,
      temperature: temperature ? temperature : 0.7,
      top_p: topP ? topP : 1,
      presence_penalty: presencePenalty ? presencePenalty : 0,
      frequency_penalty: frequencyPenalty ? frequencyPenalty : 0,
      // stream: true,
    });

    console.log("from server: " + JSON.stringify(completion.data.choices[0]));

    res.status(200).json({
      response: {
        user: "OAI",
        output: `${completion.data.choices[0].text}`,
      },
    });
    // res.status(200).json({ message: completion.data.choices[0].text });
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      res.status(400).json({
        msg: "Request failed with error",
        reason: `${error.response}`,
      });
    } else {
      console.log(error.message);
      res
        .status(400)
        .json({ msg: "Request failed with error", reason: `${error.message}` });
    }
  }
}
