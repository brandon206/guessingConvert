$(document).ready(startApp);

function startApp(){
    var gameStart = new GuessGame ();
	gameStart.guess_start();
}