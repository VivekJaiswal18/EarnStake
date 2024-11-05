import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

// const nftContractAddress = "0xe41e721E0aD200E3cfAC77Bd3D4b6B95C5E8C9f1"; neo
// const rewardTokenContractAddress = "0x8946F2bD5136eB73a6BdD3315F141207A366DBb6"; neo
// const stakingContractAddress = "0xEBdf3548D8496eC0b30F725615623fab997abCB7"; neo
const nftContractAddress = "0xF7063B222491Cf8dC560F0e9533eC57C56284A64";
const rewardTokenContractAddress = "0xdAAF4B0038E31c298184fAeA1d489CbA5722c5D2";
const stakingContractAddress = "0x435Cc0B499b7bC86DA693C28BD65F42a6F7f560A";
export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});