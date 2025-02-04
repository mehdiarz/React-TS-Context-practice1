import { createContext, useContext, type ReactNode } from "react";


type Timer = {
    name: string
    duration: number
  }

type TimersState = {
    isRunnig: boolean
    timers: Timer[]
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

export default function TimersContextProvider({children}: TimersProviderProps) {

    const ContextValue: TimersContextValue = {
        timers: [],
        isRunnig: true,
        addTimers(timerData) {
          
        },
        startTimers() {
          
        },
        stopTimers() {
          
        },
      }

    return (
        <TimersContext.Provider value={ContextValue}>{children}</TimersContext.Provider>
    )
}