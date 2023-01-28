import Image from "next/image";
import { ReactNode } from "react";
import { Button, MenuDropdown, WalletOptionsModal } from "..";
import { useAccount } from "wagmi";
import Dropdown from '../Dropdown';
import Dash from "../Dash"
import  Bar  from "../Bar"
import { useContext, useEffect, useState } from "react";
import { Content } from "../Content"
import { Box } from "../Box";
interface Props {
  children: ReactNode;
 
}


export default function Layout(props: Props) {
  const { children} = props;

 
  return ( <>
   
      <div className="bg-neutral-900	">              
        {children}    

        <Box
          css={{
            maxW: "100%"
          }}
  >
          <Content/>
        </Box>

      </div>   
           
    </>
  
  );
}
