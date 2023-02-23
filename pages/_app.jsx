import { Provider } from "jotai";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
}
