//console.log("Hello!")
let userScore = 0,
computerScore = 0
const userScore_span = document.getElementById("user-score"),
computerScore_span = document.getElementById("computer-score"),
scoreBoard_div = document.querySelector("score-board"),
result_p = document.querySelector(".result > p"),
message_p = document.querySelector("#change"),
rock_div = document.getElementById("r"),
paper_div = document.getElementById("p"),
scissor_div = document.getElementById("s"),
resetGame_div = document.querySelector(".resetGame")

const getComputerChoice = () => {
    const choices = ['r', 'p', 's']
    const randomNumber =Math.floor(Math.random() * 3)
    //console.log("++"+randomNumber)
    return choices[randomNumber]
}

let convertToWord = (letter) => {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissor"
}

const win = (userChoice, computerChoice) =>{
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const userScore_div = document.getElementById(userChoice),
    badge_div = document.querySelector('#user-label'),    
    smallUserWord = "user".fontsize(3).sup(),
    smallCompWord = "comp".fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win! 🔥`
    userScore_div.classList.add('green-glow')
    badge_div.classList.add("green-badge")

    setTimeout(() => userScore_div.classList.remove('green-glow'), 500)
    setTimeout(() => badge_div.classList.remove("green-badge"), 500)
    winUser(userScore)
}

const lose = (userChoice, computerChoice) =>{
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const userScore_div = document.getElementById(userChoice),
    badge_div = document.querySelector('#computer-label'),
    smallUserWord = "user".fontsize(3).sub(),
    smallCompWord = "comp".fontsize(3).sup();

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost..! 💩`
    userScore_div.classList.add('red-glow')    
    badge_div.classList.add('red-badge')

    setTimeout(() => userScore_div.classList.remove('red-glow'), 500)
    setTimeout(() => badge_div.classList.remove("red-badge"), 500)
    winComp(computerScore);
}

const draw = (userChoice, computerChoice) =>{
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const userScore_div = document.getElementById(userChoice),
    boardDraw = document.querySelector("#score-board"),
    smallUserWord = "user".fontsize(3).sub(),
    smallCompWord = "comp".fontsize(3).sub();

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} to ${convertToWord(computerChoice)}${smallCompWord}. It's Draw..! 🍎`
    boardDraw.classList.add('drawChoice')
    userScore_div.classList.add('gray-glow')

    setTimeout(() => userScore_div.classList.remove('gray-glow'), 500)
    setTimeout(()=> boardDraw.classList.remove('drawChoice'), 500)
}

function winUser(dataUser) {
    if (dataUser === 10) {
        const hideImage = document.querySelector('.choices')
        hideImage.style.display = (hideImage.style.display == 'none') ? 'block' : 'none';
        result_p.innerHTML = `User WIN Game! ${dataUser}🔥`
        message_p.classList.add('green-p')
        resetGame_div.style.display = (resetGame_div.style.display === 'block') ? 'none' : 'block';
        return message_p
    }     
}
function winComp(dataComp) {
    if (dataComp === 10) {
        const hideImage = document.querySelector('.choices')
        hideImage.style.display = (hideImage.style.display == 'none') ? 'block' : 'none';
        result_p.innerHTML = `Computer WIN Game! ${dataComp}🔥`
        message_p.classList.add('red-p')
        resetGame_div.style.display = (resetGame_div.style.display == 'block') ? 'none' : 'block';
        return message_p
    }
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr": 
        case "sp":
            win(userChoice, computerChoice)           
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "SS":
            draw(userChoice, computerChoice)
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"))
    
    paper_div.addEventListener('click', ()=> game("p"))
    
    scissor_div.addEventListener('click', ()=> game("s"))    
}
main()