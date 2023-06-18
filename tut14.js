// creating element
let element = document.createElement("li");


// adding className & id  & Text to it
element.className = 'childClass';
element.id = "createdId"
element.innerHTML = "<h1>baba ek number</h1>"

// add CSS to element
element.style.color = "Green";

// append element inside ul class
let ul = document.querySelector("ul.ulClass");
console.log(ul.appendChild(element));


// replacing element
// replaceWith & replaceChild
substituteNode = document.createElement('li');
substituteNode.className = "liClass";
substituteNode.id = "liId";
substituteNode.innerHTML = "<b> Bhai replce wala</b>"
// element.replaceWith(substituteNode);


// // replace child inside specific parent
// parent = document.querySelector(".ulClass");
// parent.replaceChild(element,document.getElementById("id1"));


// // remove child
// parent.removeChild(document.getElementById("createdId"));


// // getAttribute && hasAttribute && setAttribute
// console.log(element.hasAttribute("class"));
// console.log(element.getAttribute("class"));
// console.log(element.setAttribute("class","babaClass"));