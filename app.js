/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: `How many "Earth"s would fit inside of Jupiter?`,
      answers: [
        '9',
        '16',
        '367',
        '1300'
      ],
      correctAnswer: '1300'
    },
    {
      question: `What does space sound like?`,
      answers: [
        'White noise',
        'Nothing',
        'Windy',
        'Static'
      ],
      correctAnswer: 'Nothing'
    },
    {
      question: `Is the Earth's rotation changing?`,
      answers: [
        'Yes, it\'s slowing down',
        'Yes, it\'s speeding up',
        'No',
        'The Earth doesn\'t rotate'
      ],
      correctAnswer: 'Yes, it\'s slowing down'
    },
    {
      question: `At night, which star is closest to us?`,
      answers: [
        'The North Star',
        'The Sun',
        'Orion',
        'Sirius'
      ],
      correctAnswer: 'The Sun'
    },
    {
      question: `One day on Venus is equal to how many Earth days?`,
      answers: [
        '1 day',
        '12 days',
        '87 days',
        '243 days'
      ],
      correctAnswer: '243 days'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
const renderQuiz = () => {
  //listen for click on button to start quiz
  console.log("renderQuiz ran")
  // hide start button
  // call function to:
  // list first "question" in an HTML format on page(questions[0]?)
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

const setUpQuiz = () => {
  renderQuiz();

}

setUpQuiz();