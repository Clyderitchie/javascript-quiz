// Global variables
// var question = document.querySelector('#question');

// toggle diplay between none and block for the questions
// question.addEventListener('click', function(){
//     var targetElement = document.querySelector('li');
//     var displayValue = window.getComputedStyle(targetElement).getPropertyValue('display');

//     if (displayValue === none) {
//         targetElement.style.display = 'block';
//     } else {
//         targetElement.style.display = 'none';
//     }
// });

// function showQuestions () {
//     var output = [];
//     var answer;

//     for (var i=0; i < questions.length; i++) {
//         answer = [];

//         for (choices in questions[i].answer) {

//         }
//     }
// }





// Stores all questions, choices, and correct answers 
var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
        ],
        answer: 'all of the above',
    },
    {
        title:
            'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title:
            'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
];

var currentQuestionIndex = 0;

// Start button
var startButton = document.querySelector('button');
startButton.addEventListener('click', showNextQuestion);

// Showing questions
function showNextQuestion() {
    var questionList = document.querySelector('#question ol');
    questionList.innerHTML = ' ';

    var questionItem = document.createElement('li');
    questionItem.textContent = questions[currentQuestionIndex].title;

    questionList.appendChild(questionItem);

    if (currentQuestionIndex === 0) {
        questionItem.style.display = 'block';
    } else if (currentQuestionIndex === 1) {
        questionItem.style.display = 'block';
    } else if (currentQuestionIndex === 2) {
        questionItem.style.display = 'block';
    } else if (currentQuestionIndex === 3) {
        questionItem.style.display = 'block';
    } else if (currentQuestionIndex === 4) {
        questionItem.style.display = 'block';
    } else {
        questionItem.style.display = 'none';
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        console.log('hello');
    }
}

showNextQuestion();