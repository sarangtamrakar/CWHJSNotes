
document.querySelector("h2").addEventListener("mouseover",
    function clickFn(event) {
        console.log("you have clicked the heading");

        // location.href = "https://www.facebook.com/";

        // it gives the clicked element
        console.log(event.target.classList);
        console.log(event.offsetX);
        console.log(event.offsetY);
        console.log(event.clientX);
        console.log(event.clientY);
        
    }
)



