function simulatteAsync() {
    return new Promise(resolve => {
        console.log("created a new promise";
        
        setTimeout(() => {
            resolve("Succeded!");
        }, 3000);
    });
}