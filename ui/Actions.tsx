'use client'
import { useState } from '@lib/State'
import { Button, Box } from '@ds-pack/components'

export default function Actions() {
  let { dispatch } = useState()

  return (
    <Box display="flex" alignItems="center" justifyContent="space-evenly">
      <Button
        onClick={() => {
          dispatch({
            type: 'start-assumption',
          })
        }}
      >
        Assumption
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: 'clear',
          })
        }}
      >
        End Game
      </Button>
    </Box>
  )
}
