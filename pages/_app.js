import {ThemeProvider} from "@mui/material";
import theme from "@/components/themeConfig";
import "@/styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
      </ThemeProvider>
  );
}
