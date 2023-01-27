import React, { useState } from 'react';
import Image from 'next/image'

export const Logo = () => (
    <div>
        <Image 
        alt="logo"

        src="/logo.svg"
        width={80}
        height={300}
        
        /> 
     </div>
);
  