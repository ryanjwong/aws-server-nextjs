import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import Dash from "../components/Dash"

const ShadowNode: NextPage = () => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [{ data: accountData, loading: accountLoading }] = useAccount();
  const [{ data: balanceData, loading: balanceLoading }] = useBalance({
    addressOrName: accountData?.address,
    watch: true,
  });

  const loading = (accountLoading || balanceLoading) && !balanceData;

  const renderContent = () => {
    if (loading) return <Loader size={8} />;
    if (balanceData) {
      return (
        <>                
        <div className="col-lg">     
        
        <h1 className="mb-8 text-4xl font-bold" z-index="2">Manage </h1><iframe src="/route" 
        width="100%" 
        z-index="-1"
        scrolling="no"
                height="100%" 
     
        id="inner">
<Dash children={""} loading={false}></Dash> 
        </iframe>
        <div className="container-fluid pt-5 mt-5 pb-5">
        <div className="col-sm">     
        <div className="deposit status">
         </div>
        </div>
        </div>

      </div>
      <div className="col-lg"> 

      </div>
        </>
      );
    }

    return (
      <>
        <h1 className="mb-8 text-4xl font-bold">
           Shadow Node Command Center
        </h1>
      

      </>
    );
  };

  return (
    <>
      <WalletOptionsModal
        open={showWalletOptions}
        setOpen={setShowWalletOptions}
      />

      <Layout
        showWalletOptions={showWalletOptions}
        setShowWalletOptions={setShowWalletOptions}
      >                 


        <div className="grid h-screen place-items-center">
          <div className="grid place-items-center">{renderContent()}</div>
        </div>
      </Layout>  
    </>
  );
};

export default ShadowNode;
