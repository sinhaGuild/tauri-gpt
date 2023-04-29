import { NextApiRequest, NextApiResponse } from "next";

const MAX_TOKENS = process.env.MAX_TOKENS;

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  // organization: process.env.OPENAI_ORGANIZATION
});

const openai = new OpenAIApi(configuration);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Prompt values
  const beforePrompt = ``;
  const afterPrompt = ``;
  const breakPoint = `\n\n'''\n\n`;

  // Construct the prompt
  const { user, message, locale, currentModel, maxTokens } = req.body;
  let prompt = `${beforePrompt} ${breakPoint} ${message} ${breakPoint} ${afterPrompt}`;

  // Log prompt
  // console.log(prompt);

  // Call OpenAI API

  try {
    const completion = await openai.createCompletion({
      model: `${currentModel}` /*"text-davinci-003"*/,
      prompt: `${prompt}`,
      max_tokens: MAX_TOKENS ? +MAX_TOKENS : 100,
      // max_tokens: maxTokens ? maxTokens : MAX_TOKENS,
      temperature: 0.7,
      top_p: 1,
      presence_penalty: 0,
      frequency_penalty: 0.5,
    });

    // console.log("from server: " + JSON.stringify(completion.data.choices[0]));
    res.status(200).json({
      user: `${user}`,
      message: `${completion.data.choices[0].text}`,
      locale: `${locale}`,
      currentModel: `${currentModel}`,
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
};
