

// set in js



let myset = new Set();


myset.add(10);
myset.add(20);
myset.add(30);
myset.add(20);

// console.log(myset.size);


myset.forEach(function(element){
    // console.log(element)
})




let narr = Array.from(myset);
console.log(narr[0]);

