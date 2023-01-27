import { Children, useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import { Progress, Grid } from "@nextui-org/react";
import Dash from "../components/Dash"
import Map from '../components/Map'
import Bar from '../components/Bar'
import Head from "next/head";
import { link } from "fs";


const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[loading])
  

  const renderContent = () => {
    
    return (
      <>
        <h1 className="mb-8 text-4xl font-bold">
           Shadow Node Command Center
        </h1>
        <Map></Map>
      </>
    );
  };

  return (
    
    <>
    <Head>
      <title>shadW Command Center</title>
      <meta name="description" content="Shadow Node" />
      <link rel="icon" href="/favicon.ico" />
    </Head>    
     {!loading &&

        <Layout>
          
          <Bar/>     

          
        </Layout>
     }
    </>
  );
};

export default Home;