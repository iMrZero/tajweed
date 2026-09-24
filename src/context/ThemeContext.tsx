import { createContext ,type Dispatch , type SetStateAction} from "react";
type ThemeContextValue = {
    isDark: boolean
    setIsDark: Dispatch<SetStateAction<boolean>>
}
export const ThemeContext = createContext<ThemeContextValue>( {
    isDark: false,
    setIsDark: () => {}
})