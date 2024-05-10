//Christian B. Orias || BSIT 2.5
 
const NFTs = []

function mintNFT (_name, _eyeColor,_shirtType,_bling) {
    const NFT = {
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType":_shirtType,
        "bling":_bling
    }
    NFTs.push(NFT);
    console.log("Minted: "+ _name);
}

function listNFTs() {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1))
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Eyecolor: \t" + NFTs[i].eyeColor);
        console.log("Shirt Type: " + NFTs[i].shirtType);
        console.log("Bling : \t" + NFTs[i].bling);
    }
}

function getTotalSupply() {
    console.log("\nTotal Data: " + NFTs.length);
}

// call your functions and display
mintNFT("JJK", "Black", "T shirt", "Gold Chain");
mintNFT("Biancakes", "Black", "T shirt", "Gold Chain");
mintNFT("Randelito", "Black", "T shirt", "Gold Chain");
mintNFT("Jimboy", "Black", "Hoodie", "Gold Chain");
console.log("=============================")
listNFTs();
console.log("=============================")
getTotalSupply();
