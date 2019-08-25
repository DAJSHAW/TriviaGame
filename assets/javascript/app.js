// adding event listener//
$("#start").on("click", function(){
    $("#QandA").append(TriviaQuestions);
})
// declaring variable arrays to hold questions//
var TriviaQuesions = [TriviaQuestion1,TriviaQuestion2,TriviaQuestion3,TriviaQuestion4,TriviaQuestion5,TriviaQuestion6,TriviaQuestion7];
var TriviaQuestion1 = ["Soldier Field is a football stadium that is home to the Cincinnati Bengals. True or False?", F]
var TriviaQuestion2 = ["With 208 touchdowns, Icky Woods holds the record for the most touchdowns in the National Football League. True or False?", F]
var TriviaQuestion3 = ["Lambeau Field is the home field of the Oakland Raiders. True or False?", F];
var TriviaQuestion4 = ["Deion Sanders is the only athlete ever to play in a Super Bowl and a World Series? True of False?" , T];
var TriviaQuestion5 = ["The NFL Quarterback that has been to the most Super Bowls is Doug Williams. True or False?", F];
var TriviaQuestion6 = ["The Cleveland Browns have never made it to the Super Bowl. True or False", T];
var TriviaQuestion7 = ["The first NFL Super Bowl was won by the Pittsburg Steelers. True or False?", F];
//define counter variables to be incremented// 
var CorrectAnswer = 0;
var IncorrectAnswer = 0;
// declaring a variable to hold answers//
var TriviaAnswers =[];
// examine each variable array value to determine which counter to increment//
    if (TriviaQuestion1.value===F) {
        CorrectAnswer++;
    } else {
        IncorrectAnswer++;
    }

    if (TriviaQuestion2.value===F) {
        CorrectAnswer++;
    } else {
        IncorrectAnswer++;
    }

    if (TriviaQuestion3.value===F) {
        CorrectAnswer++;
    } else {
        IncorrectAnswer++;
    }

    if (TriviaQuestion4.value===T) {
        CorrectAnswer++;
    } else {
        IncorrectAnswer++;
    }

    if (TriviaQuestion5.value===F) {
        CorrectAnswer++;
    } else {
        IncorrectAnswer++;
    }

    if (TriviaQuestion6.value===T) {
        CorrectAnswer++;
    } else {
        IncorrectAnswer++;
    }

    if (TriviaQuestion7.value===F) {
        CorrectAnswer++;
    } else {
        IncorrectAnswer++;
    }







