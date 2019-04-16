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

  inPlay: null,
  lettersGuessed: [],
  lettersAnswer: [],
  attempts: 0,
  score: 0,

  selectGamemode: function() {
    const app = this
    $("#startButton").click(function() {
      app.setupGame($("#gamemodeSelect")[0].value)
    })
  },
  setupGame: function(gamemode) {
    if (gamemode === "standard") {
      const objKeys = Object.keys(this.questionBank)
      this.inPlay = this.questionBank[Math.floor(Math.random() * objKeys.length)]
      this.lettersAnswer = this.inPlay.answer.toLowerCase().split("")
      this.setupUI(gamemode)
    } else {
      console.log("Not Available: Blitz, Siphon, Smoke and Mirrors")
    }
  },
  setupUI: function(gamemode) {
    $("#mainHeader").html("Trivial Survival") // change header
    $("#questionBox").html(this.inPlay.question) // change question box text to question
    // answer box
    $("#answerBox").html("")
    if (gamemode === "standard") {
      // clear the answerBox
      // run a function
      this.buildWordView()
    }
  },
  buildWordView: function() {
    let wordView = ""
    for (var i = 0; i < this.lettersAnswer.length; i++) {
      wordView += this.lettersAnswer[i]
    }
    console.log(wordView)
    console.log("&nbsp;_&nbsp;")
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

  updateAttempts: function() {},
  updateMatchedLetters: function() {}
  // function that updates page for game start
}
trivialSurvial.selectGamemode()
// Interact with page
