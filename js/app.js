$(document).ready(function(){

questionNum = -1; // top level should work but doesn't work with var
numCorrect = 0; // global variable to keep track of correct answers


/* Clear out the varous divs after user reads the instructions and clicks gotIt button */

$('#gotIt')
		.on('click', function(event) {  

		if(questionNum < 2)
		{

		$(".feedback").css("display","none");

		emptyItems();
  		
  		testQuiz = getQuizItem();
		quizDisplay(testQuiz);

		}
		else {
			//alert("print the total scrren now");

		printTotals();
		};

      });





$("ul")
	.on('click', 'li', function(event) {

		$(this).addClass('picked'); 

		if( $(this).text()  == testQuiz[5]) {
			
			displayResult(1);

			numCorrect += 1
		}

		else {
			
			displayResult(0);

		};


	}); // end ul on.click



}); /* end doc ready function */


function emptyItems() {

	  	$('.bio').empty();
  		$('ul').empty();
  		$('.quiztitle').empty();
  		
};

function getQuizItem() {
	
			var quizArray=
				[["B.B. King","bbking.jpg","lucille.jpg","In the winter of 1949, King played at a dance hall in Twist, Arkansas. In order to heat the hall, a barrel half-filled with kerosene was lit, a fairly common practice at the time. During a performance, two men began to fight, knocking over the burning barrel and sending burning fuel across the floor. The hall burst into flames, and the building was evacuated. Once outside, King realized that he had left his guitar inside so he went back into the burning building to retrieve his beloved $30 Gibson guitar. Two men died in the fire, and King learned the next day that they had been fighting over a woman.",["Blues Boy","Baby Girl","Lucille","Bullet"],"Lucille"],
				["Eddie Van Halen","evh.jpg","evhguitar.jpg","Van Halen is an American rock band formed in Pasadena, California, in 1972. From 1974 until 1985, the band comprised guitarist Eddie Van Halen, vocalist David Lee Roth, drummer Alex Van Halen, and bassist Michael Anthony. This line-up was changed when Roth was succeeded as vocalist by Sammy Hagar. The band went on to further success, and by the early 1980s they were one of the most successful rock acts of the time. 1984 was their most successful album. The lead single, Jump, became an international hit and their only single to reach number one on the Billboard Hot 100. The following singles, Panama and I'll Wait, both hit number 13 on the US charts."
				,["Lenny","Wizard","Wolfy","Frankenstrat"],"Frankenstrat"],
				["Willie Nelson","wn.jpg","wnguitar.jpg","Willie Hugh Nelson born April 29, 1933 is an American country music singer-songwriter, as well as an author, poet, actor, and activist. The critical success of the album Shotgun Willie (1973), combined with the critical and commercial success of Red Headed Stranger (1975) and Stardust (1978), made Nelson one of the most recognized artists in country music. He was one of the main figures of outlaw country, a subgenre of country music that developed in the late 1960s as a reaction to the conservative restrictions of the Nashville sound. Nelson has acted in over 30 films, co-authored several books, and has been involved in activism for the use of biofuels and the legalization of marijuana."
				,["Travis","Trigger","Bullet","Tonto"],"Trigger"]]

			questionNum += 1;

			return quizArray[questionNum];
		};




function quizDisplay(testQuiz) {
	this.artistName = testQuiz[0];
	this.artistImg = testQuiz[1];
	this.guitarImg = testQuiz[2];
	this.bio = testQuiz[3];
	this.answer = testQuiz[4]; 
	this.correct = testQuiz[5];

	

	$(".quiztitle").append("What guitar did " + artistName + " make famous");
	
	$("#artist").attr("src", "img/" + artistImg); 
	$("#guitar").attr("src","img/" + guitarImg);
	$(".bio").append(bio);

	for (x in answer)
		{
			$("ul").append("<li>" + answer[x] + "</li>"); // this will need to loop through array of answers
		};

	

}; // end quizItem function

function displayResult(correctFlag) {

	$(".feedback").empty();

	if(correctFlag)
			{
				$(".feedback").append("Good Job - you guessed right");
			}
	else 	{
				$(".feedback").append("Sorry - you guessed wrong");

			};

	$("#artist").attr("src", ""); 		
	$(".feedback").css("display","inline-block");
	
	return;


};

function printTotals() {
	
	emptyItems();
	$(".quizbody").empty();
	$("#gotIt").hide();
	$(".bio").css("font-size","50px");
	$(".bio").append("You guessed " + numCorrect + " of 3 questions correct");

	return;

}


