'use client'
import { useState } from '@lib/State'
import { Button, Box } from '@ds-pack/daisyui'
import { Link } from './Link'

export default function Actions() {
  let { dispatch } = useState()

  return (
    <Box className="flex items-center justify-evenly">
      <Button
        onClick={() => {
          dispatch({
            type: 'start-assumption',
          })
        }}
      >
        Assumption
      </Button>
      <Link
        onClick={() => {
          dispatch({
            type: 'clear',
          })
        }}
        href="/"
      >
        End Game
      </Link>
    </Box>
  )
}
