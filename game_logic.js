function startGame() {
    console.log("Welcome to the game!");
}
import triviaQuestions from "./trivia_questions.js";
for (const question of triviaQuestions) {
    displayQuestion(question);
    displayAnswer(question.answer);
}
if (answer === question.answer) {
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}
startGame();