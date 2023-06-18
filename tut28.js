
// Fetch api tutorial
// fetch(url) always returns promise
// & its response also return Promise
// thats why we use two promise

// fetch api work as async



myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", getData);


url = "https://jsonplaceholder.typicode.com/comments?postId=2"
function getData(){
    console.log("started get Data& button clicked")
    fetch(url).then(resFn1).then(resFn2);
    console.log("data fetched");
}



// function postData() {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     }).then(resFn1).then(resFn2);

// }










function resFn1(response) {
    console.log("Inside first then");

    // for json data
    return response.json();

    // for text data
    // return response.text();
}

function resFn2(json) {
    console.log("Inside second then");
    populate(json);
}


function populate(data) {
    let students = document.getElementById("students");
    console.log(data);


    let html = "";

    Array.from(data).forEach(d => {
        html += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${d.email}</h5>
        <p class="card-text"> ${d.body} </p>
        </div>
        </div>
        `
        console.log(d.title);
    });

    students.innerHTML = html;
    console.log("populated");
    console.log(html);
}

console.log("last line")




