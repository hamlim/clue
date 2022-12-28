'use client'
import {
  Button,
  Portal,
  VisuallyHidden,
  Input,
  Heading,
  Textarea,
  Box,
} from '@ds-pack/components'
import { Room, Suspect, useState as useAppState, Weapon } from '@lib/State'
import { useState } from 'react'

import { panel } from '@styles/ui/Assumption/assumption'

export default function Assumption() {
  let { dispatch, state } = useAppState()
  let [player, setPlayer] = useState('')
  let [suspect, setSuspect] = useState('')
  let [room, setRoom] = useState('')
  let [weapon, setWeapon] = useState('')
  let [notes, setNotes] = useState('')
  return (
    <>
      <Portal isOpen={state.isAssumptionPanelOpen}>
        <div className={panel}>
          <Heading is="h4" variant="h3">
            Player Making Assumption:
          </Heading>
          <br />
          <Input value={player} onChange={(val) => setPlayer(val)}>
            <VisuallyHidden>Player making assumption</VisuallyHidden>
          </Input>
          <br />
          <Heading is="h4" variant="h3">
            Suspect:
          </Heading>
          <br />
          <Input value={suspect} onChange={(val) => setSuspect(val)}>
            <VisuallyHidden>Suspect</VisuallyHidden>
          </Input>
          <br />
          <Heading is="h4" variant="h3">
            Weapon:
          </Heading>
          <br />
          <Input value={weapon} onChange={(val) => setWeapon(val)}>
            <VisuallyHidden>Weapon</VisuallyHidden>
          </Input>
          <br />
          <Heading is="h4" variant="h3">
            Room:
          </Heading>
          <br />
          <Input value={room} onChange={(val) => setRoom(val)}>
            <VisuallyHidden>Room</VisuallyHidden>
          </Input>
          <br />
          <Heading is="h4" variant="h3">
            Notes:
          </Heading>
          <br />
          <Textarea value={notes} onChange={(val) => setNotes(val)}>
            <VisuallyHidden>Notes</VisuallyHidden>
          </Textarea>
          <br />
          <Box display="flex" alignItems="center" justifyContent="space-evenly">
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
