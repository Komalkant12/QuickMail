import cors from 'cors';
import express from 'express';
// import * as dotenv from "dotenv";
import OpenAI from 'openai';

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: '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',
});


app.post('/generate-email', async (req, res) => {
    try {
      const subject = req.body.subject;
      const purpose = req.body.purpose;
      
      const prompt = `Compose an email for ${subject}. The purpose of this email is to: ${purpose}`;
      
      const response = await openai.completions.create({
        prompt,
        model: "text-davinci-003",
        max_tokens: 200,
      });
      
      const emailBody = response.choices[0].text;
      
      console.log('Generated Email Body:', emailBody);
      
      res.status(200).json({ emailBody });
    } catch (error) {
      console.error('Error generating email:', error);
      res.status(500).json({ error: 'An error occurred while generating the email.' });
    }
});

app.listen("8080", () => {
    console.log("Backend work correctly...,");
});