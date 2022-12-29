'use client'
import { useState } from '@lib/State'
import {
  Heading,
  Text,
  RadioButton,
  Fieldset,
  Banner,
} from '@ds-pack/components'

export default function BoardPicker() {
  let { state, dispatch } = useState()
  return (
    <>
      <Heading is="h2" variant="h3">
        Choose Board:
      </Heading>
      <Text>
        This app supports both the classic board or the new Master Detective
        board, you must pick one of the below before proceeding!
      </Text>
      <br />
      <Banner variant="warning">
        <Text>
          Warning: If you already started a game and you go to change the board,
          your checklist will be cleared!
        </Text>
      </Banner>
      <br />
      <Fieldset>
        <RadioButton
          checked={state.board === 'classic'}
          value="classic"
          name="board"
          onChange={(val) => {
            dispatch({
              type: 'set-board',
              board: val,
            })
          }}
        >
          Classic
        </RadioButton>
        <RadioButton
          checked={state.board === 'master-detective'}
          value="master-detective"
          name="board"
          onChange={(val) => {
            dispatch({
              type: 'set-board',
              board: val,
            })
          }}
        >
          Master Detective
        </RadioButton>
      </Fieldset>
    </>
  )
}
