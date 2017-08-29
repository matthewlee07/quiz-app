const STORE =
  {
    correct: "Correct!",
    pageState: "page1",
    totalQuestions: 0,
    correctQuestions: 0,
    questions:
    [
      {
        id: 1,
        questionText: 'What is the air-speed volectity of an unladen swallow?',
        answers: ['40-56 miles per hour', '41-51 kilometers per hour', '.00000456481 light years', 'Monty Python and the Holy Grail'],
        correctAnswer: 3
      },
      {
        id: 2,
        questionText: `How many doughnuts in a baker's dozen?`,
        answers: ['12', '13', '24', "60"],
        correctAnswer: 1
      },
      {
        id: 3,
        questionText: 'Which fruit is consumed the most annually in the United States?',
        answers: ['Banana', 'Apple', 'Orange', 'Strawberry'],
        correctAnswer: 0
      },
      {
        id: 4,
        questionText: 'Who is the top nationally ranked rugby team?',
        answers: ['England', 'Australia', 'South Africa', 'New Zealand'],
        correctAnswer: 3
      },
      {
        id: 5,
        questionText: 'Which logo is the most recognizable logo in the world? ',
        answers: ['Ford', 'Coca-Cola', "McDonald's", "Nike"],
        correctAnswer: 3
      },
      {
        id: 6,
        questionText: 'Which fruit is consumed the most annually in the United States?',
        answers: ['Banana', 'Apple', 'Orange', 'Strawberry'],
        correctAnswer: 0
      },
    ]
  }

function randomQuestion(){
  const questionOptions = [];
  while(questionOptions.length<=5){
    let question = STORE.questions[(Math.floor(Math.random() * STORE.questions.length))];
    
    for(let i=0;i<STORE.questions.length;i++) if(questionOptions.includes(question)) return;
    questionOptions.push(question);
  }
}

function renderQuizApp() {

  $('section').addClass("hidden");

  if (STORE.pageState === "page1") {
    $('.js-quiz-intro').removeClass("hidden");
  }

  if (STORE.pageState === "page2") {
    $('.js-quiz-selection').removeClass("hidden");
  }

  i = randomQuestion();
  $(".js-questionNumber-question").html(`<h2>Question ${STORE.questions[i].id}</h2>
    <p>${STORE.questions[i].questionText}</p>`)

  $(".question-container").html(`
  <input type="radio" checked="checked" class="js-optionA" name="option" value="0"></input><label class="js-answersA">${STORE.questions[i].answers[0]}</label>
  <input type="radio"  class="js-optionB" name="option" value="1"></input><label class="js-answersB">${STORE.questions[i].answers[1]}</label>
  <input type="radio"  class="js-optionC" name="option" value="2"></input><label class="js-answersC">${STORE.questions[i].answers[2]}</label>
  <input type="radio"  class="js-optionD" name="option" value="3"></input><label class="js-answersD">${STORE.questions[i].answers[3]}</label>
  `)

  if (STORE.pageState === "page3") {
    $('.js-quiz-feedback').removeClass("hidden");
    $('.js-feedback-container').html(`
    <h3 class="js-feedback-header">${STORE.correct}</h3>
    <p class="js-feedback-text">Correct Answer: ${STORE.questions[i].answers[STORE.questions[i].correctAnswer]}</p>
    <p class="js-feedback-answer">Score: ${STORE.correctQuestions}/${STORE.totalQuestions}</p>
    <button type="submit" class="js-next-question">Next Question</button>`)
  }

    if (STORE.pageState === "page3.5") {
      $('.js-quiz-feedback').removeClass("hidden");
      $('.js-feedback-container').html(`<h3 class="js-feedback-header">${STORE.correct}</h3>
      <p class="js-feedback-text">Correct Answer: ${STORE.questions[i].answers[STORE.questions[i].correctAnswer]}</p>
      <p class="js-feedback-answer">Score: ${STORE.correctQuestions}/${STORE.totalQuestions}</p><button type="submit" class="js-next-question">Get Results</button>`)
    }
   
  

  if (STORE.pageState === "page4") {
    $('.js-quiz-result').removeClass("hidden");
    $('.js-score-container').html(`<p class="js-score-text">You got ${STORE.correctQuestions} of ${STORE.totalQuestions} questions!
    </p> <button type="submit" class="js-play-again">Start Over</button>`)
  }
}

function startQuiz() {
  STORE.pageState = "page2"
}

function handleIntroPage() {

  $('.js-quiz-intro').on("click", ".js-start-game", function (event) {
    event.preventDefault();
    startQuiz();
    renderQuizApp();
  }
  )
}

function getResult() {
  if (STORE.totalQuestions === 4) {
    STORE.pageState = "page3.5"
  }
    else {
  STORE.pageState = "page3"
    }
}

function logResult() {
  const finalAnswer = $('input[type="radio"]:checked').val()
  STORE.totalQuestions++;
  if (STORE.questions[i].correctAnswer === parseInt(finalAnswer)) {
    STORE.correctQuestions++;
    STORE.correct = "Correct!"
  }
  else {
    STORE.correct = "Wrong!"
  }
}

// function goToFinal() {
//   if (STORE.totalQuestions === 5) {
//     STORE.pageState = "page3.5"
//   }
// }

function handleQuestionsPage() {
  $('.js-quiz-selection').on("click", ".js-final-answer", function (event) {
    event.preventDefault();
    console.log('handleQuestionsPage ran');
    getResult();
    logResult();
    renderQuizApp();
  })
}

function handleNextQuestion() {
  if (STORE.totalQuestions === 5) {
    STORE.pageState = "page4"
  }
  else {
    STORE.pageState = "page2"
  }
}

function handleResultsPage() {
  $('.js-quiz-feedback').on("click", ".js-next-question", function (event) {
    event.preventDefault();
    console.log('handleResultsPage ran');
    handleNextQuestion();
    renderQuizApp();
  })
}

function startOver(){
  STORE.pageState = "page1",
  STORE.totalQuestions = 0,
  STORE.correctQuestions = 0
}

function handleFinalPage() {
  $('.js-quiz-result').on("click", ".js-play-again", function (event) {
    event.preventDefault();
    console.log("im not reloading");
    startOver();
    renderQuizApp();
  })
}

function handleQuizApp() {
  renderQuizApp();
  handleIntroPage();
  handleQuestionsPage();
  handleResultsPage();
  handleFinalPage();
}

$(handleQuizApp);

