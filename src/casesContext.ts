import { createContext, useContext } from "react";

const casesContext = createContext([] as string[])

export const { Provider } = casesContext

export const useCases = () =>
    useContext(casesContext);
