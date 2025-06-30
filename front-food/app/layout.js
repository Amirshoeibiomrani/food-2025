import Footer from "./components/Footer";
import Header from "./components/Header";
import NextNprogressProviders from "./components/libraries/NextNprogress";
import Toastify from "./components/libraries/Toastify"

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NextNprogressProviders>

        <Header />
        {children}
        <Footer/>
        <Toastify/>
        </NextNprogressProviders>
      </body>
    </html>
  );
}
