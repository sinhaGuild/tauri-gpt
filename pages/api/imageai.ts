import { NextApiRequest, NextApiResponse } from "next";

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
  const { user, message, locale, currentModel } = req.body;
  let prompt = `${beforePrompt} ${breakPoint} ${message} ${breakPoint} ${afterPrompt}`;

  // Log prompt
  console.log(prompt);

  // Call OpenAI API

  try {
    const completion = await openai.createImage({
      prompt: `${prompt}`,
      n: 2, // no. of images to generate. default 1. 1-10
      size: "1024x1024", //Must be one of 256x256, 512x512, or 1024x1024.
      // response_format: "b64_json",
      // user: `${userId}`
    });

    // response = {created, data: [{url: }, {url:}]}
    // console.log("from server: " + JSON.stringify(completion.data.data[0].url));
    res.status(200).json({
      user: `${user}`,
      // message: `${completion.data.data[0].url}`,
      message: `${completion.data.data.map((r: any) => r.url).join()}`,
      locale: `${locale}`,
      // locale: "remoteImage",
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
