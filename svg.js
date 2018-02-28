var pic = document.getElementById("vimage");

var beep = document.getElementById("beep");

var create_dot = function(e){
    console.log("running . . .");
    e.preventDefault();
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    c1.setAttribute("cx", 200);
    c1.setAttribute("cx", 300);
    c1.setAttribute("r", 10)
    pic.appendChild(c1);
}

beep.addEventListener("click", create_dot);