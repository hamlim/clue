import { Container } from '@ui/Container'
import BoardPicker from './BoardPicker'
import { Link } from '@ui/Link'

export default function Checklist() {
  return (
    <Container>
      <BoardPicker />
      <br />
      <Link href="/checklist">Play!</Link>
    </Container>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
