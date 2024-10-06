 let scores = JSON.parse(localStorage.getItem('scores'))|| {
            wins:0,
            loose:0,
            ties:0
        };
       
       

     finalScores();
       

        function playGame(playerMove) {

            let result = '';
            const ComputerValue = move();

            if (playerMove === 'Scissor') {
                if (ComputerValue === 'Rock')
                    result = 'You Loose';
                if (ComputerValue === 'Paper')
                    result = 'You Won';
                if (ComputerValue === 'Scissor')
                    result = 'Game Tie';
            }
            else if (playerMove === 'Paper') {


                if (ComputerValue === 'Rock') {
                    result = 'You Won';
                }
                if (ComputerValue === 'Paper') {
                    result = 'Game Tie';
                }
                if (ComputerValue === 'Scissor') {
                    result = 'You Loose';
                }
            }
            else if (playerMove === 'Rock') {

                if (ComputerValue === 'Rock') {
                    result = 'Game Tie';
                }

                if (ComputerValue === 'Paper') {
                    result = 'You Loose';
                }

                if (ComputerValue === 'Scissor') {
                    result = 'You Won';
                }

            }
            if (result === 'You Won') {
                scores.wins += 1;
            }
            else if (result === 'You Loose') {
                scores.loose += 1;
            }
            else if (result === 'Game Tie') {
                scores.ties += 1;
            }

             let jsonString= JSON.stringify(scores);
               localStorage.setItem('scores',jsonString);

           
           //  localStorage.setItem('scores', JSON.stringify(scores));
           document.querySelector('.js-result').innerHTML=result;

           document.querySelector('.js-moves').innerHTML=`  <p  class="paragraph"> You</p> <img src="images/${playerMove}.png" class="result-move-img"> <p  class="paragraph">Computer</p> <img src="images/${ComputerValue}.png" class="result-move-img">`;
           finalScores();


        }


function finalScores(){
    document.querySelector('.js-scores').innerHTML=`Wins : ${scores.wins}, Loose : ${scores.loose}, Tie : ${scores.ties}`;
}

        function move() {
            const RandomMove = Math.random();
            let ComputerValue = '';
            if (RandomMove >= 0 && RandomMove < 1 / 3) {
                ComputerValue = 'Rock';
            }
            else if (RandomMove >= 1 / 3 && RandomMove < 2 / 3) {
                ComputerValue = 'Paper';
            }
            else if (RandomMove >= 2 / 3 && RandomMove <= 1) {
                ComputerValue = 'Scissor';
            }
            return ComputerValue;

        }

        // new file for auto game

        // let scores = JSON.parse(localStorage.getItem('scores'))|| {
        //     wins:0,
        //     loose:0,
        //     ties:0
        // };
        
        let isAutoplay=false;
        let intervalId;
        
        finalScores();
        
        
        function autoplay(){
        if(!isAutoplay){
        intervalId=setInterval(()=>{
            const playerMove=move();
            playGame(playerMove);
        },1000);
        isAutoplay=true;
        }
        else{
        clearInterval(intervalId);
        isAutoplay=false;
        }
        
        }
        
        
        function playGame(playerMove) {
        
            let result = '';
            const ComputerValue = move();
        
            if (playerMove === 'Scissor') {
                if (ComputerValue === 'Rock')
                    result = 'You Loose';
                if (ComputerValue === 'Paper')
                    result = 'You Won';
                if (ComputerValue === 'Scissor')
                    result = 'Game Tie';
            }
            else if (playerMove === 'Paper') {
        
        
                if (ComputerValue === 'Rock') {
                    result = 'You Won';
                }
                if (ComputerValue === 'Paper') {
                    result = 'Game Tie';
                }
                if (ComputerValue === 'Scissor') {
                    result = 'You Loose';
                }
            }
            else if (playerMove === 'Rock') {
        
                if (ComputerValue === 'Rock') {
                    result = 'Game Tie';
                }
        
                if (ComputerValue === 'Paper') {
                    result = 'You Loose';
                }
        
                if (ComputerValue === 'Scissor') {
                    result = 'You Won';
                }
        
            }
            if (result === 'You Won') {
                scores.wins += 1;
            }
            else if (result === 'You Loose') {
                scores.loose += 1;
            }
            else if (result === 'Game Tie') {
                scores.ties += 1;
            }
        
             let jsonString= JSON.stringify(scores);
               localStorage.setItem('scores',jsonString);
        
           
           //  localStorage.setItem('scores', JSON.stringify(scores));
           document.querySelector('.js-result').innerHTML=result;
        
           document.querySelector('.js-moves').innerHTML=`  <p  class="paragraph"> You</p> <img src="images/${playerMove}.png" class="result-move-img"> <p  class="paragraph">Computer</p> <img src="images/${ComputerValue}.png" class="result-move-img">`;
           finalScores();
        
        
        }
        
        
        function finalScores(){
        document.querySelector('.js-scores').innerHTML=`Wins : ${scores.wins}, Loose : ${scores.loose}, Tie : ${scores.ties}`;
        }
        
        function move() {
            const RandomMove = Math.random();
            let ComputerValue = '';
            if (RandomMove >= 0 && RandomMove < 1 / 3) {
                ComputerValue = 'Rock';
            }
            else if (RandomMove >= 1 / 3 && RandomMove < 2 / 3) {
                ComputerValue = 'Paper';
            }
            else if (RandomMove >= 2 / 3 && RandomMove <= 1) {
                ComputerValue = 'Scissor';
            }
            return ComputerValue;
        
        }