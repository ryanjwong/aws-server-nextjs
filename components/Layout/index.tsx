import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import { Button, MenuDropdown, WalletOptionsModal } from "..";
import { useAccount } from "wagmi";
import Dropdown from '../Dropdown';
import Dash from "../Dash"
import  Bar  from "../Bar"

interface Props {
  children: ReactNode;
 
}

export default function Layout(props: Props) {
  const { children} = props;

  return ( <>
    <div>              
       
      <Bar></Bar>     

<Head>

        <title>shadW Command Cneter</title>
        <meta name="description" content="Shadow Node" />
        <link rel="icon" href="/favicon.ico" />
     </Head>                

     
      {children}
    </div>           
    </>

  );
}
