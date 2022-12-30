'use client'
import { Text, Box } from '@ds-pack/components'
import { useState } from '@lib/State'

import { note } from '@styles/app/assumptions/AssumptionList'

export default function AssumptionList() {
  let { state } = useState()

  if (state.assumptions.length === 0) {
    return <Text>No assumptions yet!</Text>
  }

  return (
    <>
      {state.assumptions.map((assumption, id) => {
        return (
          <Box key={id}>
            Assumption made by:{' '}
            <Text is="strong" fontWeight="bold">
              {assumption.player}
            </Text>
            <br />
            Suspect:{' '}
            <Text is="strong" fontWeight="bold">
              {assumption.suspect}
            </Text>
            <br />
            Weapon:{' '}
            <Text is="strong" fontWeight="bold">
              {assumption.weapon}
            </Text>
            <br />
            Room:{' '}
            <Text is="strong" fontWeight="bold">
              {assumption.room}
            </Text>
            <br />
            {assumption.notes ? (
              <>
                Notes:{' '}
                <Box is="pre" className={note}>
                  {assumption.notes}
                </Box>
              </>
            ) : null}
            <br />
          </Box>
        )
      })}
    </>
  )
}
