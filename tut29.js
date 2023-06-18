// async function return promises



console.log("start js file");

url = "https://api.github.com/users";

async function sarang(){
    console.log("Inside the sarang function");
    console.log("before response");
    let response = await fetch(url);
    console.log("after response");
    let data = await response.json();
    console.log("data colleted");
    return data;
}

let prom = sarang();
prom.then(function(data){
    console.log(data);
});


console.log("last line of js file");


setTimeout(function(){
    console.log("set interval")
},500);




