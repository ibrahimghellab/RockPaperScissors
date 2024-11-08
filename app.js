
let compteurWin=0;
let compteurLoose=0;

function init(){
    document.getElementById("nbWin").textContent="Win : "+0;
    document.getElementById("nbLoose").textContent="Loose : "+0;
    document.getElementById("waiting1").src="giphy.gif";
    document.getElementById("waiting2").src="giphy.gif";
}


function randomChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  
}
const play=(input)=>{
    let aichoice=randomChoice();
    console.log(document.getElementById(input).textContent);
    console.log(document.getElementById(aichoice).textContent);
    document.getElementById("us").textContent=document.getElementById(input).textContent;
    document.getElementById("AI").textContent=document.getElementById(aichoice).textContent;

    if(input=="rock" && aichoice == "scissors" || input == "scissors" && aichoice == "paper" || input == "paper" && aichoice == "rock"){
        compteurWin++;
    }else if(input=="rock" && aichoice == "paper" || input == "scissors" && aichoice == "rock" || input == "paper" && aichoice == "scissors"){
        compteurLoose++;
    }else{
        console.log("equal");
    }

    document.getElementById("nbWin").textContent="Win : "+compteurWin;
    document.getElementById("nbLoose").textContent="Loose : "+compteurLoose;

}

init();

document.getElementById("rock").addEventListener("click",()=>play("rock")); 
document.getElementById("paper").addEventListener("click",()=>play("paper")); 
document.getElementById("scissors").addEventListener("click",()=>play("scissors")); 