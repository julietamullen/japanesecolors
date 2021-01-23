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

function flashcard (color, hiragana, bg, hiraganaFontColor, english) {
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
        color.style.color = "black";
    })
    color.addEventListener("touchend", function () {
        color.innerHTML = english;
        color.style.background = "white";
        color.style.color = "black";
    })
    }

// WHITE
flashcard (".white", "しろ<br>SHIRO", "white", "black", "WHITE")

// BLACK
flashcard (".black", "くろ<br>KURO", "black", "white", "BLACK")

// GRAY
flashcard (".gray", "はいいろ<br>HAIIRO", "gray", "white", "GRAY")

// RED
flashcard (".red", "あか<br>AKA", "#ff1205", "white", "RED")

// BLUE
flashcard (".blue", "あお<br>AO", "#4260f5", "white", "BLUE")

// YELLOW 
flashcard (".yellow", "きいろ<br>KIIRO", "#ffe814", "white", "YELLOW")

// PURPLE
flashcard (".purple", "むらさき<br>MURASAKI", "#b825d9", "white", "PURPLE")

// ORANGE
flashcard (".orange", "オレンジ<br>ORENJI", "#ff9412", "white", "ORANGE")

// GREEN
flashcard (".green", "みどり<br>MIDORI", "#4bd636", "white", "GREEN")
