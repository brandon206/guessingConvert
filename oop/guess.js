class GuessGame{
    constructor(){
        this.secretNumber;
    }
    guess_start(){
        this.secretNumber = this.pickRandomNumber(1,10);
        this.attachHandlers();
    }
    pickRandomNumber(min, max){
        return Math.floor( Math.random() * (max-min)) + min;
    }
    attachHandlers(){
		$("#submitGuess").click( this.handleGuess.bind(this) );
		$("#userGuess").focus( this.clearGuess.bind(this) );
	}
    handleGuess(){
        var userGuess = parseInt( $("#userGuess").val());
        if(userGuess<1 || userGuess>10){
            this.displayResult('invalid range.  Must be between 1 and 10');
            return;
        }
        if(userGuess === this.secretNumber){
            this.displayResult('you got it!');
        } else if (userGuess < this.secretNumber){
            this.displayResult('too low!');
        } else if (userGuess > this.secretNumber){
            this.displayResult('too high!');
        }
    }
    clearGuess(){
        $("#userGuess").val('');
    }
    displayResult( message ){
        $("#display").text( message );
	}
	
}
// class GuessingGame {
//     constructor () {
//         this.secretNumber;
//     }
//     guess_start() {
//         this.secretNumber = this.pickRandomNumber(1,10);
//         this.attachHandlers();
//         console.log("guess_start error?");
//     }
//     pickRandomNumber(min,max) {
//         console.log("pick random number error?")
//         return Math.floor( Math.random() * (max-min)) + min;
//     }
//     attachHandlers () {
//         console.log("attach handlers error?");
//         $("#submitGuess").click(this.handleGuess);
// 	    $("#userGuess").focus(this.clearGuess);
//     }
//     handleGuess(){
//         console.log("handleguess error?");
//         var userGuess = parseInt($("#userGuess").val());
//         if(userGuess<1 || userGuess>10){
//             this.displayResult('invalid range.  Must be between 1 and 10');
//             return;
//         }
//         if(userGuess === this.secretNumber){
//             this.displayResult('you got it!');
//         } else if (userGuess < this.secretNumber){
//             this.displayResult('too low!');
//         } else if (userGuess > this.secretNumber){
//             this.displayResult('too high!');
//         }
//     }
//     clearGuess () {
//         $("#userGuess").val('');
//         console.log("clear guess error?");
//     }
//     displayResult () {
//         $("#display").text(message);
//         console.log("display result error?");
//     }
// }