import { useTimersContext } from "../store/timers-context";

import Button from "./Button";

function TimersControl() {
  const timersCtx = useTimersContext();

  return (
    <div>
      <Button
        onClick={
          timersCtx.isRunnig ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunnig ? "Stop" : "Start"} Timers
      </Button>
    </div>
  );
}

export default TimersControl;
