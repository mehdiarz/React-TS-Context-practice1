import { createContext, useContext, useReducer, type ReactNode } from "react";


type Timer = {
    name: string
    duration: number
  }

type TimersState = {
    isRunnig: boolean
    timers: Timer[]
}

const initialState: TimersState = {
    isRunnig: true,
    timers: [],
}

type TimersContextValue = TimersState & {
    addTimers: (timerData: Timer) => void
    startTimers: () => void
    stopTimers: () => void
  }

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext);
    if (timersCtx === null) {
      throw new Error('useTimersContext must be used within a TimersProvider');
    }
    return timersCtx;
  }

type TimersProviderProps = {
    children: ReactNode
  }
  
  type StartTimersAction = {
    type: 'START_TIMERS'
  }
  
  type StopTimersAction = {
    type: 'STOP_TIMERS'
  }
  
  type AddTimerAction = {
    type: 'ADD_TIMER'
    payload: Timer
  }

  type Action = StartTimersAction | StopTimersAction | AddTimerAction
  

  function timersReducer(state: TimersState, action: Action): TimersState {
    switch (action.type) {
      case 'ADD_TIMER':
        return {
          ...state,
          timers: [...state.timers, 
            {
              name: action.payload.name,
              duration: action.payload.duration
            }
          ],
        };
      case 'START_TIMERS':
        return {
          ...state,
          isRunnig: true,
        };
      case 'STOP_TIMERS':
        return {
          ...state,
          isRunnig: false,
        };
      default:
        return state;
    }
  }
export default function TimersContextProvider({children}: TimersProviderProps) {

    const [timersState, dispatch] = useReducer(timersReducer, initialState)

    const ContextValue: TimersContextValue = {
        timers: timersState.timers,
        isRunnig: timersState.isRunnig,
        addTimers(timerData) {
          dispatch({ type: 'ADD_TIMER' , payload: timerData})
        },
        startTimers() {
          dispatch({ type: 'START_TIMERS' })
        },
        stopTimers() {
          dispatch({ type: 'STOP_TIMERS' })
        },
      }

    return (
        <TimersContext.Provider value={ContextValue}>{children}</TimersContext.Provider>
    )
}