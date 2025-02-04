import { useTimersContext } from "../store/timers-context"

import Button from "./Button"

function TimersControl() {

    const timersCtx = useTimersContext()

    return (
        <div>
            <Button>{timersCtx.isRunnig ? 'Stop' : 'Start'}</Button>
        </div>
    )
}   

export default TimersControl