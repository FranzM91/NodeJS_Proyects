import { CohereClient } from "cohere-ai";

import {config} from 'dotenv';
config();

const cohere = new CohereClient({
  token: process.env.CHOERE_AI_ACCESS_TOKEN, // This is your trial API key
});

(async () => {
  const response = await cohere.generate({
    model: "command",
    prompt: "how to get started in web development",
    maxTokens: 300,
    temperature: 0.9,   //grado de aleatoriedad de las respuestas
    k: 0,               
    p: 1,               //probabilidad de las respuestas
    stopSequences: [],
    returnLikelihoods: "NONE"
  });
  console.log(`Prediction: ${response.generations[0].text}`);
})();