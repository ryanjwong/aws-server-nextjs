import type { NextPage } from "next";
import {Document} from "react-pdf"

const Litepaper: NextPage = () => {
  

  return (
    
    <>
      <iframe
      src="/paper.pdf"
      title="Litepaper"
      width="800"
      height="600"
    />
    </>
  );
};

export default Litepaper;