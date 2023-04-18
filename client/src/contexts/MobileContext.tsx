import { createContext } from "react";

const MobileContext = createContext({
  isMobile: false,
  setIsMobile: (isMobile: boolean) => {},
});

export default MobileContext;