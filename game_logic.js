import triviaQuestions from "./trivia_questions.js";
import { select, confirm } from "@inquirer/prompts";

const QUESTION_TIME_LIMIT_SECONDS = 10;
const GAME_DURATION_SECONDS = 60;

let score = 0;
let timeIsUp = false;
let gameTimerId;

function startGameTimer() {
  timeIsUp = false;
  gameTimerId = setTimeout(() => {
    timeIsUp = true;
    console.log("\nTime's up! The game timer has ended.");
  }, GAME_DURATION_SECONDS * 1000);
}

function clearGameTimer() {
  clearTimeout(gameTimerId);
}

async function askQuestions() {
  for (const question of triviaQuestions) {
    if (timeIsUp) {
      break;
    }

    const startTime = Date.now();
    const choices = question.answerOptions.map((option, index) => ({
      name: `${index + 1}) ${option}`,
      value: option,
    }));

    const answer = await select({
      message: question.question,
      choices,
    });

    if (timeIsUp) {
      break;
    }

    const elapsed = (Date.now() - startTime) / 1000;
    if (elapsed > QUESTION_TIME_LIMIT_SECONDS) {
      console.log("Time's up for this question!");
      continue;
    }

    if (answer === question.answer) {
      console.log("Correct!");
      score++;
    } else {
      console.log("Incorrect!");
    }
  }
}

function endGame() {
  clearGameTimer();
  console.log(`Game over! Your final score is ${score}/${triviaQuestions.length}.`);
}

async function startGame() {
  score = 0;

  console.log("Welcome to the game!");
  console.log(`You will be asked ${triviaQuestions.length} questions.`);
  console.log(`You have ${GAME_DURATION_SECONDS} seconds for the whole game.`);
  console.log(`Try to answer each question within ${QUESTION_TIME_LIMIT_SECONDS} seconds.`);
  console.log("Good luck!");

  startGameTimer();
  await askQuestions();
  endGame();

  const playAgain = await confirm({ message: "Play again?" });
  if (playAgain) {
    await startGame();
  } else {
    console.log("Thanks for playing!");
  }
}

await startGame();
