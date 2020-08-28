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

function flashcard (color, hiragana, bg, hiraganaFontColor, english, englishFontColor) {
    var color = document.querySelector(color)
    color.addEventListener("mouseenter", function () {
        color.innerHTML = hiragana;
        color.style.background = bg;
        color.style.color = hiraganaFontColor;
    })
    color.addEventListener("touchstart", function () {
        color.innerHTML = hiragana;
        color.style.background = bg;
        color.style.color = hiraganaFontColor;
    })
    color.addEventListener("mouseleave", function () {
        color.innerHTML = english;
        color.style.background = "white";
        color.style.color = englishFontColor;
    })
    color.addEventListener("touchend", function () {
        color.innerHTML = english;
        color.style.background = "white";
        color.style.color = englishFontColor;
    })
    }

// WHITE
flashcard (".white", "しろ<br>shi · ro", "white", "black", "WHITE", "black")

// BLACK
flashcard (".black", "くろい<br>ku · ro · i", "black", "white", "BLACK", "black")

// GRAY
flashcard (".gray", "はいいろ<br>ha · ii · ro", "gray", "white", "GRAY", "black")

// RED
flashcard (".red", "あか<br>a · ka", "#ff1205", "white", "RED", "black")

// BLUE
flashcard (".blue", "あおい<br>a · o · i", "#4260f5", "white", "BLUE", "black")

// YELLOW 
flashcard (".yellow", "きいろ<br>ki · i · ro", "#ffe814", "white", "YELLOW", "black")

// PURPLE
flashcard (".purple", "むらさき<br>mu · ra · sa · ki", "#b825d9", "white", "PURPLE", "black")

// ORANGE
flashcard (".orange", "だいだい<br>da · i · da · i", "#ff9412", "white", "ORANGE", "black")

// GREEN
flashcard (".green", "みどり<br>mi · do · ri", "#4bd636", "white", "GREEN", "black")