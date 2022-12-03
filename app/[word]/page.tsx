import Input from './input'
import Suggestion from './suggestion'

export default function Home({ params:{word} }: { params: { word: string } }) {
  return (
    <Input word={word}>
      <Suggestion word={word} />
    </Input>
  )
}
