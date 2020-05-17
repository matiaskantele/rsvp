import { useEffect, useRef, MutableRefObject } from 'react';

export const useInterval = (callback: Function, delay: number): void => {
  const savedCallback: MutableRefObject<Function> = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = (): void => {
      savedCallback.current();
    };

    const id: number = setInterval(tick, delay);
    return (): void => clearInterval(id);
  }, [delay]);
};
