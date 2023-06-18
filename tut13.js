// children & childNode

// let data = document.querySelector(".container");
// to get text , comment & tags 
// console.log(data.childNodes);

// to get only tags
// console.log(data.children);



// NodeName & NodeType
// console.log(data.children[2].nodeName);
// console.log(data.children[2].nodeType);




// NodeType
// 1. element
// 2. Attribute
// 3. text Node
// 4. Comment
// 5. document
// 6. docType



// children of children traversing
let element = document.querySelector(".container");
console.log(element.children[0].children[1].children[1].innerText)


// firstElementChild & lastElementChild
console.log(element.firstElementChild.lastElementChild.innerText);


// childElementCount , Both are same
console.log(element.children.length)
console.log(element.childElementCount)


// NextSibilingElement & previousElementSibiling
console.log(element.children);
console.log(element.children[0].nextElementSibling.previousElementSibling);



