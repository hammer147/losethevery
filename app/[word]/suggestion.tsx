import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

async function getSuggestion(word: string) {
  console.log('fetching in server component...')
  return openai.createCompletion({
    model: 'text-davinci-002',
    prompt: `Combine the word "very" with another adjective to find a more suitable adjective.\n\nvery + cold = freezing\nvery + nice = charming\nvery + high = steep\nvery + shining = gleaming\nvery + ${word} =`,
    temperature: 0.7,
    max_tokens: 25,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  })
}

// ts hack because ts doesn't support async components yet
function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R
}

type Props = { word: string }

const Suggestion = asyncComponent(async ({ word }: Props) => {
  let suggestion = ''
  let result: Awaited<ReturnType<typeof getSuggestion>>

  if (word) {
    result = await getSuggestion(word)
    if (result.data.choices?.[0].text) {
      suggestion = result.data.choices[0].text
    }
  }

  return (
    <div className='text-center  w-96 col-span-4'>
      <p
        className={`cursor-pointer text-center text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold ${
          suggestion ? 'text-green-700' : 'text-gray-500'
        } font-serif`}>
        {suggestion || 'tedious'}
      </p>
    </div>
  )
})

export default Suggestion
