# Hangman (React)

A modern, interactive Hangman game built with React. Guess the hidden word, one letter at a time, with helpful hints and a variety of categories. All words and clues are curated in a custom JSON file for a richer experience.

[**Live Demo**](http://sruthivellore.github.io/Hangman)

---

## 🎮 Features

- **Curated Word List:** Words and hints are sourced from a custom `quixwords.json` file, organized by categories like Technology, Social, and Celeb.
- **Hints for Every Word:** Each word comes with a description or clue, making the game both fun and educational.
- **Category Variety:** Words are randomly selected from multiple categories, keeping gameplay fresh.
- **On-Screen Keyboard:** Clickable letters for intuitive play on any device.
- **Visual Feedback:** Hangman drawing updates with each incorrect guess.
- **Easy Restart:** Play as many rounds as you like with a single click.
- **Modern UI:** Built with React and Bootstrap

---

## 🗂️ How It Works

- On each game start, a **select a category** from the list.
- A **random word** is picked from that category.
- The **description** for the word is displayed as a hint.
- The player guesses one letter at a time.
- Incorrect guesses reveal more of the hangman drawing.
- The game ends when the word is guessed, the hangman is fully drawn or timeout.

**Example from `quixwords.json`:**
```json
{
  "Technology": [
    {
      "word": "Artificial Intelligence",
      "description": "Refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions."
    }
    // ...
  ],
  "social": [
    {
      "word": "Facebook",
      "description": "The biggest social media site around, with more than two billion people using it every month."
    }
    // ...
  ],
  "celeb": [
    {
      "word": "Mahatma Gandhi",
      "description": "Father of the Nation."
    }
    // ...
  ]
}
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- npm

### Installation

```bash
git clone https://github.com/sruthivellore/Hangman.git
cd Hangman
npm install
```

### Running Locally

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

```bash
npm run deploy
```

---

## 📦 Major Dependencies

- **React** – UI library
- **react-router-dom** – Routing (for navigation)
- **react-bootstrap** & **bootstrap** – Responsive layout and UI components
- **primereact** & **primeicons** – Additional UI elements and icons
- **react-countup** – Animated counters (if used in your UI)
- **gh-pages** – For deployment to GitHub Pages

---

## 🏗️ Available Scripts

| Script           | Description                              |
|------------------|------------------------------------------|
| `npm start`      | Run the app in development mode          |
| `npm run build`  | Build the app for production             |
| `npm test`       | Run tests                                |
| `npm run deploy` | Deploy to GitHub Pages                   |
| `npm run eject`  | Eject Create React App configuration     |

---

## 🧠 Game Logic Overview

- **Word and Hint Selection:**  
  The app loads `quixwords.json`, picks a random category, then a random word and its hint from that category.
- **Gameplay State:**  
  Tracks guessed letters, incorrect guesses, and win/loss conditions using React state hooks.
- **User Interface:**  
  - Displays the word with blanks for unguessed letters.
  - Shows a hint/description.
  - Provides an on-screen keyboard.
  - Renders the hangman drawing as mistakes accumulate.
- **Restart:**  
  After a win or loss, players can start a new game with a fresh word and hint.

---
## 👩‍💻 Author

Developed by [sruthivellore](https://github.com/sruthivellore)

---

**Enjoy playing Hangman!**  
If you like this project, please ⭐ the repo and share your feedback.

---

*Tip: Add screenshots or a GIF for extra flair! If you want to highlight specific components or add FAQs, let me know!*
