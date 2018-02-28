var pic = document.getElementById("vimage");

var beep = document.getElementById("beep");

var create_dot = function(e){
    console.log("running . . .");
    e.preventDefault();
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("fill", "red");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", 10)
    pic.appendChild(c1);
}

pic.addEventListener("click", create_dot);