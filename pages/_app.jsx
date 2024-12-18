import { Provider } from "jotai";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
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
