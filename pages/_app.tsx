import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { AppProps } from "next/app";
import Head from "next/app";
import Script from "next/script";
import Router, { useRouter } from "next/router";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Script
        id={"g-analytics-1"}
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id={"g-analytics-2"} strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
