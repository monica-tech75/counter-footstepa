let homeScore = 0
let guestScore = 0

let counterHome = document.getElementById("counter-home")
let counterGuest = document.getElementById("counter-guest")

function addPoints (team, points) {
    if (team === "home") {
        homeScore += points
        counterHome.textContent = homeScore
    } else if  (team === "guest") {
        guestScore += points
        counterGuest.textContent = guestScore
    }
}

