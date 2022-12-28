import { Link as StyledLink } from '@ds-pack/components'
import NextLink from 'next/link'

export function Link(props) {
  return <StyledLink is={NextLink} {...props} />
}
