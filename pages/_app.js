import { useState } from "react";
import { LoadingProvaider } from "../context/loadingContext";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {

  const [isLoading, setisLoading] = useState(false);
  const [data, setdata] = useState('');

  const passdata = {
    isLoading,
    data,
    setisLoading,
    setdata
  }

  return (
    <LoadingProvaider value={passdata}>
      <Component {...pageProps} />
    </LoadingProvaider>
  )
}
