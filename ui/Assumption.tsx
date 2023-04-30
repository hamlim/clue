'use client'
import {
  Button,
  Portal,
  VisuallyHidden,
  Input,
  Heading,
  Textarea,
  Box,
} from '@ds-pack/daisyui'
import { Room, Suspect, useState as useAppState, Weapon } from '@lib/State'
import { useState } from 'react'

export default function Assumption() {
  let { dispatch, state } = useAppState()
  let [player, setPlayer] = useState('')
  let [suspect, setSuspect] = useState('')
  let [room, setRoom] = useState('')
  let [weapon, setWeapon] = useState('')
  let [notes, setNotes] = useState('')
  let [configured, setConfigured] = useState(false)
  if (
    state.tempAssumption &&
    player !== state.tempAssumption.player &&
    !configured
  ) {
    setConfigured(true)
    setPlayer(state.tempAssumption.player)
    setSuspect(state.tempAssumption.suspect)
    setRoom(state.tempAssumption.room)
    setWeapon(state.tempAssumption.weapon)
    setNotes(state.tempAssumption.notes)
  }
  return (
    <>
      <Portal isOpen={state.isAssumptionPanelOpen}>
        <div className="fixed bottom-0 left-0 right-0 h-[60vh] border-t-xl bg-white p-4 z-10 overflow-scroll shadow-[-10px_0_30px_0_#013220,10px_0_30px_0_#013220] rounded-t-xl">
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
        </div>
      </Portal>
    </>
  )
}
