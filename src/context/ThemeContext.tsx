import { createContext } from 'react'

interface ContextProps {
  modeLight: boolean
  //metodo: ()=> void
  lightMode: ()=> void
  darkMode: ()=> void
}

export const ThemeContext = createContext({} as ContextProps)
