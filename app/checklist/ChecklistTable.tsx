'use client'
import {
  Checkbox,
  Heading,
  // Stack,
  // VisuallyHidden,
  // Text,
} from '@ds-pack/daisyui'
import { useState } from '@lib/State'

function Split({ children }) {
  return <div className="zflex zjustify-between zitems-center">{children}</div>
}

export default function ChecklistTable() {
  let { state, dispatch } = useState()

  return (
    <>
      <Heading is="h3" variant="h3">
        Suspects:
      </Heading>
      {state.grid.suspects.map((suspect) => (
        <Split key={suspect.name}>
          <Checkbox
            checked={suspect.cleared}
            onChange={() => {
              dispatch({
                type: 'toggle-suspect',
                name: suspect.name,
              })
            }}
          >
            {suspect.name}
          </Checkbox>
        </Split>
      ))}
      <br />
      <Heading is="h3" variant="h3">
        Weapons:
      </Heading>
      {state.grid.weapons.map((weapon) => (
        <Split key={weapon.name}>
          <Checkbox
            checked={weapon.cleared}
            onChange={() => {
              dispatch({
                type: 'toggle-weapon',
                name: weapon.name,
              })
            }}
          >
            {weapon.name}
          </Checkbox>
        </Split>
      ))}
      <br />
      <Heading is="h3" variant="h3">
        Rooms:
      </Heading>
      {state.grid.rooms.map((room) => (
        <Split key={room.name}>
          <Checkbox
            checked={room.cleared}
            onChange={() => {
              dispatch({
                type: 'toggle-room',
                name: room.name,
              })
            }}
          >
            {room.name}
          </Checkbox>
        </Split>
      ))}
    </>
  )
}
