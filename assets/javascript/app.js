$(document).ready(function() {

	var start = 30;

	var correctAnswer = 0;
	var wrongAnswer = 0;

	var trivia = [
		{
			question: "Question 1: What year did the Denver Broncos start in the American Football League?",
			answers: [" 1955", " 1960", " 1962", " 1971", " 1975"],
			correctAnswer: " 1960"
		},

		{
			question: "Question 2: Who did the Denver Broncos defeat to win their first Super Bowl?",
			answers: [" Greenbay Packers", " New York Jets", " Atlanta Falcons", " Oakland Raiders", " Pittsburgh Steelers"],
			correctAnswer: " Greenbay Packers"
		},

		{
			question: "Question 3: Who leads the Denver Broncos in all time passing yards?",
			answers: [" Peyton Manning", " John Elway", " Tim Tebow", " Jake Plummer", " Brian Griese"],
			correctAnswer: " John Elway"
		},

		{
			question: "Question 4: I rushed for 2008 yards in 1998.  Who am I?",
			answers: [" Olandis Gary", " Mike Anderson", " Terrell Davis", " Tatum Bell", " Michael Pittman"],
			correctAnswer: " Terrell Davis"
		},

		{
			question: "Quesetion 5: How many touchdowns did Peyton Manning throw in 2013?",
			answers: [" 48", " 50", " 63", " 55", " 45"],
			correctAnswer: " 55"
		},

		{
			question: "Question 6: What major league baseball team drafted John Elway?",
			answers: [" Colorado Rockies", " New York Yankees", " Cleveland Indians", " Los Angeles Dodgers", " Texas Rangers"],
			correctAnswer: " New York Yankees"
		},

		{
			question: "Question 7: Who was the MVP of Super Bowl 50?",
			answers: [" Von Miller", " Aqib Talib", " Peyton Manning", " DeMarcus Ware", " Derek Wolfe"],
			correctAnswer: " Von Miller"
		},

		{
			question: "Question 8: How many times was Tom Brady hit in the 2015 AFC Championship game?",
			answers: [" 3", " 20", " 11", " 9", " 12"],
			correctAnswer: " 20"
		},

		{
			question: "Question 9: How many interceptions did Champ Bailey have in 2006?",
			answers: [" 5", " 21", " 15", " 7", " 10"],
			correctAnswer: " 10"
		},

		{
			question: "Question 10: Who leads the Broncos in career touchdown receptions?",
			answers: [" Demaryius Thomas", " Rod Smith", " Shannon Sharpe", " Emmanuel Sanders", " Ed McCaffrey"],
			correctAnswer: " Rod Smith"
		}

	]

	$("#timer").hide();
	$(".questions").hide();
	$(".answers1").hide();
	$(".answers2").hide();
	$(".answers3").hide();
	$(".answers4").hide();
	$(".answers5").hide();
	$(".answers6").hide();
	$(".answers7").hide();
	$(".answers8").hide();
	$(".answers9").hide();
	$(".answers10").hide();

	// Turn answer choices into radio buttons
	$(".answers1").append('<input type="radio" name="answers1" />');
	$(".answers2").append('<input type="radio" name="answers2" />');
	$(".answers3").append('<input type="radio" name="answers3" />');
	$(".answers4").append('<input type="radio" name="answers4" />');
	$(".answers5").append('<input type="radio" name="answers5" />');
	$(".answers6").append('<input type="radio" name="answers6" />');
	$(".answers7").append('<input type="radio" name="answers7" />');
	$(".answers8").append('<input type="radio" name="answers8" />');
	$(".answers9").append('<input type="radio" name="answers9" />');
	$(".answers10").append('<input type="radio" name="answers10" />');


	// Questions 1-10
	for (var i = 1; i < 11; i++) {
		$("#q" + i).append(trivia[i-1].question);
	}

	// Answers for Question 1
	for (var i = 1; i < 6; i++) {
		$("#a" + i).append(trivia[0].answers[i-1]);
		$("#a" + i).attr("data-answerchoice", trivia[0].answers[i-1]);
	}

	// Answers for Question 2
	for (var i = 6; i < 11; i++) {
		$("#a" + i).append(trivia[1].answers[i-6]);
		$("#a" + i).attr("data-answerchoice", trivia[1].answers[i-6]);
	}

	// Answers for Question 3
	for (var i = 11; i < 16; i++) {
		$("#a" + i).append(trivia[2].answers[i-11]);
		$("#a" + i).attr("data-answerchoice", trivia[2].answers[i-11]);
	}

	// Answers for Question 4
	for (var i = 16; i < 21; i++) {
		$("#a" + i).append(trivia[3].answers[i-16]);
		$("#a" + i).attr("data-answerchoice", trivia[3].answers[i-16]);
	}

	// Answers for Question 5
	for (var i = 21; i < 26; i++) {
		$("#a" + i).append(trivia[4].answers[i-21]);
		$("#a" + i).attr("data-answerchoice", trivia[4].answers[i-21]);
	}

	// Answers for Question 6
	for (var i = 26; i < 31; i++) {
		$("#a" + i).append(trivia[5].answers[i-26]);
		$("#a" + i).attr("data-answerchoice", trivia[5].answers[i-26]);
	}

	// Answers for Question 7
	for (var i = 31; i < 36; i++) {
		$("#a" + i).append(trivia[6].answers[i-31]);
		$("#a" + i).attr("data-answerchoice", trivia[6].answers[i-31]);
	}

	// Answers for Question 8
	for (var i = 36; i < 41; i++) {
		$("#a" + i).append(trivia[7].answers[i-36]);
		$("#a" + i).attr("data-answerchoice", trivia[7].answers[i-36]);
	}

	// Answers for Question 9
	for (var i = 41; i < 46; i++) {
		$("#a" + i).append(trivia[8].answers[i-41]);
		$("#a" + i).attr("data-answerchoice", trivia[8].answers[i-41]);
	}

	// Answers for Question 10
	for (var i = 46; i < 51; i++) {
		$("#a" + i).append(trivia[9].answers[i-46]);
		$("#a" + i).attr("data-answerchoice", trivia[9].answers[i-46]);
	}

	$(".answers1").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[0].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[0].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);

	})

	$(".answers2").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[1].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[1].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);
	})

	$(".answers3").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[2].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[2].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);
	})

	$(".answers4").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[3].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[3].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);
	})

	$(".answers5").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[4].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[4].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);
	})

	$(".answers6").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[5].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[5].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);
	})

	$(".answers7").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[6].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[6].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);
	})

	$(".answers8").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[7].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[7].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);
	})

	$(".answers9").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[8].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[8].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);
	})

	$(".answers10").one("click", function(){
		var answerchoice = ($(this).attr("data-answerchoice"));
		console.log(answerchoice);

		if(answerchoice === trivia[9].correctAnswer){
			correctAnswer++;
		} else if (answerchoice !== trivia[9].correctAnswer){
			wrongAnswer++;
		}
			console.log("correct answer:" + correctAnswer);
			console.log("wrong answer: " + wrongAnswer);
	})


	$("#start").one("click", function(){

		$("#timer").show();
		$(".questions").show();
		$(".answers1").show();
		$(".answers2").show();
		$(".answers3").show();
		$(".answers4").show();
		$(".answers5").show();
		$(".answers6").show();
		$(".answers7").show();
		$(".answers8").show();
		$(".answers9").show();
		$(".answers10").show();

		// Countdown Timer
		var timer = setInterval(function() {

			var countdown = start--;
			$("#timer").html("Time Remaining: " + countdown + " seconds");

			var unanswered = 10 - correctAnswer - wrongAnswer;

			if(countdown <= 0){
				clearInterval(timer);
				$("#correctAnswer").append("Correct: " + correctAnswer);
				$("#wrongAnswer").append("Incorrect: " + wrongAnswer);
				$("#unanswered").append("Unanswered: " + unanswered);
				$("#vonmiller").prepend('<img id="theImg" src="https://media.tenor.com/images/6daf072dbdb3b331e31689f320f53b3b/tenor.gif" />')
			}

		}, 1000);
})




})
