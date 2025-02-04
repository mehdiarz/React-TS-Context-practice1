import { useState, useEffect, useRef } from "react";

import { useTimersContext } from "../store/timers-context";

import Container from "./Container";

type TimerProps = {
  name: string;
  duration: number;
};
function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);

  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  const { isRunnig } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunnig) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => {
          return prevTime - 30;
        });
      }, 30);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunnig]);

  const formatterRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <Container ComponentType="div">
      <p>{name}</p>
      <p>{formatterRemainingTime}</p>
    </Container>
  );
}

export default Timer;
