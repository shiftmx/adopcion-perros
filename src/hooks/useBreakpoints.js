import useMediaQuery from "./useMediaQuery";

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 *
 * Inspired by: https://github.com/contra/react-responsive/issues/162#issuecomment-592082035
 */
export default function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery("(min-width: 320px) and (max-width: 450px"),
    isSm: useMediaQuery("(min-width: 451px) and (max-width: 768px)"),
    isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
    isLg: useMediaQuery("(min-width: 1024px)"),
    active: "xs"
  };
  if (breakpoints.isXs) breakpoints.active = "320px";
  if (breakpoints.isSm) breakpoints.active = "sm";
  if (breakpoints.isMd) breakpoints.active = "md";
  if (breakpoints.isLg) breakpoints.active = "1024px";
  return breakpoints;
}
