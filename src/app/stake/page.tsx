import { ConnectEmbed } from "@/app/thirdweb";
import { client } from ".././client";
import { chain } from ".././chain";
import { Staking } from "../../../components/Staking";
import Navbar from "../../../components/Navbar"
// import { Staking } from '../components/Staking'
// import Navbar from "../components/Navbar";

export default function Stake() {
  return (
    <div className="cantora-one-regular">
    {/* <Navbar/> */}
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      width: "500px",
    }}>
      <h1 className="font-sans-serif">  </h1>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <div className="mt-28">
      <Staking />
    </div>
    </div>
    </div>
  );
}
