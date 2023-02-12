import "../styles/globals.css";
import { Children, useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider, ThemeProvider } from 'next-themes';
import { Provider, chain, defaultChains } from "wagmi";
import { Layout } from "../components";
import { Content } from "../components/Content"
import Bar from '../components/Bar'
import Head from "next/head";
import Home from "./home"
import Litepaper from "./litepaper";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function MyApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[loading])
  
  return (
    <>
    <Head>
    <title>shadW</title>
    <meta name="description" content="Shadow Node" />
    <link rel="icon" href="/public/favicon.ico" />
    </Head>

    {!loading &&
      <Layout >
        <Bar/> 
        <BrowserRouter>

        <Routes>
         
            <Route path ="/" element={<Home />} />
            <Route path ="/home" element={<Home />} />
            <Route path="/litepaper" element={<Litepaper />} />
        </Routes>
        </BrowserRouter>
  
      </Layout>
    }
   </>
  );
}
