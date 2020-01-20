import React, { createContext, useContext, useReducer } from "react"

const globalState = {
  panelOption: {show:1, opacity:0}
}

const GlobalStateContext = createContext(globalState)

const reducer = (state, action) => {
  switch (action) {
    case "FADE-IN":
      return state.panelOption.opacity = 1;
    case "FADE-OUT":
      return state.panelOption.opacity = 0;
    case "FADE-HIDDEN":
      return state.panelOption.show = 1;
    case "FADE-SHOW":
      return state.panelOption.show = 0;
    default:
      return state
  }
}

export const GlobalStateProvider = ({ children }) => (
  <GlobalStateContext.Provider value={useReducer(reducer, globalState)}>
    {children}
  </GlobalStateContext.Provider>
)

export const useGlobalState = () => {
    return useContext(GlobalStateContext)
}