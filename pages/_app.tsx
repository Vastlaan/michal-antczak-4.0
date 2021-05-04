import GlobalStyles from "../globals/globalStyles";
import ThemeProvider from "../globals/themeProvider";
import StateProvider from '../globals/stateProvider'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <StateProvider>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </StateProvider>
            </ThemeProvider>
        </>
    );
}