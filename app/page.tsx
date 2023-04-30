import { Text } from '@ds-pack/daisyui'
import { Container } from '@ui/Container'
import { Link } from '@ui/Link'

export default function App() {
  return (
    <Container>
      <Text>
        This app is meant to be a digital version of a the Clue boardgame
        notebook sheet!
      </Text>
      <br />
      <Text>
        <Link href="/choose-board">Choose board type</Link> to get started!
      </Text>
    </Container>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
