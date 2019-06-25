//Global variables//

var score = 0;

var targetNumber = 0;

var wins = 0;

var losses = 0;



//Function to generate a random number between the specified arguments, inclusive//

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function that initializes the score, target number, and values of the crystals//

function startRound(){

    score = 0;

    $("#current-score").text(score)

    targetNumber = getRandomNumber(19,120);
    
    $("#target-number").text(targetNumber);

    $(".crystal-1").val(getRandomNumber(1,12))

    $(".crystal-2").val(getRandomNumber(1,12))

    $(".crystal-3").val(getRandomNumber(1,12))

    $(".crystal-4").val(getRandomNumber(1,12))

    $("#wins-text").text(wins);

    $("#losses-text").text(losses);
}

startRound();

$(".crystals").on("click", function() {

    score += parseInt($(this).val())

    $("#current-score").text(score)

    console.log($(this).val())
    if (score === targetNumber) {

        wins++;

        startRound();
    }
    
    else if (score >= targetNumber){

        losses++;

        startRound();
    }


});

