$(document).ready(function() {

	var start = 30;

	var correctAnswer = 0;
	var wrongAnswer = 0;

	var trivia = [
		{
			question: "Question 1: What coffee is good to the last drop?",
			answers: [" Folgers", " Maxwell House", " A Cup of Mud", " Starbucks", "Colombian "],
			correctAnswer: " Maxwell House"
		},

		{
			question: "Question 2: Which coffee is the best part of waking up?",
			answers: [" Folgers", " Maxwell House", " A Cup of Mud", " Starbucks", " Colombian"],
			correctAnswer: " Folgers"
		},

		{
			question: "Question 3: What does Starbucks call its brand of instant coffee which comes in portable packets of one cup envelopes?",
			answers: [" Instant Coffee", " Crap", " Starbucks To Go", " Via", " Starbucks"],
			correctAnswer: " Via"
		},

		{
			question: "Question 4: In what city did Albert Peet open the first Peet's coffee store?",
			answers: [" Berkeley, CA", " Peet, CO", " Seattle, WA", " Portland, OR", " Omaha, NB"],
			correctAnswer: " Berkeley, CA"
		},

		{
			question: "Quesetion 5: Which coffee marketing campaign promised heavenly coffee?",
			answers: [" Stay Awake", " Cup of Mud", " Dazbog", " Folgers", " Chock Full O Nuts"],
			correctAnswer: " Chock Full O Nuts"
		},

		{
			question: "Question 6: What does my Dad call coffee?",
			answers: [" Cup of Mud", " Coffee", " Crap", " A drink", " Some juice"],
			correctAnswer: " Cup of Mud"
		},

		{
			question: "Question 7: In the 17th century, France met and was charmed by coffee. Who was responsible for the introduction of the beverage in France?",
			answers: [" Ronald Reagon", " Clint Eastwood", " Pizza Steve", " Jean de Thevenot", " Dan Wolfe"],
			correctAnswer: " Jean de Thevenot"
		},

		{
			question: "Question 8: Which coffee brand name was created in 1905 from John Arbuckle's Yuletide Blend?",
			answers: [" Secret Blend", " Decaffinated", " Colombian", " Black", " Yuban"],
			correctAnswer: " Yuban"
		},

		{
			question: "Question 9:  In America, drinking coffee became prevalent in late 18th century. What was the event that caused the popularization of coffee?",
			answers: [" Taxes on tea which resulted in the Boston Tea Party", " People wanted to sleep less", " The invention of the light bulb", " It was fancy and new", " People got tired mof drinking tea"],
			correctAnswer: " Taxes on tea which resulted in the Boston Tea Party"
		},

		{
			question: "Question 10: During World War II, American soldiers in Europe found the espresso coffee to be too strong. As a result, they diluted the espresso with hot water resulting in which coffee drink?",
			answers: [" Cappuccino", " Americano", " Black coffee", " Latte", " Macchiato"],
			correctAnswer: " Americano"
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
