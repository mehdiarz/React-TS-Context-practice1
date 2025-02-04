import { useTimersContext } from "../store/timers-context";

import Button from "./Button";

function TimersControl() {
  const timersCtx = useTimersContext();

  return (
    <div className="text-center my-4">
      <Button
        onClick={
          timersCtx.isRunnig ? timersCtx.stopTimers : timersCtx.startTimers
        }
        className='py-2 px-4 bg-slate-800 text-slate-100 rounded-md'
      >
        {timersCtx.isRunnig ? "Stop" : "Start"} Timers
      </Button>
    </div>
  );
}

export default TimersControl;
