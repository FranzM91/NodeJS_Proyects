import {HfInference} from '@huggingface/inference';

import {config} from 'dotenv';
config();

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

// **************** Step describe Image ****************
// const imageURL = "https://www.seattlehumane.org/wp-content/uploads/2018/10/shs-blog-features_0018_kitten1_1.jpg";
const imageURL = "https://img.freepik.com/free-photo/side-view-female-farmer-with-her-horse-ranch_23-2148956729.jpg";

const model = "Salesforce/blip-image-captioning-large";

const response = await fetch(imageURL);
const blob = await response.blob();
const result = await hf.imageToText({
    data: blob,
    model: model
});
console.log(result);
// **************** Step describe Image ****************

// **************** Step Translate ****************
// await hf.translation({
//     model: 't5-base',
//     inputs: 'My name is Wolfgang and I live in Berlin'
//   })
  
const resultTranslate = await hf.translation({
    model: 'facebook/nllb-200-distilled-600M',
    // model: 'facebook/mbart-large-50-many-to-many-mmt',
    // model: 'Helsinki-NLP/opus-mt-tc-big-tr-en',
    inputs: result.generated_text,
    // inputs: 'Hello world from Hugging Face',
    parameters: {
    "src_lang": "en",
    "tgt_lang": "es"
   }
  })

console.log(resultTranslate);
// **************** Step Translate ****************
