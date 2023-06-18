let button = document.getElementById("btn");


function callfn(event){
    console.log("button clicked");
    event.preventDefault();
}



button.addEventListener("mousemove",callfn);


// to avoid the default behaviour
// event.preventDefault();



// click
// dblclick
// mousedown => any btn of mouse
// mouseenter  && mouseleave
// mousemove