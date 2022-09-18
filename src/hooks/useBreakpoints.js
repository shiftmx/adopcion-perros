import useMediaQuery from "./useMediaQuery";

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 *
 * Inspired by: https://github.com/contra/react-responsive/issues/162#issuecomment-592082035
 */
export default function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery("(min-width: 320px) and (max-width: 1023px"),
    isLg: useMediaQuery("(min-width: 1024px)"),

  };
  if (breakpoints.isXs) breakpoints.active = "320px";
  if (breakpoints.isLg) breakpoints.active = "1024px";
  return breakpoints;
}
