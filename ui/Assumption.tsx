'use client'
import { Button, Portal, Input, Textarea, Box } from '@ds-pack/daisyui'
import { Room, Suspect, useState as useAppState, Weapon } from '@lib/State'
import { useState } from 'react'

function AssumptionForm({
  initPlayer = '',
  initSuspect = '',
  initRoom = '',
  initWeapon = '',
  initNotes = '',
  // @ts-ignore
  dispatch,
} = {}) {
  let [player, setPlayer] = useState(initPlayer)
  let [suspect, setSuspect] = useState(initSuspect)
  let [room, setRoom] = useState(initRoom)
  let [weapon, setWeapon] = useState(initWeapon)
  let [notes, setNotes] = useState(initNotes)

  return (
    <>
      <Input value={player} onChange={setPlayer}>
        <>Player making assumption</>
      </Input>
      <br />
      <Input value={suspect} onChange={setSuspect}>
        <>Suspect</>
      </Input>
      <br />
      <Input value={weapon} onChange={setWeapon}>
        <>Weapon</>
      </Input>
      <br />
      <Input value={room} onChange={setRoom}>
        <>Room</>
      </Input>
      <br />
      <Textarea value={notes} onChange={setNotes}>
        <>Notes</>
      </Textarea>
      <br />
      <Box className="flex items-center justify-evenly">
        <Button
          onClick={() => {
            setRoom('')
            setPlayer('')
            setNotes('')
            setWeapon('')
            setSuspect('')
            dispatch({
              type: 'make-assumption',
              assumption: {
                room: room as Room,
                weapon: weapon as Weapon,
                suspect: suspect as Suspect,
                notes,
                player,
              },
            })
          }}
        >
          Make Assumption
        </Button>
        <Button
          onClick={() => {
            dispatch({
              type: 'exit-assumption',
            })
          }}
        >
          Cancel
        </Button>
      </Box>
    </>
  )
}

export default function Assumption() {
  let { dispatch, state } = useAppState()
  let formProps: Partial<Parameters<typeof AssumptionForm>[0]> = {}
  if (state.editing.status) {
    formProps.initPlayer = state.editing.assumption.player
    formProps.initRoom = state.editing.assumption.room
    formProps.initSuspect = state.editing.assumption.suspect
    formProps.initNotes = state.editing.assumption.notes
    formProps.initWeapon = state.editing.assumption.weapon
  }
  return (
    <>
      <Portal isOpen={state.isAssumptionPanelOpen}>
        <div className="fixed bottom-0 left-0 right-0 h-[60vh] border-t-xl bg-white p-4 z-10 overflow-scroll shadow-[-10px_0_30px_0_#013220,10px_0_30px_0_#013220] rounded-t-xl">
          <AssumptionForm
            dispatch={dispatch}
            key={String(state.editing.status)}
            {...formProps}
          />
        </div>
      </Portal>
    </>
  )
}
