var pic = document.getElementById("vimage");

var beep = document.getElementById("beep");

var oldX = null;
var oldY = null;

var create_dot = function(e){
    console.log("running . . .");
    if (oldX != null){
    e.preventDefault();
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", oldX);
    line.setAttribute("y1", oldY);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "black")

    pic.appendChild(line);
    }
    
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("fill", "red");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", 10)
    pic.appendChild(c1);
    
    oldX = e.offsetX;
    oldY = e.offsetY;
}

pic.addEventListener("click", create_dot);