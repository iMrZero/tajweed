import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect} from "react";
import {DarkModeSwitch} from "react-night-toggle";

function ThemeSwitcher() {
    const {isDark ,setIsDark} = useContext(ThemeContext)
    const toggleDark = (checked: boolean) => setIsDark(checked)
    useEffect(() => {
        const activeTheme = isDark ? "dark" : "light"
        const root = document.documentElement
        sessionStorage.setItem("theme", activeTheme)
        root.dataset.theme = activeTheme
        root.style.colorScheme = activeTheme
    },[isDark])
    return <div className="mode-swithcer">
        <DarkModeSwitch checked={isDark} onChange={toggleDark}  />
    </div>;
}

export default ThemeSwitcher;
