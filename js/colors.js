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

// FUNCTIONS

function changeColorTap (color, HTML, bg, event) {
    var color = document.querySelector(color)
    color.addEventListener(event, function () {
    color.innerHTML = HTML;
    color.style.background = bg;
    color.style.color = "white";
})
}

function changeColorTapWhite (color, HTML, bg, event) {
    var color = document.querySelector(color)
    color.addEventListener(event, function () {
    color.innerHTML = HTML;
    color.style.background = bg;
})
}

function changeColorUntap (color, HTML, event) {
    var color = document.querySelector(color)
    color.addEventListener(event, function () {
    color.innerHTML = HTML;
    color.style.background = "white";
    color.style.color = "black";
})
}

// WHITE

changeColorTapWhite(".white", "しろ<br>shi · ro", "white", "mouseenter")
changeColorTapWhite(".white", "しろ<br>shi · ro", "white", "touchstart")
changeColorUntap(".white", "WHITE", "mouseleave")
changeColorUntap(".white", "WHITE", "touchend")

// BLACK

changeColorTap(".black", "くろい<br>ku · ro · i", "black", "mouseenter")
changeColorTap(".black", "くろい<br>ku · ro · i", "black", "touchstart")
changeColorUntap(".black", "BLACK", "mouseleave")
changeColorUntap(".black", "BLACK", "touchend")

// GRAY
changeColorTap(".gray", "はいいろ<br>ha · ii · ro", "grey", "mouseenter")
changeColorTap(".gray", "はいいろ<br>ha · ii · ro", "grey", "touchstart")
changeColorUntap(".gray", "GRAY", "mouseleave")
changeColorUntap(".gray", "GRAY", "touchend")

// RED
changeColorTap(".red", "あか<br>a · ka", "#ff1205", "mouseenter")
changeColorTap(".red", "あか<br>a · ka", "#ff1205", "touchstart")
changeColorUntap(".red", "RED", "mouseleave")
changeColorUntap(".red", "RED", "touchend")

// BLUE
changeColorTap(".blue", "あおい<br>a · o · i", "#4260f5", "mouseenter")
changeColorTap(".blue", "あおい<br>a · o · i", "#4260f5", "touchstart")
changeColorUntap(".blue", "BLUE", "mouseleave")
changeColorUntap(".blue", "BLUE", "touchend")

// YELLOW 
changeColorTap(".yellow", "きいろ<br>ki · i · ro", "#ffe814", "mouseenter")
changeColorTap(".yellow", "きいろ<br>ki · i · ro", "#ffe814", "touchstart")
changeColorUntap(".yellow", "YELLOW", "mouseleave")
changeColorUntap(".yellow", "YELLOW", "touchend")

// PURPLE
changeColorTap(".purple", "むらさき<br>mu · ra · sa · ki", "#b825d9", "mouseenter")
changeColorTap(".purple", "むらさき<br>mu · ra · sa · ki", "#b825d9", "touchstart")
changeColorUntap(".purple", "PURPLE", "mouseleave")
changeColorUntap(".purple", "PURPLE", "touchend")

// ORANGE

changeColorTap(".orange", "だいだい<br>da · i · da · i", "#ff9412", "mouseenter")
changeColorTap(".orange", "だいだい<br>da · i · da · i", "#ff9412", "touchstart")
changeColorUntap(".orange", "ORANGE", "mouseleave")
changeColorUntap(".orange", "ORANGE", "touchend")

// GREEN
changeColorTap(".green", "みどり<br>mi · do · ri", "#4bd636", "mouseenter")
changeColorTap(".green", "みどり<br>mi · do · ri", "#4bd636", "touchstart")
changeColorUntap(".green", "GREEN", "mouseleave")
changeColorUntap(".green", "GREEN", "touchend")