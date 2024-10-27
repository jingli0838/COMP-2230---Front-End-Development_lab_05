function simulatteAsync() {
    return new Promise(resolve => {
        console.log("created a new promise");
        
        setTimeout(() => {
            resolve("Succeded!");
        }, 3000);
    });
}

async function demoAsyncCall() {
    console.log("Call async operation");

    const newPromise = simulatteAsync();

    // first tested witout 'await', there was no "Succeded!" printed on the console
    // second added the await statement, then console log the result. there is "Succeded!" on the console 
    const result = await newPromise;
    console.log(result);
}

demoAsyncCall();
console.log("Final")


// make request to the API
const allCatFacts = "https://catfact.ninja/facts";

async function fetchCatBreeds(resourcePath,factCount){
    try {
        const response = await fetch(`${resourcePath}?limit=${factCount}`);
        // https://stackoverflow.com/questions/52842039/how-to-limit-the-amount-of-data-returned-from-a-json-file-using-fetch
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`)
        }
        return response.json();
    } catch(error) {
        console.error(`Failed to fetch: ${error.message}`)
    }
}
fetchCatBreeds(allCatFacts).then((data) => {
    console.log(data)
});


// create a function to get the value of dropdown
const factCountNode = document.getElementById("factCount");
function getFactCountValue(){
    return factCountNode.value;
}

// Display Cat Facts
const factContainerNode = document.getElementById("factsContainer");

async function displayCatFacts(){
    // Clear previous facts
    factContainerNode.innerHTML = '';  

    const  factCountValue = getFactCountValue();
    const catFacts = await fetchCatBreeds(allCatFacts, factCountValue)

    let{data} = catFacts;

    try{
        data.forEach(catFact => {
            const newElement = document.createElement('p');
            newElement.textContent = catFact["fact"];
            factContainerNode.appendChild(newElement); 
        });
        // add the error hanlding method
    }catch (error){
        console.error("Error:", error);
        const errorMessage = "Fetching error, please try again.";
        factContainerNode.innerHTML = errorMessage;
    }
}


// Destructuring Samurai Pizza Cats

const samuraiPizzaCats = {
    leader: "Speedy Cerviche",
    members: 3,
    base: {
        location: "Little Tokyo",
        name: "Pizza Cat Restaurant",
    },
    catchphrase: "It's cheese time!",
};

let {leader, base:{location: baseLocation}} = samuraiPizzaCats;

console.log(leader, baseLocation)
 