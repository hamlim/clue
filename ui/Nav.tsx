import { Text } from '@ds-pack/daisyui'
import { Link } from './Link'

// import { nav } from '@styles/ui/Nav/Nav'

export function Nav({ active }: { active: 'checklist' | 'assumptions' }) {
  return (
    <div className="flex items-center justify-evenly pb-2 mb-4 border-[#013220] border-b-2 border-solid">
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
