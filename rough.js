


function createOrder() { 
    let error = false;
    orderID = 12;
    return new Promise((resolve, reject) => { 
        
        if (error) {
            reject();
        } else { 
            setInterval(function () {
                resolve();
                return orderID;
            },3000)
        }
    })
}



createOrder().then(() => { 
    
})