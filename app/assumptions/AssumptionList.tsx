'use client'
import { Text, Box, Button } from '@ds-pack/daisyui'
import { useState } from '@lib/State'

export default function AssumptionList() {
  let { state, dispatch } = useState()

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
                <Box is="pre" className="whitespace-pre-wrap">
                  {assumption.notes}
                </Box>
              </>
            ) : null}
            <br />
            {/* <Button
              variant="warning"
              className="btn-sm"
              onClick={() => {
                dispatch({
                  type: 'edit-assumption',
                  assumption,
                  assumptionId: id,
                })
              }}
            >
              Edit
            </Button> */}
          </Box>
        )
      })}
    </>
  )
}
