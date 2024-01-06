let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("Hurray! You Win! Your");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`Hurray ! you Win Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("OOPS! You Lost :>");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`OOPS! You Lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const gameDraw=()=>{
    console.log("Game Draw");
    msg.innerText="Game Draw ..Try Again!";
    msg.style.backgroundColor="#081b13";
}

const generateCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const randCompChoice=Math.floor(Math.random()*3);
    return option[randCompChoice];
}

const playGame=(userChoice)=>{
 console.log("User Choice is= ",userChoice);
 //Generate computer Choice
 const compChoice=generateCompChoice();
 console.log("Computer Choice is = ",compChoice);

 if(userChoice===compChoice)
 {
    gameDraw();
 }
 else{
    let  userWin=true;
    if(userChoice==="rock"){
        //scissor,paper
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock,scissor
        userWin=compChoice==="scissor"?false:true;
    }
    else{
        //rock, paper
        userWin=compChoice!=="rock"?false:true;
    }
 showWinner(userWin,userChoice,compChoice);
}
}


choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
  const userChoice=choice.getAttribute("id");
  playGame(userChoice);
});
});