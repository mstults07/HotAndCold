
$(document).ready(function(){

    
    var secretNumber = 0;
    var userGuess = 0;
    var guessCount = 0;
    var finish = false;

/*--- This is the random number generator --*/
    function secretNumberGenerator() {
        secretNumber = (Math.floor(Math.random()*100));
        console.log("Secret number = " + secretNumber);
    }

    secretNumberGenerator();

/*--- Evaluates when substraction is positive --*/
    function positiveAmount() {
        if (userGuess / secretNumber === 1){
            setFeedback("You win");
            finish = true;
          } else if ((secretNumber - userGuess) > 60.5){
            setFeedback("Wow! You are freezing!");
            } else if ((secretNumber - userGuess) > 55.5){
            setFeedback("Wow! You better put on a jacket cause its super cold!");
            } else if ((secretNumber - userGuess) > 50.5){
            setFeedback("Its is super cold man!");
            } else if ((secretNumber - userGuess) > 40.5) {
            setFeedback("Now you are cold!");
            } else if ((secretNumber - userGuess) > 30.5) {
            setFeedback("It's getting warm around here");
            } else if((secretNumber - userGuess) > 20.5) {
            setFeedback("It's getting very warm in here!");
            } else if((secretNumber - userGuess) > 15.5) {
            setFeedback("It's getting very very warm in here!");
            } else if ((secretNumber - userGuess) > 7.5){
            setFeedback("It's hot!");
            } else if ((secretNumber - userGuess) > 5.5){
            setFeedback("It is very hot here!");
           } else if ((secretNumber - userGuess) > 1.5){
            setFeedback("I am burning here!!");
            } else if ((secretNumber - userGuess) > 0.5){
            setFeedback("Its is hotter than the sun!!!!!");
        } else {
        }
    }

/*--- Evaluates when substraction is negative --*/
    function negativeAmount() {
        if (userGuess / secretNumber === 1){
            setFeedback("You win");
            finish = true;
        } else if ((userGuess - secretNumber) > 60.5){
            setFeedback("Wow! You are freezing!");
        } else if ((userGuess - secretNumber) > 55.5){
            setFeedback("Wow! You better put on a jacket cause its super cold!");
        } else if ((userGuess - secretNumber) > 50.5){
            setFeedback("Its is super cold man!");
        } else if ((userGuess - secretNumber) > 40.5) {
            setFeedback("Now you are cold!");
        } else if ((userGuess - secretNumber) > 30.5) {
            setFeedback("It's getting warm around here");
        } else if((userGuess - secretNumber) > 20.5) {
            setFeedback("It's getting very warm in here!");
        } else if((userGuess - secretNumber) > 15.5) {
            setFeedback("It's getting very very warm in here!");
        } else if ((userGuess - secretNumber) > 7.5){
            setFeedback("It is hot!");
        } else if ((userGuess - secretNumber) > 5.5){
            setFeedback("I am very hot here!!");
        } else if((userGuess - userGuess) > 1.5){
            setFeedback("I am burning here!!");
        }else if ((userGuess - secretNumber) > 0.5){
            setFeedback("Its is hotter than the sun!!!!!");
        } else {
        }
    }

/*--- Compares whether the difference is positive or negative --*/
    function comparisonAmount(){
        if (userGuess - secretNumber > 0) {
            negativeAmount();
        } else {
            positiveAmount();
        }
    }

/*--- Function that sends message to user --*/
    function setFeedback(feedback) {
        $('#feedback').text(feedback);
    }

/*--- Function that counts attempts of user --*/
    function setCount(count){
        $('#count').text(guessCount);
    }

/*--- Function that resets game --*/
    function newGame(){
        guessCount = 0;
        finish = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        secretNumber = (Math.floor(Math.random()*100));
        setFeedback("Make your guess!");
        console.log("it works! new secret number is " + secretNumber);
    }

/*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });

/*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

/*---- To start a new game ----*/
    $('.new').click(function(){
        newGame();
    });

/*-- Checks the user's input--*/
function checkInput(){
    if(isNaN(userGuess)) {
        alert("Please enter a number from 1 - 100!");
    } else if(userGuess === " ") {
        alert("Well, you have to input a number");
    } else if (userGuess < 0 || userGuess > 100) {
        alert("Plese enter a number from 1 - 100!");
    } else {
        comparisonAmount();
        console.log("User guess = " + userGuess);
        $('#userGuess').val('');
        guessCount++;
        setCount(guessCount);
        $('ul#guessList').append("<li>" + userGuess + "</li>");
    }
}

/*--- To get user's input --*/
    $("form").submit(function(event){
        event.preventDefault();
        //if user finished the game, it doesn't allow him to continue!
        if(!finish){
            userGuess = $('#userGuess').val();
            checkInput();
        } else {
            setFeedback("You already won! Need to start a new game!");
        }
    });
});
