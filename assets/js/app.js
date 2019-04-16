const trivialSurvial = {
  questionBank: [
    {
    question: "Which fictional city is the home of Batman?",
    answer: "Gotham City"
    },
    {
    question: "Traditionally, how many Wonders of the World are there?",
    answer: "Seven"
    },
    {
    question: "What is the name of the fairy in Peter Pan?",
    answer: "Tinkerbell"
    }
  ],

  gametype: ["Standard", "Blitz", "Siphon", "Smokes and Mirrors"], 
  inPlay: null,
  lettersGuessed: [],
  lettersAnswer: [],
  attempts: 0,
  score: 0,

  initialSetupGame: function() {
    const objKeys = Object.keys(this.questionBank)
    this.inPlay = this.questionBank[Math.floor(Math.random() * objKeys.length)]
    console.log(this.inPlay)
    this.lettersAnswer = this.inPlay.answer.toLowerCase().split("") 
    console.log(this.lettersAnswer)
    // function to turn the answer into blanks
    // render UI
  },

  updatePage: function(letter) {
    if (this.attempts === 0) {
      // this.resetGame()
    } else {
      // this.updateAttempts(letter)
      // this.updateMatchedLetters(letter)
      // update blank spaces
    }
  },

  resetGame: function() {
    console.log("reset function")
  },

  rebuildWordView: function () {},
  updateAttempts: function () {},
  updateMatchedLetters: function () {},
}
trivialSurvial.initialSetupGame()

// Interact with page
