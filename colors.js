'use strict'

// COLORS

var white = document.querySelector(".white")
var black = document.querySelector(".black")
var gray = document.querySelector(".gray")

var red = document.querySelector(".red")
var blue = document.querySelector(".blue")
var yellow = document.querySelector(".yellow")

var purple = document.querySelector(".purple")
var orange = document.querySelector(".orange")
var green = document.querySelector(".green")

// WHITE
white.addEventListener("mouseenter", function () {
    white.innerHTML = "しろ<br>shi · ro"
})
white.addEventListener("mouseleave", function () {
    white.innerHTML = "WHITE"
})
white.addEventListener("touchstart", function () {
    white.innerHTML = "しろ<br>shi · ro"
})
white.addEventListener("touchend", function () {
    white.innerHTML = "WHITE"
})

// BLACK
black.addEventListener("mouseenter", function () {
    black.innerHTML = "くろい<br>ku · ro ·i";
    black.style.background = "black";
    black.style.color = "white";
})
black.addEventListener("mouseleave", function () {
    black.innerHTML = "BLACK"
    black.style.background = "white";
    black.style.color = "black";

})
black.addEventListener("touchstart", function () {
    black.innerHTML = "くろい<br>ku · ro ·i";
    black.style.background = "black";
    black.style.color = "white";
})
black.addEventListener("touchend", function () {
    black.innerHTML = "BLACK"
    black.style.background = "white";
    black.style.color = "black";

})

// GRAY

gray.addEventListener("mouseenter", function () {
    gray.innerHTML = "はいいろ<br>hai · iro";
    gray.style.background = "grey";
    gray.style.color = "white";
})
gray.addEventListener("mouseleave", function () {
    gray.innerHTML = "GRAY"
    gray.style.background = "white";
    gray.style.color = "black"
})
gray.addEventListener("touchstart", function () {
    gray.innerHTML = "はいいろ<br>hai · iro";
    gray.style.background = "grey";
    gray.style.color = "white";
})
gray.addEventListener("touchend", function () {
    gray.innerHTML = "GRAY"
    gray.style.background = "white";
    gray.style.color = "black"
})

// RED

red.addEventListener("mouseenter", function () {
    red.innerHTML = "あか<br>a · ka";
    red.style.background = "#ff1205";
    red.style.color = "white";
})
red.addEventListener("mouseleave", function () {
    red.innerHTML = "RED"
    red.style.background = "white";
    red.style.color = "black";

})
red.addEventListener("touchstart", function () {
    red.innerHTML = "あか<br>a · ka";
    red.style.background = "#ff1205";
    red.style.color = "white";
})
red.addEventListener("touchend", function () {
    red.innerHTML = "RED"
    red.style.background = "white";
    red.style.color = "black";

})

// BLUE

blue.addEventListener("mouseenter", function () {
    blue.innerHTML = "あおい<br>a · o · i";
    blue.style.background = "#4260f5";
    blue.style.color = "white";
})
blue.addEventListener("mouseleave", function () {
    blue.innerHTML = "BLUE";
    blue.style.background = "white";
    blue.style.color = "black";

})
blue.addEventListener("touchstart", function () {
    blue.innerHTML = "あおい<br>a · o · i";
    blue.style.background = "#4260f5";
    blue.style.color = "white";
})
blue.addEventListener("touchend", function () {
    blue.innerHTML = "BLUE"
    blue.style.background = "white";
    blue.style.color = "black";

})

// YELLOW 

yellow.addEventListener("mouseenter", function () {
    yellow.innerHTML = "きいろ<br>ki · i · ro";
    yellow.style.background = "#ffe814";
    yellow.style.color = "white";
})
yellow.addEventListener("mouseleave", function () {
    yellow.innerHTML = "YELLOW";
    yellow.style.background = "white";
    yellow.style.color = "black";

})
yellow.addEventListener("touchstart", function () {
    yellow.innerHTML = "きいろい<br>ki · i · ro";
    yellow.style.background = "#ffe814";
    yellow.style.color = "white";
})
yellow.addEventListener("touchend", function () {
    yellow.innerHTML = "YELLOW";
    yellow.style.background = "white";
    yellow.style.color = "black";

})

// PURPLE

purple.addEventListener("mouseenter", function () {
    purple.innerHTML = "むらさき<br>mu · ra · sa · ki";
    purple.style.background = "#b825d9";
    purple.style.color = "white";
})
purple.addEventListener("mouseleave", function () {
    purple.innerHTML = "PURPLE";
    purple.style.background = "white";
    purple.style.color = "black";

})
purple.addEventListener("touchstart", function () {
    purple.innerHTML = "むらさき<br>mu · ra · sa · ki";
    purple.style.background = "#b825d9";
    purple.style.color = "white";
})
purple.addEventListener("touchend", function () {
    purple.innerHTML = "PURPLE";
    purple.style.background = "white";
    purple.style.color = "black";

})

// ORANGE

orange.addEventListener("mouseenter", function () {
    orange.innerHTML = "だいだいいろ<br>da · i · da · ii · ro";
    orange.style.background = "#ff9412";
    orange.style.color = "white";
})
orange.addEventListener("mouseleave", function () {
    orange.innerHTML = "ORANGE";
    orange.style.background = "white";
    orange.style.color = "black";

})
orange.addEventListener("touchstart", function () {
    orange.innerHTML = "だいだいいろ<br>da · i · da · ii · ro";
    orange.style.background = "#ff9412";
    orange.style.color = "white";
})
orange.addEventListener("touchend", function () {
    orange.innerHTML = "ORANGE";
    orange.style.background = "white";
    orange.style.color = "black";

})

// GREEN
green.addEventListener("mouseenter", function () {
    green.innerHTML = "みどり<br>mi · do · ri";
    green.style.background = "#4bd636";
    green.style.color = "white";
})
green.addEventListener("mouseleave", function () {
    green.innerHTML = "GREEN";
    green.style.background = "white";
    green.style.color = "black";

})
green.addEventListener("touchstart", function () {
    green.innerHTML = "みどり<br>mi · do · ri";
    green.style.background = "#4bd636";
    green.style.color = "white";
})
green.addEventListener("touchend", function () {
    green.innerHTML = "GREEN";
    green.style.background = "white";
    green.style.color = "black";

})