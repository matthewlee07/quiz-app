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
      }
    ]
  }


// a function to render/handle and display each page separately page.[1], page.2[], ...etc
function handleIntroPage(){
  console.log('handleDisplayPage ran');
  
}

function submitIntroPage(){
  $('.js-start-game').submit(function (event) {
    event.preventDefault();
  }
  )}

function handleQuestionsPage(){
  console.log('handleQuestionsPage ran');
  
}

function handleResultsPage(){
  console.log('handleResultsPage ran');
  
}

function handleFinalPage(){
  console.log('handleFinalPage ran');
  
}

// Master function to handle all our other functions. Runs everything. 
function handleQuizApp() {
  handleIntroPage();

}

$(handleQuizApp);


// const q = questions[0];
// q.answers
// q.answer[q.correctAnswer]