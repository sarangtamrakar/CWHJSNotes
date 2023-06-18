/* There are two kind of http method
    1. GET  ==> with request we dont sent data 
    2. POST == with request we sent data
*/






// // get request
// let fetchBtn = document.getElementById("fetchBtn");

// fetchBtn.addEventListener("click",fetchData);


// function fetchData() {
    
//      let xhr = new XMLHttpRequest();
     
    
//     // to get logs for each state 
//    xhr.onreadystatechange = function(){
//        console.log("ready state is"+String(xhr.readyState));
//    }

//     // definig Or intialize the request
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    

//     // defining that progress is going on
//     xhr.onprogress = function(){
//         console.log("progress is going on");
//     }

//     // define load, when response is ready
//     xhr.onload = function(){
//         console.log("Response is loded");
//         if(this.status==200){
//             console.log(this.responseText);
//         }else{
//             console.error("some error occured");
//         }
//     }



//     // now finally send the request
//     xhr.send();








//     console.log("you have clicked the button fetchBtn");
// }




let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click",postHandler)


function postHandler(){
    // initialize
    let xhr = new XMLHttpRequest()

    // defien logger to state change value
    xhr.onreadystatechange = function(){
        console.log("state changed"+String(xhr.readyState));
    }


    // define the request type & credential
    xhr.open("POST","https://dummyjson.com/products/2",true);

    // define the header
    xhr.getResponseHeader('Content-type', 'application/json',);

    xhr.onprogress = function(){
                console.log("progress is going on");
            }


    // what to do when response is ready
    xhr.onload = function(){
        data = this.responseText;

        // if(this.status==200){
        console.log(data);
        // }else{
            // console.error("some error occured")
        // }
    }


    params = {
        title: 'iPhone Gala'
      }

    xhr.send(JSON.stringify(params));





}