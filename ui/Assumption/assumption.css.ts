import { style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components'
import { greenHex } from '@ui/colors'

export let panel = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '60vh',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  backgroundColor: vars.colors.white,
  padding: vars.space[4],
  zIndex: 2,
  overflow: 'scroll',
  boxShadow: `-10px 0px 30px 0px ${greenHex}, 10px 0px 30px 0px ${greenHex}`,
})
