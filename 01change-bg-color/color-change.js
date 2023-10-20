//getting the instance of elements
var btn = document.getElementById("btn");
var cont = document.getElementById("container");

//color array
var colors = ['red', 'green', 'blue', 'orange', 'black', 'yellow', 'pink', 'brown', 'grey', 'purple'];

//Default background color
cont.style.backgroundColor = 'cyan'

//button eventlistener function
btn.addEventListener('click', function () {

    //generating random colors
    var colorIndex = colors[Math.floor(Math.random() * colors.length)]

    //changing of colors
    cont.style.backgroundColor = colorIndex;
})