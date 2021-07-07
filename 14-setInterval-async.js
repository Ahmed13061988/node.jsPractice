console.log("I will run first"); //this will run first 

setInterval(()=> {  // this will run the last because it is async 
    console.log("Hello from the function")
}, 2000); 

console.log("finish"); //this will run second 