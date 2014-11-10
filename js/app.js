$(document).ready(function(){

questionNum = 0;
numCorrect = 0; // global variable to keep track of correct answers

/* Clear out the varous divs after user reads the instructions and clicks gotIt button */

$('#gotIt')
		.on('click', function(event) {  

		//quizArray=[];
		emptyItems();
		testQuiz = getQuizItem();


  		/*
  		$('.bio').empty();
  		$('ul').empty();
  		$('.quiztitle').empty(); */
  		$('#gotIt').hide(); // why camel case here and lowercase elsewhere
  		//$('#artist').hide();
  		//$('#guitar').hide();

//  		testQuiz = new quizItem("B.B. King","bbking.jpg","lucille.jpg","In the winter of 1949, King played at a dance hall in Twist, Arkansas. In order to heat the hall, a barrel half-filled with kerosene was lit, a fairly common practice at the time. During a performance, two men began to fight, knocking over the burning barrel and sending burning fuel across the floor. The hall burst into flames, and the building was evacuated. Once outside, King realized that he had left his guitar inside so he went back into the burning building to retrieve his beloved $30 Gibson guitar. Two men died in the fire, and King learned the next day that they had been fighting over a woman.",["Blues Boy","Baby Girl","Lucille","Bullet"],"Lucille"); 		
		//$('#artist').show();
		//$('#guitar').show();
         
      });

$("ul")
	.on('click', 'li', function(event) {

		//alert($(this).text());
		alert( $(this).text());
		$(this).addClass('picked'); 

		// Update these alerts to fade in a div or something to provide input.

		if( $(this).text()  == testQuiz.correct) {
			alert('got it right');
			numCorrect += 1
		}

		else {
			alert('sorry got it wrong');
		};

	}); // end ul on.click



}); /* end doc ready function */


function emptyItems() {

	  	$('.bio').empty();
  		$('ul').empty();
  		$('.quiztitle').empty();
};

function getQuizItem() {
	
		// may need to put an if here to prevent more questions than in the data

		alert('in get quiz item');

			var quizArray1 = new quizItem("B.B. King","bbking.jpg","lucille.jpg","In the winter of 1949, King played at a dance hall in Twist, Arkansas. In order to heat the hall, a barrel half-filled with kerosene was lit, a fairly common practice at the time. During a performance, two men began to fight, knocking over the burning barrel and sending burning fuel across the floor. The hall burst into flames, and the building was evacuated. Once outside, King realized that he had left his guitar inside so he went back into the burning building to retrieve his beloved $30 Gibson guitar. Two men died in the fire, and King learned the next day that they had been fighting over a woman.",["Blues Boy","Baby Girl","Lucille","Bullet"],"Lucille");
			//var quizArray[1] = new quizItem("num2","default.jpg","default.jpg","bio stuff here",["test1","test2","test3","test4"],"test2")


			questionNum += 1;
			return quizArray[questionNum];
		};




function quizItem(artistName,artistImg,guitarImg,bio,answer,correct) {
	this.artistName = artistName;
	this.artistImg = artistImg;
	this.guitarImg = guitarImg;
	this.bio = bio;
	this.answer = answer[0]; // this doesn't seem to be causing an error but seems wrong - should refer to array not item 0
	this.correct = correct;

	//alert('reset quizitem called');

	$(".quiztitle").append("What guitar did " + artistName + " make famous");
	
	$("#artist").attr("src", "img/" + artistImg); 
	$("#guitar").attr("src","img/" + guitarImg);
	$(".bio").append(bio);

	for (x in answer)
		{
			$("ul").append("<li>" + answer[x] + "</li>"); // this will need to loop through array of answers
		};

	/* this.resetQuiz = function () {

		alert('reset called');

		$("#artist").attr("src", function() {	

		return "img/" + this.artistImg; 
		}); 
	}; */

}; // end quizItem function


/* 		$("#artist").attr("src", function() {	

		return "img/" + testQuiz.artistImg; 
		});		$("#artist").attr("src", function() {	

		return "img/" + testQuiz.artistImg; 
		}); */

/* $( "img" ).attr( "src", function() {
  return "/resources/" + this.title; */
