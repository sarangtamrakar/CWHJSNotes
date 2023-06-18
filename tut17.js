
// LocalStorage & SessionStorage



// local storage
// setItem 
// getItem
// clear
// removeItem

l_storage  = localStorage.setItem("name1","nayan");
l_storage  = localStorage.setItem("name2","roli");
l_storage  = localStorage.setItem("name3","gudiya");

console.log(localStorage);

console.log(localStorage.getItem("name2"));

localStorage.removeItem("name2");

localStorage.clear();




// Json.Stringify() && Json.Parse()
let arr = ["sarang","adarsh","manu"];
json_arr = JSON.stringify(arr)
localStorage.setItem("arr",json_arr);


arr_res = localStorage.getItem("arr")
arr_res = JSON.parse(arr_res);
console.log(arr_res);


console.log(localStorage);


