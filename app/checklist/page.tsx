import ChecklistTable from './ChecklistTable'
import Assumption from '@ui/Assumption'
import { Container } from '@ui/Container'
import Actions from '@ui/Actions'
import { Nav } from '@ui/Nav'

export default function Checklist() {
  return (
    <Container>
      <Nav active="checklist" />
      <ChecklistTable />
      <br />
      <Assumption />
      <br />
      <Actions />
    </Container>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
