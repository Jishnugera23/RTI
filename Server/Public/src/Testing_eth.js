const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/SLNbmorKEwQc4o9DDTpPnSOSvDH1hl9z`
);
const walletAddress = "0xD79f397a8735296e1602fe7eC29643CF4313ba02";
const walletAbi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"Name","type":"string"},{"indexed":false,"internalType":"string","name":"Ministry","type":"string"},{"indexed":false,"internalType":"string","name":"Public_Authority","type":"string"},{"indexed":false,"internalType":"string","name":"Text","type":"string"}],"name":"file","type":"event"},{"inputs":[{"internalType":"string","name":"_Name","type":"string"},{"internalType":"string","name":"_Ministry","type":"string"},{"internalType":"string","name":"_Public_Authority","type":"string"},{"internalType":"string","name":"_Text","type":"string"}],"name":"setData","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractInteraction = async () => {
  const Contract = new ethers.Contract(
    walletAddress,
    walletAbi,
    provider
  );
  return Contract
}


const listen_data = async () =>{
    p= await contractInteraction(walletAddress,walletAbi,provider);
    console.log(p.listeners("file"));
    p.on("file",(Name,Text,Public_authority,Ministry)=>{
        console.log("listening to events");
        console.log(Ministry);
        console.log(Name);
        console.log(Text);
        console.log(Public_authority);
        
    });
    // console.log(p.address)
    // console.log(p);
}
listen_data();