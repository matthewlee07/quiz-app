const STORE =
  {
    pageState: ['.js-quiz-intro', '.js-quiz-selection', '.js-feedback-page', '.js-score-result'],
    totalQuestions: 0,
    correctQuestions: 0,
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


function renderQuizApp() {
  $(".container").html();
}

function generateStrings() {
  
}

function generateIntroPage() {
  console.log('handleDisplayPage ran');
  return `
  <section class="js-quiz-intro quiz-intro hidden">
    <h1>Who Wants to Be a Millionaire?</h1>
    <div>
      <img src="" alt="">
          </div>
      <button type="submit" class="js-start-game">Start Game</button>
  </section>`
    // submitIntroPage();
  
  renderQuizApp();
}

// function submitIntroPage() {
//       $('.js-quiz-intro').on("click", ".js-start-game", function (event) {
//         event.preventDefault();
//         console.log('submit works')
//       }
//         //
//       )
//     }

//     function handleQuestionsPage() {
//       //insert question & answers
//       $('.js-quiz-selection').on("click", ".js-final-answer", function (event) {
//         event.preventDefault();
//         console.log('handleQuestionsPage ran');
//         finalAnswerSubmit();
//       })
//       //STORE.questions.questionText/answers
//     }

//     function finalAnswerSubmit() {
//       console.log('handleRadioSubmit ran');

//     }

// function handleResultsPage() {
//       $('.js-quiz-feedback').on("click", ".js-next-question", function (event) {
//         event.preventDefault();
//         console.log('handleResultsPage ran');
//         //update X/Y correct answers
//         //see if there's another question or end of questions
//         //if () go to next question
//         // $('.js-quiz-selection').removeClass("hidden");
//         //else go to final page
//       })
//     }

//     function handleFinalPage() {

//       console.log('handleFinalPage ran');
//     //update X/Y correct answers
//     //reset button
//     }

// function handleResetButton() {
//       //goes back to start page
//       console.log('handleResetButton ran');
//     }

// Master function to handle all our other functions. Runs everything.
function handleQuizApp() {
      renderQuizApp();
      generateIntroPage();
  // handleIntroPage();
  // handleQuestionsPage();
  // handleResultsPage();
  // handleFinalPage();
  // handleResetButton();
}

$(handleQuizApp);

