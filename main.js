/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

// Stap 2: addEventListener
// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...

//1
let backgroundChange = document.querySelector('a:nth-of-type(1)')
backgroundChange.addEventListener('click', backgroundColorChange)
function backgroundColorChange() {
  backgroundChange.classList.toggle('background-change')
}

//2
let backgroundChangeTwee = document.querySelector('a:nth-of-type(2)')
backgroundChangeTwee.addEventListener('click', backgroundColorChangeTwee)
function backgroundColorChangeTwee() {
  backgroundChangeTwee.classList.toggle('background-change-2')
}


//3
let draaien = document.querySelector('a:nth-of-type(3)')
draaien.addEventListener('click', rondjesDraaien)
function rondjesDraaien(){
  draaien.classList.toggle('rotate')
}

//4
let trillen = document.querySelector('a:nth-of-type(4)')
trillen.addEventListener('mouseover', opEnNeerTrillen)
trillen.addEventListener('mouseout', stopTrillen);
function opEnNeerTrillen() {
  trillen.classList.toggle('shaking')
}
function stopTrillen() {
  trillen.classList.remove('shaking');
}

//5
let horizontaalTrillen = document.querySelector('a:nth-of-type(5)')
horizontaalTrillen.addEventListener('mouseover', horizontaalTrillenFunctie)
horizontaalTrillen.addEventListener('mouseout', stopHorizontaalTrillen);
function horizontaalTrillenFunctie() {
  horizontaalTrillen.classList.toggle('horizontal-shaking')
}
function stopHorizontaalTrillen() {
  horizontaalTrillen.classList.remove('horizontal-shaking');
}

//6
let keyButton = document.querySelector('a:nth-of-type(6)')
document.addEventListener('keydown', toetsIngedrukt)
function toetsIngedrukt(event){
  if(event.code == 'Enter'){
    keyButton.classList.toggle('color-change')
  }
}

//7
let spaceRotate = document.querySelector('a:nth-of-type(7)')
document.addEventListener('keydown', spaceIndrukken)
function spaceIndrukken(event){
  if(event.code == 'Space'){
    spaceRotate.classList.toggle('space-rotate')
  }
}

//8
let scale = document.querySelector('a:nth-of-type(8)')
scale.addEventListener('click', schalen)
function schalen(){
  scale.classList.toggle('scale')
}

//9
let scaleSmaller = document.querySelector('a:nth-of-type(9)')
scaleSmaller.addEventListener('click', kleinerSchalen)
function kleinerSchalen(){
  scaleSmaller.classList.toggle('scale-smaller')
}