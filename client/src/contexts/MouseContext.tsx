import { createContext } from "react";

const MouseContext = createContext({
  mouse: { x: 0, y: 0 },
  setMouse: (mouse: { x: number; y: number }) => {},
});

export default MouseContext;