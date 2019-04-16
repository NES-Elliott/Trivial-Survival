// Logic of app
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
  // Variables
  inPlay: null,
  lettersGuessed: [],
  lettersAnswer: [],
  attempts: 0,
  score: 0,

  setupGame: function() {
    const objKeys = Object.keys(this.questionBank)
    this.inPlay = this.questionBank[Math.floor(Math.random() * objKeys.length)]
    console.log(this.inPlay)
    this.lettersAnswer = this.inPlay.answer.split("")
    console.log(this.lettersAnswer)
    // function to turn the answer into blanks
    // render UI
  }
}
trivialSurvial.setupGame()

// Interact with page
