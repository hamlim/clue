'use client'
import { createContext, Dispatch, useContext, useReducer } from 'react'
import { useLocalStorage } from '@ds-pack/use-local-storage'

interface ClassicGrid {
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

interface MasterDetectiveGrid {
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
    {
      name: 'Mme. Rose'
      cleared: boolean
    },
    {
      name: 'Sgt. Gray'
      cleared: boolean
    },
    {
      name: 'M. Brunette'
      cleared: boolean
    },
    {
      name: 'Miss Peach'
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
    {
      name: 'Poison'
      cleared: boolean
    },
    {
      name: 'Horseshoe'
      cleared: boolean
    },
  ]
  rooms: [
    {
      name: 'Courtyard'
      cleared: boolean
    },
    {
      name: 'Gazebo'
      cleared: boolean
    },
    {
      name: 'Drawing Room'
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
      name: 'Carriage House'
      cleared: boolean
    },
    {
      name: 'Trophy Room'
      cleared: boolean
    },
    {
      name: 'Conservatory'
      cleared: boolean
    },
    {
      name: 'Studio'
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
      name: 'Fountain'
      cleared: boolean
    },
  ]
}

type Grid = ClassicGrid | MasterDetectiveGrid

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

type Board = 'classic' | 'master-detective'

type Action =
  | {
      type: 'set-board'
      board: Board
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
  assumptions: Array<Assumption>
  grid: Grid
  isAssumptionPanelOpen: boolean
  board: Board
}

interface Context {
  dispatch: Dispatch<Action>
  state: State
}

let stateContext = createContext<Context>(undefined)

let initialClassicGrid: ClassicGrid = {
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
}

let initialMasterDetectiveGrid: MasterDetectiveGrid = {
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
    {
      name: 'Mme. Rose',
      cleared: false,
    },
    {
      name: 'Sgt. Gray',
      cleared: false,
    },
    {
      name: 'M. Brunette',
      cleared: false,
    },
    {
      name: 'Miss Peach',
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
    {
      name: 'Poison',
      cleared: false,
    },
    {
      name: 'Horseshoe',
      cleared: false,
    },
  ],
  rooms: [
    {
      name: 'Courtyard',
      cleared: false,
    },
    {
      name: 'Gazebo',
      cleared: false,
    },
    {
      name: 'Drawing Room',
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
      name: 'Carriage House',
      cleared: false,
    },
    {
      name: 'Trophy Room',
      cleared: false,
    },
    {
      name: 'Conservatory',
      cleared: false,
    },
    {
      name: 'Studio',
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
      name: 'Fountain',
      cleared: false,
    },
  ],
}

let init: State = {
  assumptions: [],
  grid: initialClassicGrid,
  isAssumptionPanelOpen: false,
  board: 'classic',
}

function reducer(state: State, action: Action): State {
  console.log(action)
  if (action.type) {
    switch (action.type) {
      case 'set-board': {
        return {
          ...state,
          grid:
            action.board === 'classic'
              ? initialClassicGrid
              : initialMasterDetectiveGrid,
          board: action.board,
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
          } as Grid,
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
          } as Grid,
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
          } as Grid,
        }
      }
      case 'clear': {
        return init
      }
    }
  } else {
    return {
      ...(action as unknown as State),
    }
  }
}

export function Provider({ children }) {
  let [state, dispatch] = useLocalStorage<State>(useReducer(reducer, init), {
    key: 'clue-state',
  })

  return (
    <stateContext.Provider value={{ dispatch, state }}>
      {children}
    </stateContext.Provider>
  )
}

export function useState() {
  return useContext(stateContext)
}
