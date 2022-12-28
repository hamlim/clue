import { Text } from '@ds-pack/components'
import { Container } from '@ui/Container/Container'
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
        <Link href="/checklist">Get Started!</Link>
      </Text>
    </Container>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
