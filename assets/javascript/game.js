$( document ).ready(function() {
    // Random number selected for user to guess (between 19-120)
    var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    $('#value').text(targetNumber);

    // Variables to set random values to crystals (between 1-12)
    var purple = Math.floor(Math.random()*((12-1)+1)+ 1);
    var blue = Math.floor(Math.random()*((12-1)+1)+ 1);
    var red = Math.floor(Math.random()*((12-1)+1)+ 1);
    var yellow = Math.floor(Math.random()*((12-1)+1)+ 1);

    // Variables for wins, losses, users score
    var win = 0;
    var loss = 0;
    var totalScore = 0;

    $('#win').text(win);
    $('#loss').text(loss);

    // Reset the game
    function reset(){
        targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        console.log(targetNumber)
        $('#value').text(targetNumber);
        var purple = Math.floor(Math.random()*((12-1)+1)+ 1);
        var blue = Math.floor(Math.random()*((12-1)+1)+ 1);
        var red = Math.floor(Math.random()*((12-1)+1)+ 1);
        var yellow = Math.floor(Math.random()*((12-1)+1)+ 1);
        totalScore= 0;
        $('#yourScore').text(totalScore);
    }

    // Wins
    function good(){
        alert("You won!");
        win++;
        $('#win').text(win);
        reset();
    }

    // Losses
    function bad(){
        alert ("You lose!");
        loss++;
        $('#loss').text(loss);
        reset()
    }

    // Clicks for crystals
    $('#purple').on ('click', function(){
        totalScore = totalScore + purple;
        console.log("New totalScore= " + totalScore);
        $('#yourScore').text(totalScore);
        if (totalScore == targetNumber){
            good();
        }
        else if ( totalScore > targetNumber){
            bad();
        }
    })
    $('#blue').on ('click', function(){
        totalScore = totalScore + purple;
        console.log("New totalScore= " + totalScore);
        $('#yourScore').text(totalScore);
        if (totalScore == targetNumber){
            good();
        }
        else if ( totalScore > targetNumber){
            bad();
        }
    })
    $('#red').on ('click', function(){
        totalScore = totalScore + purple;
        console.log("New totalScore= " + totalScore);
        $('#yourScore').text(totalScore);
        if (totalScore == targetNumber){
            good();
        }
        else if ( totalScore > targetNumber){
            bad();
        }
    })
    $('#yellow').on ('click', function(){
        totalScore = totalScore + purple;
        console.log("New totalScore= " + totalScore);
        $('#yourScore').text(totalScore);
        if (totalScore == targetNumber){
            good();
        }
        else if ( totalScore > targetNumber){
            bad();
        }
    })
};