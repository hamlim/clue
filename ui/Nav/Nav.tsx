import { Text } from '@ds-pack/components'
import { Link } from '../Link'

import { nav } from '@styles/ui/Nav/Nav'

export function Nav({ active }: { active: 'checklist' | 'assumptions' }) {
  return (
    <div className={nav}>
      {active === 'checklist' ? (
        <Text>Checklist</Text>
      ) : (
        <Link href="/checklist">Checklist</Link>
      )}
      {active === 'assumptions' ? (
        <Text>Assumptions</Text>
      ) : (
        <Link href="/assumptions">Assumptions</Link>
      )}
    </div>
  )
}
