import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import 'dotenv/config';

console.log('Hello, World! OPENAI_API_KEY ', process.env.OPENAI_API_KEY);

const openai = new OpenAI();

const speechFile = path.resolve(`./${Date()}.mp3`);

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: 'tts-1',
    voice: 'echo',
    input:
      'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.',
  });

  console.log(speechFile);

  const buffer = Buffer.from(await mp3.arrayBuffer());

  await fs.promises.writeFile(speechFile, buffer);
}

main();
