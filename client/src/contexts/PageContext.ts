import { createContext, useState } from "react";

export const PageContext = createContext({
  page: 'Home',
  setPage: (page: string) => {}
});