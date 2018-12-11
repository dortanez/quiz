var questions = [
	{
		question: "You find out you and your best friend like the same person. What do you do?",
		answers: [
			"get mad at my best friend",
			"Suggest we both date the person at the same time because it's only fair",
			"Keep a positive attitude and encourage your friend too also. Let fate decide who will end up with the person",
			"Make a fun plan with my best friend to mess with the person and confuse them"
			]
	},
	{
		question: "What would you do if a child next to you broke their toy and started crying?",
		answers: [
			"roll my eyes and walk away",
			"Find something around me to give to the child that would make up for the broken toy",
			"Try to stop the child from crying and cheer them up",
			"Make funny faces at the child and make them laugh"
			]
	},
	{
		question: "Pick a symbol:",
		answers: [
			"img/grumpySym.png",
			"img/shareSym.png",
			"img/cheerSym.png",
			"img/funSym.png"
			]
	},
	{
		question: "You see a homeless person on the corner of a street asking for money. What do you do?",
		answers: [
			"Ignore them",
			"Give them the money in my wallet",
			"Go sit down next to them and have a nice conversation",
			"Decide to try something different and take them out on a fun date"
			]
	},
	{
		question: "How do you express your affection to loved ones?",
		answers: [
			"I don't",
			"I buy them gifts",
			"I cheer them up when they are feeling down",
			"I always make sure they have a good time with me"
			]
	}
]

var questionForm = document.getElementById("questionForm");

//Begin game when start button is clicked//////////////////
function startGame() {

	questionForm.innerHTML = "";

	//Loading the first question//////////////////////////
	createQuestion();
};

function createQuestion() {

	for(var i = 0; i < 1; i++) {

		// Creating elements for the questions and adding to DOM
		var formGroup = document.createElement("div");
		var newQuestion = document.createElement("h3");

		newQuestion.id = "questions" + [i];
		newQuestion.className = "mb-5";
		newQuestion.id = "questions" + [i]

		var questionText = document.createTextNode(questions[i].question);

		newQuestion.appendChild(questionText);

		formGroup.appendChild(newQuestion);

		questionForm.appendChild(formGroup);


		//Adding answers to DOM//////////
		for(var x = 0; x < questions[i].answers.length; x++) {

			var answerDiv = document.createElement("div");
			var newAnswer = document.createElement("input");

			var answerText = document.createTextNode(" " + questions[i].answers[x]);

			answerDiv.appendChild(newAnswer);
			answerDiv.appendChild(answerText);

			answerDiv.className = "questionWrap mt-3";
			newAnswer.type = "radio";
			newAnswer.name = "radio" + [i];
			newAnswer.value = questions[i].answers[x];


			formGroup.appendChild(answerDiv);
		};
	};

	var submit = document.createElement("button");

	submit.className = "btn btn-lg btn-primary mt-5";
	submit.textContent = "Submit Answer";
	submit.onclick = submitAnswer;
	submit.type = "button";

	questionForm.appendChild(submit);
};

var cheer = 0;
var fun = 0;
var grumpy = 0;
var share = 0;

function submitAnswer() {

	var els = document.getElementsByTagName("input");

	for(var i = 0; i < els.length; i++) {

		if(els[i].checked == "1") { 
			console.log(i)
		}

	}


}