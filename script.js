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

// Render currentQuestionIndex once the user clicks the start button
startBtn.addEventListener('click', function (event) {
    showQuestion();
    //starting the timer
    intervalId = setInterval(function() {
        timeleft--;
        timeEl.textContent = timeleft;
    }, 100);
    
    if(timeleft === 0) {
        clearInterval(intervalId);
    }     
});


function showQuestion () {
    
    questionContainerEl.textContent = questions[currentQuestionIndex];
    // currentQuestionIndex = questions[0].choices;
    for (let i = 0; i < questions[0].choices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = questions[0].choices[i];
        questionContainerEl.append(choiceBtn);
        choiceBtn.addEventListener('click', function(event) {
            if (event.target.textContent === questions[0].answer){
                console.log('correct');
            }
            // console.log(event.target.textContent);
        })
    }
    
}






















































// Start button
// var startButton = document.querySelector('button');
// startButton.addEventListener('click', showNextQuestion);


// function toggleDisplay(event) {
//     var buttons = document.querySelectorAll('#question button');
//     buttons.forEach(function(button) {
//         button.style.display = 'none';
//     });
    
//     event.target.style.display = 'block';
// }

// showNextQuestion();