var allScores = localStorage.getItem("allScores");
if (allScores === null) {
    allScores = [];
} else {
    allScores = JSON.parse(allScores);
}
// For loops
for (var i = 0; i < highscore.length; i++) {
    // Appends question title only
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    quizQuestions.textContent = userQuestion;
}