

// get the links
let links = document.links;

// write callback fucntion for ForEach Loop
function callfn(element){
    PatternChecker("www",element);
}


// PatternChecker
function PatternChecker(pattern,element){
    if(element.href.includes(pattern)){
        console.log(element);
    }
}

// then invoking function
Array.from(links).forEach(callfn);

