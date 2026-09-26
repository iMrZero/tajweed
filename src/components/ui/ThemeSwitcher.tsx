import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect} from "react";
import {DarkModeSwitch} from "react-night-toggle";

function ThemeSwitcher() {
    const {isDark ,setIsDark} = useContext(ThemeContext)
    const toggleDark = (checked: boolean) => setIsDark(checked)
    useEffect(() => {
        const html = document.querySelector("html")
        const acitveTheme = isDark ? "dark" : "light" 
        sessionStorage.setItem("theme",acitveTheme)
        html?.style.setProperty("color-scheme", acitveTheme)
    },[isDark])
    return <div className="mode-swithcer">
        <DarkModeSwitch checked={isDark} onChange={toggleDark}  />
    </div>;
}

export default ThemeSwitcher;
