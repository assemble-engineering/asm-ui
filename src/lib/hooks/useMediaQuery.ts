import { createBreakpoint } from "../util/helpers/createBreakpoint"

const queries = {
  xSmall: 320,
  small: 480,
  medium: 769,
  large: 1024,
  xLarge: 1280,
  xxLarge: 1440,
}

export const useMediaQuery = (c = queries) => createBreakpoint(c)()
