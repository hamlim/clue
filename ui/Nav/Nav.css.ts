import { style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components'
import { greenHex } from '../colors'

export let nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  paddingBottom: vars.space[2],
  borderBottom: `solid 1px ${greenHex}`,
  marginBottom: vars.space[4],
})
