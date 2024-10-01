
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0;
let guestScore = 0;

function homeIncrement1(){
    
    homeScore+=1
    homeScoreEl.textContent = homeScore;
}


function homeIncrement2(){
    homeScore+=2
     homeScoreEl.textContent = homeScore;
}


function homeIncrement3(){
    homeScore+=3
    homeScoreEl.textContent = homeScore;
}

function guestIncrement1(){
    guestScore+=1
    guestScoreEl.textContent = guestScore;
}

function guestIncrement2(){
    guestScore+=2
    guestScoreEl.textContent = guestScore;
}
function guestIncrement3(){
    guestScore+=3
    guestScoreEl.textContent = guestScore;
}

function clearScore(){
    console.log("clicked")
    homeScoreEl.textContent =0;
    guestScoreEl.textContent= 0;
    guestScore = 0;
    homeScore = 0;
    console.log("testing")
}



