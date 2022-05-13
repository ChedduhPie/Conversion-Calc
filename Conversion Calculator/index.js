let count1 = document.getElementById("count-1")
let count1a = document.getElementById("count-1a")
let count2 = document.getElementById("count-2")
let count2a = document.getElementById("count-2a")
let count3 = document.getElementById("count-3")
let count3a = document.getElementById("count-3a")

let input = 0

function returnText () {
    let input = document.getElementById("userInput").value
    count1 = input * 0.3048
    count1 = input + " feet = " + count1 + " meters."
    count1a = input * 3.2808399
    count1a = input + " meters = " + count1a + " feet."
    count2 = input * 3.78541178
    count2 = input + " liters = " + count2 + " gallons."
    count2a = input * 0.26417205
    count2a = input + " gallons = " + count2a + " liters."
    count3 = input * 0.45359237 
    count3 = input + " kilograms = " + count3 + " pounds."
    count3a = input + 2.20462262
    count3a = input + " pounds = " + count3a + " kilograms."
    document.getElementById("count-1").textContent = count1
    document.getElementById("count-1a").textContent = count1a
    document.getElementById("count-2").textContent = count2
    document.getElementById("count-2a").textContent = count2a
    document.getElementById("count-3").textContent = count3
    document.getElementById("count-3a").textContent = count3a

    
}
 



