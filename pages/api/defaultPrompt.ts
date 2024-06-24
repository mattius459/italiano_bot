// pages/api/defaultPrompt.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function defaultPromptHandler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'path', 'to', 'your', 'defaultPrompt.txt');
  console.log(filePath)
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file from disk: ${err}`);
      return res.status(500).json({ error: 'Failed to load prompt' });
    }
    res.status(200).send(data);
  });
}