import { useState, useEffect } from "react";

import { CountdownContainer } from "./styles/CountdownStyles";

const calculateTimeLeft = () => {
  const difference = +new Date("2020-05-30T17:30:00+0200") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timeout = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timeout);
  });

  const CountdownComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    CountdownComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <CountdownContainer>
      <h2>{CountdownComponents.length ? CountdownComponents : ""}</h2>
    </CountdownContainer>
  );
};

export default Countdown;
