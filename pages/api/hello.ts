// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  user?: string;
  locale?: string;
  currentModel?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message, user, locale, currentModel } = req.body;
  // const defaults = { message: "test", user: "abc", locale: "remote" };

  res
    .status(200)
    .json({ user, message: "I'M A PLACEHOLDER. SIMPLE. INCONSEQUENTIAL - UNTIL SOMETHING BREAKS.", locale, currentModel });
}
