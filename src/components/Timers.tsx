import { useTimersContext } from "../store/timers-context"

import Timer from "./Timer"

function Timers() {
    const {timers} = useTimersContext()
    return (
        <ul className="text-center flex flex-row gap-5 justify-center">
            {timers.map((timer) => {
                return(
                <li key={timer.name} className="bg-slate-800 p-5 mx-2 my-6 rounded-md"><Timer {...timer}></Timer></li>
            )}) }
        </ul>
    )
}

export default Timers