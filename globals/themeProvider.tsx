import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles";

export default function ThemeProviderComponent({ children }) {
    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}