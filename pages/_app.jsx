import { Provider } from "jotai";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Provider>
      <main className={poppins.className}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
          <ToastContainer />
        </ThemeProvider>
      </main>
    </Provider>
  );
}
