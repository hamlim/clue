import { Container } from '@ui/Container/Container'
import { Nav } from '@ui/Nav/Nav'
import Actions from '@ui/Actions'
import AssumptionList from './AssumptionList'
import Assumption from '@ui/Assumption/Assumption'

export default function Assumptions() {
  return (
    <Container>
      <Nav active="assumptions" />
      <AssumptionList />
      <br />
      <Assumption key={Math.random()} />
      <Actions />
    </Container>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
