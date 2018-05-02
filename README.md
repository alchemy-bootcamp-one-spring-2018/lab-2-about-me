# Lab-2-About-Me
### (lab-2-partb)

This project was intended to create a brief *"About Me"* page and include some games to get to know more about me.

The first game is ***Guess My Name*** and gives the user three guesses to get the correct answer. Hints are displayed after each incorrect guess.

The second game is ***Yes or No*** and is designed for the user to guess yes or no questions to information about me.

---

* Developer Notes
  * Setup
    * Click the button to start either game
  * Architecture
    * Game 1 (Guess My Name)
      * Function uses "For" loop to create a prompt followed by if/else statements, more prompts, etc.
      * At desired number of guesses/prompts or if guessed correctly, returns win/lose message
    * Game 2 (Yes or No)
      * Function prompts user and pushes values into an array
      * In total, five questions are asked and each correct answer counted
      * Final score is displayed as a fraction and percentage