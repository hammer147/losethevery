import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

type Data =
  | {
      adjective: string
    }
  | { error: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {

    console.log('fetching in api route...')

    let adjective = ''

    const result = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt:
        'Come up with one random adjective that goes well with the word "very" in front of it:\nAdjective: very',
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })

    if (result.data.choices?.[0].text) {
      adjective = result.data.choices[0].text.trim()
    }

    res.status(200).json({ adjective })
  } catch (err) {
    res.status(500).send({ error: 'Error while fetching data' })
  }
}
