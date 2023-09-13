// Global variables
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
var timeEl = document.querySelector('#timer-left');
var startScreenEl = document.querySelector('#start-screen');
var questionContainerEl = document.querySelector('#question-container');
var startBtn = document.querySelector('#start-btn');
var currentQuestionIndex = 0;
var timeleft = 60;
var intervalId;
var score = 0;

// Render currentQuestionIndex once the user clicks the start button
startBtn.addEventListener('click', function () {
    showQuestion();
    timer();
    displayEvent();

});

// Timer function
function timer() {
    //starting the timer
    intervalId = setInterval(function () {
        timeleft--;
        timeEl.textContent = timeleft;
        if (timeleft <= 0) {
            clearInterval(intervalId);
        }
    }, 10);

   
}

// function to show current question and choices for that question
function showQuestion() {
    questionContainerEl.textContent = questions[currentQuestionIndex].title;
    for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = questions[currentQuestionIndex].choices[i];
        questionContainerEl.append(choiceBtn);
        choiceBtn.addEventListener('click', function (event) {
            if (event.target.textContent === questions[currentQuestionIndex].answer) {
                console.log('correct');
                score++;
            } else if (event.target.textContent != questions[currentQuestionIndex].answer) {
                timeleft -= 15;
                console.log('wrong answer');
            }
            currentQuestionIndex++;
            showQuestion();
        })
    }
}

// Sets displays to block or none depending on users actions
function displayEvent() {
    // if (questionContainerEl.style.display === 'none' && startScreenEl.style.display === 'block') {
    //     questionContainerEl.style.display = 'block';
    //     startScreenEl.style.display = 'none';
    // } else {
    //     startScreenEl.style.display = 'block';
    //     questionContainerEl.style.display = 'none';
    // }

    if (questionContainerEl.classList[0] === 'hidden') {
        questionContainerEl.classList.remove('hidden');
        startScreenEl.classList.add('hidden');
    } else {
        questionContainerEl.classList.add('hidden');
        startScreenEl.classList.remove('hidden');
    }

    console.log(questionContainerEl.classList);
}