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
var question10Points;
var totalPoints;
    
    
function pointsForQuestion(){
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

    var userInput4= $("#question4").val();
    var myGrade = 11;
    
    if (parseInt(userInput4) === myGrade){
        question4Points= points * 5;
      }
    else if(parseInt(userInput4) > 11 ){
        question4Points= points * 6;
      }
    else if(parseInt(userInput4) < 11 ){
        question4Points= points * 4;
      }

    
    var userInput5 = $("#question5").val(); 
    
    if (userInput5 === "volleyball" ||userInput5 === "basketball"){
        question5Points= points * 5;
       }
    else if(userInput5 === "soccer" ||userInput5 === "baseball"){
        question5Points= points * 4;
       }
    else if (userInput5 === "rugby" ||userInput5 === "track"){
        question5Points= points * 3;
       }
    else if (userInput5 === "football" ||userInput5 === "cricket"){
        question5Points= points * 2;
       }
    else{
        question5Points= points * 6;
        }
    

    var userInput6= $("#question6").val();
    if (userInput6 === "Android" || userInput6 === "android"){
        question6Points= points * 5;
      }
    else if(userInput6 === "iphone" || userInput6 === "Iphone"){
        question6Points= points * 10;
      }

    var userInput7= $("#question7").val();
    if (userInput7 === "Drama" || userInput7 === "drama"){
        question7Points= points * 5;
      }
    else if(userInput7 === "Action" || userInput7 === "action"){
        question7Points= points * 10;
      }

    var userInput8= question8Points;
        question8Points = points *7;
    

    var userInput9= $("#question8").val();
    
    if (parseInt(userInput9) === 1 || parseInt(userInput9) === 2){
        question9Points= points * 2;
      }
    else if(parseInt(userInput9) === 3 || parseInt(userInput9) === 4){
        question9Points= points * 4;
    }
    else if(parseInt(userInput9) === 5 || parseInt(userInput9) === 6){
        question9Points= points * 6;
      }
    else if(parseInt(userInput9) === 7 || parseInt(userInput9) === 8){
        question9Points= points * 6;
      }
    else {
        question9Points= points * 7;
      }

    var userInput10= question10Points;
        question10Points = points *15;
        
    totalPoints = question1Points + question2Points + question3Points +question4Points + question5Points + question6Points+ question7Points + question9Points + question10Points;
   
} 


$("button").click(function(){ 
    pointsForQuestion();
    totalPoints = question1Points + question2Points + question3Points +question4Points + question5Points + question6Points+ question7Points + question9Points + question10Points;
    
    var names = $("#name").val();


    if (totalPoints <40){
        alert("You " + names + " work In McDonalds");
        }
    else if(totalPoints >40 && totalPoints < 50){
        alert("You " + names + " work In Wendy's");
        }

    else if(totalPoints >50 && totalPoints < 60){
        alert("You " + names + " will work as A Secuirty Guard");
        }
    else if(totalPoints >60 && totalPoints < 70){
        alert("You " + names + " work In Saleforce");
        }
    else if(totalPoints >70 && totalPoints < 80){
        alert("You " + names + " work for  Google");
        }
    else if(totalPoints >80 ){
        alert("You " + names + " work for  anything you want");
        }



    });
    
    
