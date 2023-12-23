var myInputValue = "";
var myWins = 0;
var myTies = 0;
var myLosses = 0;
var autoplayerInput = "";
var autoplayerWins = 0;
var autoplayerTies = 0;
var autoplayerLosses = 0;
var options = ["Rock", "Paper", "Scissors"];
var myROutcomes = 0;
var myPOutcomes = 0;
var mySOutcomes = 0;
var autoplayerROutcomes = 0;
var autoplayerPOutcomes = 0; 
var autoplayerSOutcomes = 0;
var counter = 0;

//Rock: wins against scissors, loses to paper, and ties against itself.
//Paper: wins against rock, loses to scissors, and ties against itself.
//Scissors: wins against paper, loses to rock, and ties against itself.


function compareInput(){

    if(counter == 10){
        if(confirm("You have completed 10 rounds and the board will be cleard!") == true){
            location.reload();
        }else{
            location.reload();
        }
    }

    myInputValue = document.getElementById("mySelect").value;

    autoplayerInput = "";

    while (autoplayerInput.length < 3) {
        rps = Math.floor(Math.random() * options.length);
        autoplayerInput += options[rps];
      break;
    }

    if (typeof myInputValue === "string" && myInputValue.length === 0) {
        document.getElementById("gameError").innerHTML = "You are expected to make a selection!";
    }else{

    switch(myInputValue){
        case "Rock":
            if((myInputValue === "Rock") && (autoplayerInput === "Rock")){ 
                myROutcomes++;
                autoplayerROutcomes++;
                myTies++;
                autoplayerTies++;
            }else if((myInputValue === "Rock") && (autoplayerInput === "Paper")){ 
                myROutcomes += 0;
                myLosses++;
                autoplayerPOutcomes++;
                autoplayerWins++;
            }else if((myInputValue === "Rock") && (autoplayerInput === "Scissors")){ 
                myROutcomes++;
                myWins++;
                autoplayerSOutcomes += 0;
                autoplayerLosses++;
            }
            document.getElementById("myScores").innerHTML = "<h2>My Scores</h2>" + "<b>I played:</b> " + myInputValue + "<br/><br/>" + "<b>Scissors:</b> " + mySOutcomes + " | <b>Paper:</b> " + myPOutcomes + " | <b>Rock:</b> " + myROutcomes + "<br/><b>Total Ties:</b> " + myTies + " | <b>Total Wins:</b> " + myWins + " | Total Losses: " + myLosses;
            document.getElementById("autoplayerScores").innerHTML = "<h2>Computer Scores</h2>" + "<b>Computer played:</b> " + autoplayerInput + "<br/><br/>" + "<b>Scissors:</b> " + autoplayerSOutcomes + " | <b>Paper:</b> " + autoplayerPOutcomes + " | <b>Rock:</b> " + autoplayerROutcomes + "<br/><b>Total Ties:</b> " + autoplayerTies + " | <b>Total Wins:</b> " + autoplayerWins + " | Total Losses: " + autoplayerLosses;
            document.getElementById("gameError").innerHTML = "";
            counter++;
        break;
        case "Paper":
            if((myInputValue === "Paper") && (autoplayerInput === "Paper")){
                myPOutcomes++;
                autoplayerPOutcomes++;
                myTies++;
                autoplayerTies++;
            }else if((myInputValue === "Paper") && (autoplayerInput === "Scissors")){
                myPOutcomes += 0;
                myLosses++;
                autoplayerSOutcomes++;
                autoplayerWins++;
            }else if((myInputValue === "Paper") && (autoplayerInput === "Rock")){
                myPOutcomes++;
                myWins++;
                autoplayerROutcomes += 0;
                autoplayerLosses++;
            }
            document.getElementById("myScores").innerHTML = "<h2>My Scores</h2>" + "<b>I played:</b> " + myInputValue + "<br/><br/>" + "<b>Scissors:</b> " + mySOutcomes + " | <b>Paper:</b> " + myPOutcomes + " | <b>Rock:</b> " + myROutcomes + "<br/><b>Total Ties:</b> " + myTies + " | <b>Total Wins:</b> " + myWins + " | Total Losses: " + myLosses;
            document.getElementById("autoplayerScores").innerHTML = "<h2>Computer Scores</h2>" + "<b>Computer played:</b> " + autoplayerInput + "<br/><br/>" + "<b>Scissors:</b> " + autoplayerSOutcomes + " | <b>Paper:</b> " + autoplayerPOutcomes + " | <b>Rock:</b> " + autoplayerROutcomes + "<br/><b>Total Ties:</b> " + autoplayerTies + " | <b>Total Wins:</b> " + autoplayerWins + " | Total Losses: " + autoplayerLosses;
            document.getElementById("gameError").innerHTML = "";
            counter++;
            break;
        case "Scissors":
            if((myInputValue === "Scissors") && (autoplayerInput === "Scissors")){
                mySOutcomes++;
                autoplayerSOutcomes++;
                myTies++;
                autoplayerTies++;
            }else if((myInputValue === "Scissors") && (autoplayerInput === "Paper")){
                mySOutcomes++;
                myWins++;
                autoplayerPOutcomes += 0;
                autoplayerLosses++;
            }else if((myInputValue === "Scissors") && (autoplayerInput === "Rock")){
                mySOutcomes += 0;
                myLosses++;
                autoplayerROutcomes++;
                autoplayerWins++;
            }
            document.getElementById("myScores").innerHTML = "<h2>My Scores</h2>" + "<b>I played:</b> " + myInputValue + "<br/><br/>" + "<b>Scissors:</b> " + mySOutcomes + " | <b>Paper:</b> " + myPOutcomes + " | <b>Rock:</b> " + myROutcomes + "<br/><b>Total Ties:</b> " + myTies + " | <b>Total Wins:</b> " + myWins + " | Total Losses: " + myLosses;
            document.getElementById("autoplayerScores").innerHTML = "<h2>Computer Scores</h2>" + "<b>Computer played:</b> " + autoplayerInput + "<br/><br/>" + "<b>Scissors:</b> " + autoplayerSOutcomes + " | <b>Paper:</b> " + autoplayerPOutcomes + " | <b>Rock:</b> " + autoplayerROutcomes + "<br/><b>Total Ties:</b> " + autoplayerTies + " | <b>Total Wins:</b> " + autoplayerWins + " | Total Losses: " + autoplayerLosses;
            document.getElementById("gameError").innerHTML = "";
            counter++;
        default:
            
    }
        document.getElementById("completed").innerHTML = "<h3>Play Count: " + counter + "</h3>";
    }

}
