import { Loader } from "..";
interface Props {
  children: string | JSX.Element;
  width?: number;
  loading: boolean;
  [x: string]: any;
}

export default function Card(props: Props) {
  const { children, width, loading, ...rest } = props;
  
  return (
   <>

     <div className="bg-white box-shadow border-radius-10 height-100-p widget-style1">
   
         <div className="widget-data">
           

         </div>
         <div className="weight-500"><strong>Subscribed Peers</strong></div>
         <form action="http://localhost:3001/api/swarm?key=test" method="post">
    <button name="foo" value="upvote">Find Peer</button>
</form>
       </div>
   </>
  );
}
