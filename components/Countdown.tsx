import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CountdownContainer } from './styles/CountdownStyles';
import { useInterval } from '../hooks/useInterval';

interface TimeLeftObject {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeftObject => {
  const difference = +new Date('2021-07-17T17:30:00+0200') - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

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

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { t } = useTranslation();

  useInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  const CountdownComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    CountdownComponents.push(
      <span key={interval}>{` ${timeLeft[interval]} ${t(interval)} `}</span>
    );
  });

  return (
    <CountdownContainer>
      <h2>{CountdownComponents.length ? CountdownComponents : ''}</h2>
    </CountdownContainer>
  );
};

export default Countdown;
