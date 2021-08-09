// import { Fragment } from 'react'
import 'tailwindcss/tailwind.css'
// import Header from '../components/Header';
// import Footer from '../components/Footer'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";


function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100,


  });
  Router.events.on("routeChangeStart", progress.start);
  Router.events.on('routeChangeComplete', progress.finish);
  Router.events.on('routeChangeError', progress.finish);
  

  return (


    <Component {...pageProps} />




  )

}

export default MyApp
