import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xe41e721E0aD200E3cfAC77Bd3D4b6B95C5E8C9f1";
// 0xda2FA8c5Db515293F252Ffa367a6c593F2b97867
const rewardTokenContractAddress = "0x8946F2bD5136eB73a6BdD3315F141207A366DBb6";
// 0xbC144A53BdC615e58cE5ce07FC78A60Cc26025d4
const stakingContractAddress = "0xEBdf3548D8496eC0b30F725615623fab997abCB7";
// 0x12a883f4778DC14Fdfee934EdccD04ABDcEFC992
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