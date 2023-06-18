let a = document.all;
// console.log(a);


function printt(element){
    console.log(element);
}

// // create arr then iterate
// Array.from(a).forEach(printt);


// getting links from html
// Array.from(document.links).forEach(printt);

// use document.images & document.scripts & print the list of images & scripts

// console.log(Array.from(document.scripts).forEach(printt));
console.log(Array.from(document.images).forEach(printt));