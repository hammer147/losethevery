import Link from 'next/link'

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h2 className='text-center text-3xl m-5'>
        Use OpenAi to find a word that means the same as: very + some adjective
      </h2>
      <Link
        href={'/big'}
        className='border-solid bg-black inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
        Let's get started!
      </Link>
    </div>
  )
}
export default Home
