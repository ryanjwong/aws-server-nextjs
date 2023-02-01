import { Children, useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import { Progress, Grid, Loading } from "@nextui-org/react";
import Map from '../components/Map'
import Bar from '../components/Bar'
import Head from "next/head";
import { link } from "fs";


const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[loading])
  

  return (
    
    <>
    <Head>
      <title>shadW Command Center</title>
      <meta name="description" content="Shadow Node" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {loading &&
      <Loading />
    }
    {!loading &&
      <Layout >
        <Bar/>      
      </Layout>
    }
    </>
  );
};

export default Home;