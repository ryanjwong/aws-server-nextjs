import { Children, useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../../components";
import { Progress, Grid, Loading } from "@nextui-org/react";

import { link } from "fs";
import { Content } from "../../components/Content";


const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[loading])
  

  return (
    <Content/> 
  );
};

export default Home;