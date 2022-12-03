'use client'

import { useRouter } from 'next/navigation'
import { use, useState } from 'react'

type Props = {
  word: string
  children: React.ReactNode
}

const fetchRandomAdjective = async () => {
  const res = await fetch('http://localhost:3000/api/random')
  return res.json()
}

const Input = ({ word, children }: Props) => {
  const [input, setInput] = useState(word)

  const router = useRouter()

  // Handle random result (early december 2022, the use hook is not working yet)
  // const handleRandomResult = () => {
  //   const {adjective} = use(fetchRandomAdjective())
  //   router.push(adjective)
  // }
  const handleRandomResult = () => {
    fetchRandomAdjective().then(res => {
      router.push(res.adjective)
    })
  }

  // Handle input submission
  const handleGetResult = () => {
    router.push(input)
  }

  return (
    <div className='max-w-6xl mx-auto min-h-screen flex flex-col items-center mt-32 mb-16 sm:text-center sm:mb-0'>
      <div className='w-12 h-12'>
        <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficon-icons.com%2Ficons2%2F931%2FPNG%2F512%2Fpencil_icon-icons.com_72386.png&amp;f=1&amp;nofb=1' />
      </div>
      <div className='text-gray-400 text-center'>
        Combine "very" with a simple adjective and get a more concise adjective
      </div>

      <div className='grid grid-cols-12 justify-center items-center w-full mb-4 py-16'>
        <p className='text-center col-span-2 text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold'>
          very
        </p>
        <p className='text-center col-span-1 text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold'>
          +
        </p>
        <input
          type='text'
          className='col-span-4 text-center border-b-2 font-sans text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold h-24 transition duration-200 bg-white  border-gray-300 appearance-none focus:outline-none'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <p className='text-center col-span-1 text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold'>
          =
        </p>
        {children}
      </div>
      <div className='mb-4 flex flex-row'>
        <div className='pr-6 cursor-pointer'>
          <button
            type='button'
            onClick={handleGetResult}
            className='border-solid bg-black inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
            Get/Refresh Result
          </button>
        </div>
        <div className='pl-6 cursor-pointer'>
          <button
            type='button'
            onClick={handleRandomResult}
            className='border-solid bg-black inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
            Random
          </button>
        </div>
      </div>
    </div>
  )
}
export default Input
