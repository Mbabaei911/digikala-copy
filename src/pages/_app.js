import { Fragment } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
     
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}
     
    </Fragment>
  );
};

export default MyApp;
