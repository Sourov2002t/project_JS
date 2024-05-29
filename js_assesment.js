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
let numNFTs =[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name,age,address,college,Grad_year) {
    let NFT ={
        "name":name,
        "age":age,
        "address":address,
        "college":college,
        "Grad_year":Grad_year
    }
    numNFTs.push(NFT);
    console.log("_________________ Name : " +name );
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i=0;i < numNFTs.length;i++){
    console.log("\n\n_________________ Start of Student Details ________________\n" );
    console.log("ID :       " + (i+1));
    console.log("Name:      " + numNFTs[i].name);
    console.log("Age:       " + numNFTs[i].age);
    console.log("Address:   " + numNFTs[i].address);
    console.log("College:   " + numNFTs[i].college);
    console.log("Grad_year: " + numNFTs[i].Grad_year);
    console.log(" ");
    console.log("_________________ End of Student Details ________________\n" );
    console.log("_________________________ NEXT __________________________\n\n" );
  }  
console.log(" ************************* Finish ************************* \n\n");

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Details : " +numNFTs.length);

}

// call your functions below this line
mintNFT("Sourov",22,"Rajshahi,Bangladesh","Chandigarh University","2026");
mintNFT("Apurbo",20,"Natore,Rajshahi,Bangladesh","Chandigarh University","2026");
mintNFT("Bob Smith",24,	"456 Oak Avenue","College of Demo",2022);
mintNFT("Charlie Brown",23,"789 Pine Road","Example Tech Institute","2023");
mintNFT("David Wilson",21,"Dhaka,Bangladesh","Delhi University","2026");
mintNFT("Alice",18,"Sylhet,Bangladesh","Dhaka University","2024");

listNFTs();

getTotalSupply();
