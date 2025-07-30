let homeScore = 0;
let guestScore = 0;
let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");

function incrementHome(point){
    homeScore += point;
    home.innerText = homeScore;
    checkLeading();
}

function incrementGuest(point){  
    guestScore += point;
    guest.innerText = guestScore;
    checkLeading();
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    home.innerText = homeScore;
    guest.innerText = guestScore;
    checkLeading();
}

function checkLeading(){
    if (homeScore > guestScore){
        home.style.color = "#FCD34D";
        guest.style.color = "#F94F6D";
    } else if (guestScore > homeScore){
        home.style.color = "#F94F6D";
        guest.style.color = "#FCD34D";
    } else {
        home.style.color = "#F94F6D";
        guest.style.color = "#F94F6D";
    }
}