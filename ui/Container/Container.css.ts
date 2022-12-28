import { style } from '@vanilla-extract/css'
// import { vars } from '@ds-pack/components'

interface Args {
  small?: any
  medium?: any
  large?: any
}

function breakpoints({ small, medium, large }: Args) {
  return {
    '@media': {
      ...(small
        ? {
            'screen and (min-width: 20em)': small,
          }
        : {}),
      ...(medium
        ? {
            'screen and (min-width: 40em)': medium,
          }
        : {}),
      ...(large
        ? {
            'screen and (min-width: 60em)': large,
          }
        : {}),
    },
  }
}

export let container = style({
  maxWidth: '95vw',
  margin: '0 auto',
  ...breakpoints({
    small: {
      maxWidth: '90vw',
    },
    medium: {
      maxWidth: '85vw',
    },
    large: {
      maxWidth: '70ch',
    },
  }),
})
