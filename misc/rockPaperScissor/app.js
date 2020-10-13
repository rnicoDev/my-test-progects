let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('comp_score');
const scoreBoard_div = document.querySelector('.score_board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');



        function getComputerChoice() {
            const choices = ['r', 'p', 's'];
            const randomNumber = (Math.floor(Math.random() * 3));
            return choices[randomNumber];
        };

        function convert(letter) {
            if (letter === "r") return "Rock";
            if(letter === "p") return "Paper";
            return "Scissors";
        }

        function wins(userChoice, computerChoice) {
            userScore++;
            userScore_span.innerHTML = userScore;
            const smallUserWord = 'user'.fontsize(3).sub();
            const smallCompWord = 'comp'.fontsize(3).sub();
            computerScore_span.innerHTML = computerScore;
            result_div.innerHTML = `${convert(userChoice)} ${smallUserWord} beats ${convert(computerChoice)} ${smallCompWord} You Win Woo Hoo. !`;
            document.getElementById(userChoice).classList.add('green_glow');
            setTimeout(function () {document.getElementById(userChoice).classList.remove('green_glow')}, 400);
        }

        function lose(userChoice, computerChoice) {
            computerScore++;
            userScore_span.innerHTML = userScore;
            const smallUserWord = 'user'.fontsize(3).sub();
            const smallCompWord = 'comp'.fontsize(3).sub();
            computerScore_span.innerHTML = computerScore;
            result_div.innerHTML = `${convert(userChoice)} ${smallUserWord} loses to ${convert(computerChoice)} ${smallCompWord} You Lost Sucker. !`;
            document.getElementById(userChoice).classList.add('red_glow');
            setTimeout(function() { document.getElementById(userChoice).classList.remove('red_glow')}, 400);
        }

        function draw(userChoice, computerChoice) {
             const smallUserWord = 'user'.fontsize(3).sub();
             const smallCompWord = 'comp'.fontsize(3).sub();
             result_div.innerHTML = `${convert(userChoice)} ${smallUserWord} ties with ${convert(computerChoice)} ${smallCompWord} It a draw. !`;
             document.getElementById(userChoice).classList.add('yellow_glow');
             setTimeout(function () {document.getElementById(userChoice).classList.remove('yellow_glow')}, 400);
        }




        function game(userChoice) {
            const computerChoice = getComputerChoice();

            switch(userChoice + computerChoice) {
                case "rs":
                case "sp":
                case "pr":
                    wins(userChoice, computerChoice);
                    //console.log("User Wins. Fantastic!");
                    break;
                case "rp":
                case "ps":
                case "sr":
                    lose(userChoice, computerChoice);
                    //console.log("Computer Wins. You Suck!")
                    break;
                case "rr":
                case "pp":
                case "ss":
                    draw(userChoice, computerChoice);
                //console.log("Its a draw. Thats Boring!")
                break;
            }
        }



        function main() {
            rock_div.addEventListener('click', function () {
                game('r');
            });
            paper_div.addEventListener('click', function () {
                game('p');
            });
            scissor_div.addEventListener('click', function () {
                game('s');
            });
        }

        main();
