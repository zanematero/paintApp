//select paint area
let paintArea = document.querySelector(".painting")
let selectedColor = "blue" //default color

//create selector for each color
let blueBox = document.querySelector("#blue")
blueBox.addEventListener("click",function(e){
    selectedColor = "blue"
})
let yellowBox = document.querySelector("#yellow")
yellowBox.addEventListener("click",function(e){
    selectedColor = "yellow"
})
let greenBox = document.querySelector("#green")
greenBox.addEventListener("click",function(e){
    selectedColor = "green"
})
let redBox = document.querySelector("#red")
redBox.addEventListener("click",function(e){
    selectedColor = "red"
})

//fill pixel on user clicks
paintArea.addEventListener("click", function(e){
    e.target.style.backgroundColor = selectedColor
})