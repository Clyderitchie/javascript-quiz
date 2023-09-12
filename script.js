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

    var choices = questions[currentQuestionIndex].choices;
    for (var i = 0; i < choices.length; i++) {
        var choiceButton = document.createElement('button');
        choiceButton.textContent = choices[i];
        choiceButton.addEventListener('click', toggleDisplay);
        questionList.appendChild(choiceButton);
    }

    questionItem.style.display = 'block';

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        console.log('hello');
    }
    
}

function toggleDisplay(event) {
    var buttons = document.querySelectorAll('#question button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });
    
    event.target.style.display = 'block';
}

showNextQuestion();