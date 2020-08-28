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

// COLOR CHANGER

function changeColor (color, HTML, bg, event, fontColor) {
    var color = document.querySelector(color)
    color.addEventListener(event, function () {
    color.innerHTML = HTML;
    color.style.background = bg;
    color.style.color = fontColor;
})
}

// WHITE

changeColor(".white", "しろ<br>shi · ro", "white", "mouseenter", "black")
changeColor(".white", "しろ<br>shi · ro", "white", "touchstart", "black")
changeColor(".white", "WHITE", "white", "mouseleave", "black")
changeColor(".white", "WHITE", "white", "touchend", "black")

// BLACK

changeColor(".black", "くろい<br>ku · ro · i", "black", "mouseenter", "white")
changeColor(".black", "くろい<br>ku · ro · i", "black", "touchstart", "white")
changeColor(".black", "BLACK", "white", "mouseleave", "black")
changeColor(".black", "BLACK", "white", "touchend", "black")

// GRAY
changeColor(".gray", "はいいろ<br>ha · ii · ro", "grey", "mouseenter", "white")
changeColor(".gray", "はいいろ<br>ha · ii · ro", "grey", "touchstart", "white")
changeColor(".gray", "GRAY", "white", "mouseleave", "black")
changeColor(".gray", "GRAY", "white", "touchend", "black")

// RED
changeColor(".red", "あか<br>a · ka", "#ff1205", "mouseenter", "white")
changeColor(".red", "あか<br>a · ka", "#ff1205", "touchstart", "white")
changeColor(".red", "RED", "white", "mouseleave", "black")
changeColor(".red", "RED", "white", "touchend", "black")

// BLUE
changeColor(".blue", "あおい<br>a · o · i", "#4260f5", "mouseenter", "white")
changeColor(".blue", "あおい<br>a · o · i", "#4260f5", "touchstart", "white")
changeColor(".blue", "BLUE", "white", "mouseleave", "black")
changeColor(".blue", "BLUE", "white", "touchend", "black")

// YELLOW 
changeColor(".yellow", "きいろ<br>ki · i · ro", "#ffe814", "mouseenter", "white")
changeColor(".yellow", "きいろ<br>ki · i · ro", "#ffe814", "touchstart", "white")
changeColor(".yellow", "YELLOW", "white", "mouseleave", "black")
changeColor(".yellow", "YELLOW", "white", "touchend", "black")

// PURPLE
changeColor(".purple", "むらさき<br>mu · ra · sa · ki", "#b825d9", "mouseenter", "white")
changeColor(".purple", "むらさき<br>mu · ra · sa · ki", "#b825d9", "touchstart", "white")
changeColor(".purple", "PURPLE", "white", "mouseleave", "black")
changeColor(".purple", "PURPLE", "white", "touchend", "black")

// ORANGE

changeColor(".orange", "だいだい<br>da · i · da · i", "#ff9412", "mouseenter", "white")
changeColor(".orange", "だいだい<br>da · i · da · i", "#ff9412", "touchstart", "white")
changeColor(".orange", "ORANGE", "white", "mouseleave", "black")
changeColor(".orange", "ORANGE", "white", "touchend", "black")

// GREEN
changeColor(".green", "みどり<br>mi · do · ri", "#4bd636", "mouseenter", "white")
changeColor(".green", "みどり<br>mi · do · ri", "#4bd636", "touchstart", "white")
changeColor(".green", "GREEN", "white", "mouseleave", "black")
changeColor(".green", "GREEN", "white", "touchend", "black")