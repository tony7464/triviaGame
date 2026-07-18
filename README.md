# Trivia Game

A command-line trivia quiz built with Node.js. Players answer multiple-choice geography questions, get instant feedback, and race against a 60-second game timer (plus a 10-second target per question). At the end, the game shows your score and asks if you want to play again.

## Requirements

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (comes with Node.js)

## Install

From the project folder, install dependencies:

```bash
npm install
```

This installs `@inquirer/prompts`, which powers the interactive menus in the terminal.

## Run the game

```bash
node game_logic.js
```

## How to play

1. Read the welcome message and rules.
2. For each question, use the arrow keys to highlight an answer and press **Enter** to select it.
3. You will see **Correct!** or **Incorrect!** right away.
4. Try to finish within **60 seconds** total, and aim for **10 seconds or less** per question.
5. When the quiz ends, your final score is displayed (for example, `3/5`).
6. Choose whether to **Play again** or exit.

## Project files

| File | Purpose |
|------|---------|
| `game_logic.js` | Game flow, timer, scoring, and user prompts |
| `trivia_questions.js` | Question data (prompt, choices, correct answer) |
| `package.json` | Project metadata and dependencies |
