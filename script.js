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

function showQuestions () {
    var output = [];
    var answer;

    for (var i=0; i < questions.length; i++) {
        answer = [];

        for (choices in questions[i].answer) {
            
        }
    }
}













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

