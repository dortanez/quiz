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


new Vue({
	el: "#quizApp",
	data: {
		introView: false,
		questionsView: false,
		resultsView: false,
		questions:[],
		answer:[]
	},
	methods: {
		startQuiz: function() {
			this.introView = false;
			this.questionsView = true;
		}
	}

})