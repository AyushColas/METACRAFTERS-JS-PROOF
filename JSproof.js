/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (TName,TColor,TShellsize,TShellColor,TAge) {
    const turtleNFT = {
        "name": null,
        "color": null,
        "shellSize": null,
        "shellColor": null,
        "age": null
    };
    turtleNFT.name= TName;
    turtleNFT.color= TColor;
    turtleNFT.shellSize= TShellsize;
    turtleNFT.shellColor= TShellColor;
    turtleNFT.age= TAge;

    nftCollection.push(turtleNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
for(i=0;i<nftCollection.length;i++)
    {
        console.log(nftCollection[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nNumber of NFTs in supply:"+" "+nftCollection.length);
}

//call you functions below this line

//minting nfts
mintNFT("turt","green","big","dark-green","90");
mintNFT("david","yellow","small","red","50");
mintNFT("kevin","blue","small","green","120");
mintNFT("pinko","white","medium","black","2");

listNFTs();
getTotalSupply();