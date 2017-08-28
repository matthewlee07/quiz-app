const STORE =
  { 
    page: ['.js-quiz-intro', '.js-quiz-selection', '.js-feedback-page', '.js-score-result'],
    questions:
    [
      {
        id: 1,
        questionText: 'This is Question 1 for our Quiz app',
        answers: ['This is Answer 1', 'This is Answer 2', 'This is Answer 3', "This is Answer 4"],
        correctAnswer: 0
      },
      {
        id: 2,
        questionText: 'This is Question 2 for our Quiz app',
        answers: ['This is Answer 1', 'This is Answer 2', 'This is Answer 3', "This is Answer 4"],
        correctAnswer: 3
      },
      // {
      //   id: 1,
      //   questionText: 'This is Question 1 for our Quiz app',
      //   answers: ['This is Answer 1', 'This is Answer 2', 'This is Answer 3', "This is Answer 4"],
      //   correctAnswer: 0
      // },
      // {
      //   id: 1,
      //   questionText: 'This is Question 1 for our Quiz app',
      //   answers: ['This is Answer 1', 'This is Answer 2', 'This is Answer 3', "This is Answer 4"],
      //   correctAnswer: 0
      // },
      // {
      //   id: 1,
      //   questionText: 'This is Question 1 for our Quiz app',
      //   answers: ['This is Answer 1', 'This is Answer 2', 'This is Answer 3', "This is Answer 4"],
      //   correctAnswer: 0
      // },
      // {
      //   id: 1,
      //   questionText: 'This is Question 1 for our Quiz app',
      //   answers: ['This is Answer 1', 'This is Answer 2', 'This is Answer 3', "This is Answer 4"],
      //   correctAnswer: 0
      // },
    ]
  }


// a function to render/handle and display each page separately page.[1], page.2[], ...etc
function handleIntroPage() {
  $('.js-quiz-intro').removeClass("hidden");
  submitIntroPage();
  console.log('handleDisplayPage ran');
}

function submitIntroPage() {
  $('.js-quiz-intro').on("click", ".js-start-game", function (event) {
    event.preventDefault();
    $('.js-quiz-intro').addClass("hidden");
    $('.js-quiz-selection').removeClass("hidden");
    console.log('submit works')
  }
    //
  )
}

function handleQuestionsPage() {
  //insert question & answers
  
  $('.js-quiz-selection').on("click", ".js-final-answer", function (event) {
    event.preventDefault();
    $('.js-quiz-selection').addClass("hidden");
    $('.js-quiz-feedback').removeClass("hidden");
    console.log('handleQuestionsPage ran');
   finalAnswerSubmit();
  })
  //STORE.questions.questionText/answers
}

function finalAnswerSubmit() {
  console.log('handleRadioSubmit ran');

}

function handleResultsPage() {
  $('.js-quiz-feedback').on("click", ".js-next-question", function (event) {
    event.preventDefault();
  console.log('handleResultsPage ran');
  //update X/Y correct answers
  //see if there's another question or end of questions
  //if () go to next question
  // $('.js-quiz-selection').removeClass("hidden");
  //else go to final page
  $('.js-quiz-feedback').addClass("hidden");
  $('.js-quiz-result').removeClass("hidden");
  })
}

function handleFinalPage() {

  console.log('handleFinalPage ran');
  //update X/Y correct answers
  //reset button
}

function handleResetButton() {
  //goes back to start page
  console.log('handleResetButton ran');
}

// Master function to handle all our other functions. Runs everything. 
function handleQuizApp() {
  handleIntroPage();
  handleQuestionsPage();
  handleResultsPage();
  handleFinalPage();
  handleResetButton();
}

$(handleQuizApp);


// const q = questions[0];
// q.answers
// q.answer[q.correctAnswer]