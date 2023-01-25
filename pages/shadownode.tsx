import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import Dash from "../components/Dash"

const ShadowNode: NextPage = () => {
 

  

    return (
      <>
        <h1 className="mb-8 text-4xl font-bold">
           Shadow Node Command Center
        </h1>
        

      </>
    );
};

export default ShadowNode;
