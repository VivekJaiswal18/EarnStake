import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Landing from "../../components/Landing";
// import { Staking } from "./components/Staking"

export default function Home() {
  return (
    // <div>
    //   <Navbar/>
    //   <div className="min-h-screen w-full">
    //     <div>
          
    //     </div>
    //   </div>
      // <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto font-montserrat">
      // <div className="py-20 border">
        // {/* <Header />  
        //    <Navbar/> */}

      // Now  <div className="flex item-center border mt-24 justify-center mb-20">

      //   {/* <NextLink href="/transaction">
      //     </NextLink> */}
      //     <Link href={"/stake"}>
      //     <button className="mt-4 bg-zinc-100 text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-zinc-200 transition-colors">
      //      Get Started
      //    </button>
      //    </Link>
      //   </div>Now
      
        <div>
          <Landing/>
        </div>
       );
      } 

        {/* <ThirdwebResources /> */}
        {/* {account && (
        <div className="mt-12 text-center">
          You are logged in.{" "}
          <a href="/gated-content" className="underline">
          <div className="border-l-emerald-400 mt-3">
          <button className="border-2 border-green-300 px-4 py-2 rounded-lg">
            Go to the gated page
            </button>
            </div>
          </a>
        </div>
      )} */}
        // </div> 
    //   );
    // }
        {/* <Footer/> */}
    {/* </main> */}
   
