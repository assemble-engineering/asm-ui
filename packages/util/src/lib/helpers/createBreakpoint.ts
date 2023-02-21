// From https://github.com/streamich/react-use/blob/master/src/factory/createBreakpoint.ts

import { useEffect, useMemo, useState } from 'react';

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
  }
}

export const isBrowser = typeof window !== 'undefined';

export const createBreakpoint =
  (breakpoints: { [name: string]: number } = { laptopL: 1440, laptop: 1024, tablet: 768 }) =>
    () => {
      const [screen, setScreen] = useState(isBrowser ? window.innerWidth : 0);

      useEffect(() => {
        const setSideScreen = (): void => {
          setScreen(window.innerWidth);
        };
        setSideScreen();
        on(window, 'resize', setSideScreen);
        return () => {
          off(window, 'resize', setSideScreen);
        };
      });
      const sortedBreakpoints = useMemo(
        () => Object.entries(breakpoints).sort((a, b) => (a[1] >= b[1] ? 1 : -1)),
        [breakpoints]
      );
      const result = sortedBreakpoints.reduce((acc, [name, width]) => {
        if (screen >= width) {
          return name;
        } else {
          return acc;
        }
      }, sortedBreakpoints[0][0]);
      return result;
    };
