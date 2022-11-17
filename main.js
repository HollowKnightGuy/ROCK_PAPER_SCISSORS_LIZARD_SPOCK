window.onload = () =>{
    const USER = window.prompt("Dime tu nombre de usuario", "User");
    document.getElementById("usertext").innerHTML = USER;
} 

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const LIZARD = "lizard";
const SPOCK = "spock";
const MACHINE_OPTIONS = [ROCK, PAPER, SCISSORS, LIZARD, SPOCK];

const DRAW = 0;
const WIN = 1;
const LOST = 2; 

const groupButtons = document.getElementById("group-btn")
const BUTTONS = groupButtons.getElementsByTagName("button");

const newGameBtn = document.getElementById("new-game")
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const lizardBtn = document.getElementById("lizard");
const spockBtn = document.getElementById("spock");
const resultText = document.getElementById("start-text");
const machineImg = document.getElementById("machine-img");
const userImg = document.getElementById("user-img");
const machinePoints = document.getElementById("machine-points");
const userPoints = document.getElementById("user-points");
let userpoints = 0;
let machinepoints = 0;


rockBtn.addEventListener("click", ()=>{
    play(ROCK);
});

paperBtn.addEventListener("click", () => {
    play(PAPER);
    
});

scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});

lizardBtn.addEventListener("click", () => {
    play(LIZARD);
    
});

spockBtn.addEventListener("click", () => {
    play(SPOCK);
    
});

newGameBtn.addEventListener("click", () => {
    reiniciarPartida();
    
});


function play(userOption){
    const machineOption = MACHINE_OPTIONS[(Math.floor(Math.random() * MACHINE_OPTIONS.length))];
    userImg.src = "./img/" + userOption + ".png";
    machineImg.src = "./img/" + machineOption + ".png";
    const result = cresult(userOption, machineOption);
    
    switch (result){
        case DRAW:
            resultText.innerHTML = "The AI chose " + machineOption + ", it's a tie"; 
            break;
        case WIN:
            if (userpoints == 4){
                userpoints++
                userPoints.innerHTML = userpoints;
                resultText.innerHTML = "You won the game!";
                terminarPartida();
                break;
            } 
            else{
                userpoints++;
                userPoints.innerHTML = userpoints;
                resultText.innerHTML = "The AI chose " + machineOption + ", you win"; 
                console.log(typeof(BUTTONS));
                break;
            }
        case LOST:
            if (machinepoints == 4){
                machinepoints++
                machinePoints.innerHTML = machinepoints;
                resultText.innerHTML = "You lost";
                terminarPartida();
                break;
            } 
            else{
                machinepoints++;
                machinePoints.innerHTML = machinepoints;
                resultText.innerHTML = "The AI chose " + machineOption + ", you loose"; 
                break;
            }
        }
    }
    
    function cresult(userOption, machineOption){
        if (userOption === machineOption){
            return DRAW;
            
        } else if(userOption === ROCK ){
            if(machineOption === PAPER)  return LOST;  
            else if(machineOption === SPOCK) return LOST;   
            else return WIN;
            
        } else if(userOption === SCISSORS){
            if(machineOption === ROCK) return LOST;
            else if(machineOption === LIZARD) return LOST;
            else return WIN;
            
        } else if(userOption === PAPER){
            if(machineOption === SCISSORS) return LOST;
            else if(machineOption === LIZARD) return LOST;
            else return WIN;
            
        } else if(userOption === LIZARD){
            if(machineOption === SCISSORS) return LOST;
            else if(machineOption === ROCK) return LOST;
            else return WIN;
            
        } else if(userOption === SPOCK){
            if(machineOption === LIZARD) return LOST;
            else if(machineOption === PAPER) return LOST;
            else return WIN;
        }
    }
    
    function reiniciarPartida(){
        userPoints.innerHTML = 0;
        machinePoints.innerHTML = 0;
        userpoints = 0;
        machinepoints = 0
        for (i = 0; i < BUTTONS.length; i++) {
            BUTTONS[i].disabled = false;
        } 
    }
    
    function terminarPartida(){
        for (i = 0; i < BUTTONS.length; i++) {
            BUTTONS[i].disabled = true;
        } 
    }
    