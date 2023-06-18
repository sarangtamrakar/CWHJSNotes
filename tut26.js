// promises
// resolve
// reject
// pending

// defining
// when we define the promise we give as direct argument of resolve & reject


// invoking
// when we invoke promise , 
// we will pass the resolve via then 
//  we will pass the reject via catch


function baba() {
    return new Promise(function (resolve, reject) {

        let error = true;
        if (error == true) {
            resolve();
        } else {
            reject();
        }


    })
}





// baba().then(function () {
//     console.log("resolved callled");
// }).catch(function () {
//     console.log("reject called");
// })










