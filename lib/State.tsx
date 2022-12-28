'use client'
import { createContext, Dispatch, useContext, useReducer } from 'react'

interface Grid {
  suspects: [
    {
      name: 'Colonel Mustard'
      cleared: boolean
    },
    {
      name: 'Professor Plum'
      cleared: boolean
    },
    {
      name: 'Mr. Green'
      cleared: boolean
    },
    {
      name: 'Mrs. Peacock'
      cleared: boolean
    },
    {
      name: 'Miss Scarlet'
      cleared: boolean
    },
    {
      name: 'Mrs. White'
      cleared: boolean
    },
  ]
  weapons: [
    {
      name: 'Knife'
      cleared: boolean
    },
    {
      name: 'Candlestick'
      cleared: boolean
    },
    {
      name: 'Revolver'
      cleared: boolean
    },
    {
      name: 'Rope'
      cleared: boolean
    },
    {
      name: 'Lead Pipe'
      cleared: boolean
    },
    {
      name: 'Wrench'
      cleared: boolean
    },
  ]
  rooms: [
    {
      name: 'Hall'
      cleared: boolean
    },
    {
      name: 'Lounge'
      cleared: boolean
    },
    {
      name: 'Dining Room'
      cleared: boolean
    },
    {
      name: 'Kitchen'
      cleared: boolean
    },
    {
      name: 'Ballroom'
      cleared: boolean
    },
    {
      name: 'Conservatory'
      cleared: boolean
    },
    {
      name: 'Billiard Room'
      cleared: boolean
    },
    {
      name: 'Library'
      cleared: boolean
    },
    {
      name: 'Study'
      cleared: boolean
    },
  ]
}

export type Room = Grid['rooms'][number]['name']
export type Suspect = Grid['suspects'][number]['name']
export type Weapon = Grid['weapons'][number]['name']

interface Assumption {
  room: Room
  suspect: Suspect
  weapon: Weapon
  player: string
  notes?: string
}

type Action =
  | {
      type: 'set-players'
      number: number
    }
  | {
      type: 'toggle-suspect'
      name: Suspect
    }
  | {
      type: 'toggle-weapon'
      name: Weapon
    }
  | {
      type: 'toggle-room'
      name: Room
    }
  | {
      type: 'start-assumption'
    }
  | {
      type: 'exit-assumption'
    }
  | {
      type: 'make-assumption'
      assumption: Assumption
    }
  | {
      type: 'clear'
    }

interface State {
  players: number
  assumptions: Array<Assumption>
  grid: Grid
  isAssumptionPanelOpen: boolean
}

interface Context {
  dispatch: Dispatch<Action>
  state: State
}

let stateContext = createContext<Context>(undefined)

let init: State = {
  players: 0,
  assumptions: [],
  grid: {
    suspects: [
      {
        name: 'Colonel Mustard',
        cleared: false,
      },
      {
        name: 'Professor Plum',
        cleared: false,
      },
      {
        name: 'Mr. Green',
        cleared: false,
      },
      {
        name: 'Mrs. Peacock',
        cleared: false,
      },
      {
        name: 'Miss Scarlet',
        cleared: false,
      },
      {
        name: 'Mrs. White',
        cleared: false,
      },
    ],
    weapons: [
      {
        name: 'Knife',
        cleared: false,
      },
      {
        name: 'Candlestick',
        cleared: false,
      },
      {
        name: 'Revolver',
        cleared: false,
      },
      {
        name: 'Rope',
        cleared: false,
      },
      {
        name: 'Lead Pipe',
        cleared: false,
      },
      {
        name: 'Wrench',
        cleared: false,
      },
    ],
    rooms: [
      {
        name: 'Hall',
        cleared: false,
      },
      {
        name: 'Lounge',
        cleared: false,
      },
      {
        name: 'Dining Room',
        cleared: false,
      },
      {
        name: 'Kitchen',
        cleared: false,
      },
      {
        name: 'Ballroom',
        cleared: false,
      },
      {
        name: 'Conservatory',
        cleared: false,
      },
      {
        name: 'Billiard Room',
        cleared: false,
      },
      {
        name: 'Library',
        cleared: false,
      },
      {
        name: 'Study',
        cleared: false,
      },
    ],
  },
  isAssumptionPanelOpen: false,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set-players': {
      return {
        ...state,
        players: action.number,
      }
    }
    case 'start-assumption': {
      return {
        ...state,
        isAssumptionPanelOpen: true,
      }
    }
    case 'exit-assumption': {
      return {
        ...state,
        isAssumptionPanelOpen: false,
      }
    }
    case 'make-assumption': {
      return {
        ...state,
        isAssumptionPanelOpen: false,
        assumptions: [...state.assumptions, action.assumption],
      }
    }
    case 'toggle-room': {
      return {
        ...state,
        grid: {
          ...state.grid,
          rooms: state.grid.rooms.map((room) => {
            if (room.name === action.name) {
              return {
                ...room,
                cleared: !room.cleared,
              }
            }
            return room
          }) as Grid['rooms'],
        },
      }
    }
    case 'toggle-weapon': {
      return {
        ...state,
        grid: {
          ...state.grid,
          weapons: state.grid.weapons.map((weapon) => {
            if (weapon.name === action.name) {
              return {
                ...weapon,
                cleared: !weapon.cleared,
              }
            }
            return weapon
          }) as Grid['weapons'],
        },
      }
    }
    case 'toggle-suspect': {
      return {
        ...state,
        grid: {
          ...state.grid,
          suspects: state.grid.suspects.map((suspect) => {
            if (suspect.name === action.name) {
              return {
                ...suspect,
                cleared: !suspect.cleared,
              }
            }
            return suspect
          }) as Grid['suspects'],
        },
      }
    }
    case 'clear': {
      return init
    }
  }
}

export function Provider({ children }) {
  let [state, dispatch] = useReducer(reducer, init)

  return (
    <stateContext.Provider value={{ dispatch, state }}>
      {children}
    </stateContext.Provider>
  )
}

export function useState() {
  return useContext(stateContext)
}
