import { style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components'

export let html = style({
  minHeight: '100vh',
})

export let body = style({
  minHeight: '100vh',
})

export let main = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export let header = style({
  flexShrink: 1,
  backgroundColor: `rgba(1, 50, 32, .3)`,
  textAlign: 'center',
  padding: vars.space[4],
})

export let footer = style({
  flexShrink: 1,
  backgroundColor: `rgba(1, 50, 32, .3)`,
  padding: vars.space[4],
  textAlign: 'center',
})

export let content = style({
  flexGrow: 1,
  paddingTop: vars.space[4],
  paddingBottom: vars.space[4],
})
