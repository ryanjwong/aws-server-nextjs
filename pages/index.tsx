import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import { Progress, Grid } from "@nextui-org/react";
import Dash from "../components/Dash"
import Map from '../components/Map'
const Home: NextPage = () => {
 

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
      <Layout
        
      >
        <div className="grid h-screen place-items-center">
          <div className="grid place-items-center">{renderContent()}</div>
        </div>
      </Layout>
    </>
  );
};

export default Home;