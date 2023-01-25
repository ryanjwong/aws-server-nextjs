import React, { useState } from 'react';
import Image from 'next/image'

export const Logo = () => (
    <div>
        <Image 
        alt="logo"

        src="/logo.png"
        width={100}
        height={100}
        
        /> 
     </div>
);
  