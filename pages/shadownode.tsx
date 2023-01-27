import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import Dash from "../components/Dash"

const ShadowNode: NextPage = () => {
 

  

    return (
      <>
       <Head>
          <title>shadW Command Center</title>
          <meta name="description" content="Shadow Node" />
          <link rel="icon" href="/favicon.ico" />
        </Head>                

      </>
    );
};

export default ShadowNode;
