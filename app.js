let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg_para = document.querySelector("#msg");
const user_para = document.querySelector("#user-score");
const comp_para = document.querySelector("#comp-score");

    const gencompchoice = () =>{
        const options = ["rock", "paper", "scissor"];
        const randidx = Math.floor(Math.random()*3);
        return options[randidx];
    }
    const drawgame = () =>{
          msg_para.innerText = "Game is Draw Play again";
             msg_para.style.backgroundColor = "gray";
    }
    const showWinner = (userWin, userchoice, compchoice) => {
        if(userWin){
            userScore++;
            user_para.innerText = userScore;
           msg_para.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
           msg_para.style.backgroundColor = "green";
        } else{
             comScore++;
              msg_para.innerText = `You lose! your ${compchoice} beats ${userchoice}`;;
                msg_para.style.backgroundColor = "red";
                comp_para.innerText = comScore;
        }
    }

 const playgame = (userchoice) =>{
       //generate
       const compchoice = gencompchoice();
       if (userchoice === compchoice){
        //draw game
        drawgame();
       } else{
            let userWin = true;
            if (userchoice === "rock"){
                //scissor, paper
                userWin = compchoice === "paper"? false : true;
            } else if(userchoice ==="paper"){
                //scissor, rock
                 userWin = compchoice === "scissor"? false : true;
            } else{
                //rock, paper
                 userWin = compchoice === "rock"? false : true;
            }
            showWinner(userWin, userchoice, compchoice);
       }
 }
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
     playgame(userchoice);
    });
});