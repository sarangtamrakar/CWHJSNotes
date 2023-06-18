
// to get all the tags
// console.log(document.all);




// element selector in js
// 1. getElementById
// 2. getElementsByClassName
// 3. getElemenetByTagName
// 3. querySelector





// let element1 = document.getElementById("id1");
// console.log(element1);



// className selector
// let element2 = document.getElementsByClassName("red");
// console.log(element2);



// querySelector

// get first element only
let element3 = document.querySelector("p");
let element4 = document.querySelector(".className");
let element5 = document.querySelector("#tagID");



// select all p tag & change their color
let element6 = document.querySelectorAll("p");
function callfn1(element){
    element.style.color = 'yellow';
}

element4.forEach(callfn1);








// more property

// console.log(element1.classList);
// console.log(element1.childNodes);
// console.log(element1.parentElement);
// // change the css from here
// element1.style.color = 'red';

// // change te innerText
// element1.innerText = "baba tum kese ho";

// // change the innerHTML
// element1.innerHTML = "<a href='//www.facebook.com' target='_blank'> facebook</a>";

