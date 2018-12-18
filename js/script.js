/* global $ */

// var userInput;
var points = 1;
var question1Points; 
var question2Points; 
var question3Points;
var question4Points;
var question5Points;
var question6Points;
var question7Points;
var question8Points;
var question9Points;

// var totalScore;

$(document).ready(function() {
    // $("button").click(function() {
    //     var name = $("#name").val();
    //     var techPlacement = "TBD";
    //     var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
    //     var q1Result = $("#question1").val();
    //     var q2Result = $("#question2").val();
    //     var q3Result = $("#question3").val();
    //     // var totalScore;
    // });
    
    
function pointsForQuestion1(){
    var userInput1= $("#question1").val();
    if (userInput1 === "cat" || userInput1 === "a cat"){
        question1Points= points * 3;
       }
    else if(userInput1 === "dog" || userInput1 === "a dog"){
        question1Points= points * 2;
       }
    else if (userInput1 === "hamster" ||userInput1 === "a hamster"){
        question1Points= points;
       }
    }
    
function pointsForQuestion2(){
    var userInput2= $("#question2").val();
    if (userInput2 === "chicken" || userInput2 === "Chicken"){
        question2Points= points * 3;
       }
    else if(userInput2 === "steak" || userInput2 === "Steak"){
        question2Points= points * 2;
       }
    else if (userInput2 === "beef" ||userInput2 === "Beef"){
        question2Points= points;
       }
    }
    
function pointsForQuestion3(){
    var userInput3= $("#question3").val();
    if (userInput3 === "sleeping" || userInput3 === "Sleeping"){
        question3Points= points * 5;
       }
    else if(userInput3 === "eating" || userInput3 === "Eating"){
        question3Points= points * 4;
       }
    else if (userInput3 === "partying" ||userInput3 === "Partying"){
        question3Points= points * 3;
       }
    else if (userInput3 === "reading" ||userInput3 === "Reading"){
        question3Points= points * 2;
       }
    }

// function pointsForQuestion4(){
//     var userInput4= $("#question4").val();
//     var myGrade = "11";
//     var guesses = Math.floor(Math.random())* 13;
//     if (userInput4 === myGrade && userInput4 === guesses){
//         question4Points= points * 5;
//       }
//     else if(userInput4 > "11" && userInput4> guesses){
//         question4Points= points * 6;
//       }
//     else if(userInput4 < "11"  && userInput4< guesses){
//         question4Points= points * 4;
//       }


function pointsForQuestion5(){
    var userInput5= $("#question5").val();
    if (userInput5 === "volleyball" || userInput5 === "basketball"){
        question5Points= points * 5;
       }
    else if(userInput5 === "soccer" || userInput5 === "baseball"){
        question5Points= points * 4;
       }
    else if (userInput5 === "rugby" ||userInput5 === "track"){
        question5Points= points * 3;
       }
    else if (userInput5 === "football" ||userInput5 === "cricket"){
        question5Points= points * 2;
       }
    }
function pointsForQuestion6(){
    var userInput6= $("#question6").val();
    if (userInput6 === "Andriod" || userInput6 === "andriod"){
        question6Points= points * 5;
       }
    else if(userInput6 === "iphone" || userInput6 === "Iphone"){
        question6Points= points * 10;
       }
}
    
function pointsForQuestion7(){
    var userInput7= $("#question7").val();
    if (userInput7 === "Drama" || userInput7 === "drama"){
        question7Points= points * 5;
       }
    else if(userInput7 === "Action" || userInput7 === "action"){
        question7Points= points * 10;
       }
}
  
// function pointsForQuestion8(){
//     var userInput8= $("#question8").val();
//     if(userInput8===$("#question8").val){
//          question8Points = points *7;
//     }
// }  

function pointsForQuestion9(){
    var userInput9= $("#question8").val();
    console.log($("#question8").val());
    if (userInput9 === "" || userInput9 === "2"){
        question9Points= points * 2;
       }
    else if(userInput9 === "3" || userInput9 === "4"){
        question9Points= points * 4;
       }
    else if(userInput9 === 5 || userInput9 === "6"){
        question9Points= points * 6;
       }
    else if(userInput9 === "7" || userInput9 === "8"){
        question9Points= points * 6;
       }
    else {
        question9Points= points * 7;
       }
}
$("button").click(function(){ 
    pointsForQuestion1();
    pointsForQuestion2();
    pointsForQuestion3();
    // pointsForQuestion4();
    pointsForQuestion5();
    pointsForQuestion6();
    pointsForQuestion7();
    // pointsForQuestion8();
    pointsForQuestion9();

    console.log(question9Points);
    console.log(question1Points + question2Points + question3Points + question5Points
    + question6Points + question7Points + question9Points );
// question4Points + question8Points + 
    });
    
    
});

