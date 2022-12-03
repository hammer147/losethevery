import Input from './input'
import Suggestion from './suggestion'

export default function MainPage({ params:{word} }: { params: { word: string } }) {
  return (
    <Input word={word}>
      <Suggestion word={word} />
    </Input>
  )
}
