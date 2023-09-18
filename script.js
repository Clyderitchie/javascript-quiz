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
var highscoreEl = document.querySelector('#highscore');
var currentQuestionIndex = 0;
var timeleft = 60;
var intervalId;
var score = 0;

// Render currentQuestionIndex once the user clicks the start button
startBtn.addEventListener('click', function () {
    showQuestion();
    timer();
    displayEvent();
    // addHighscore(score);

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
    }, 1000);


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
            if (currentQuestionIndex === questions.length) {
                localStorage.setItem('score', score);
                // addHighscore(score);
            } else {
                showQuestion();
            }
        })

    }
}

// Function for new question
// function nextQuestion () {
//     choiceBtn.addEventListener('click', function(event) {
//         if (event.target.textContent === questions[currentQuestionIndex].answer){
//             score++;
//             console.log('correct');
//         } else if (event.target.textContent != questions[currentQuestionIndex].answer) {
//             timeleft -= 15;
//             console.log('wrong answer');
//         } else if (currentQuestionIndex === questions.length) {
//             localStorage.setItem('score', score);
//         } else {
//             nextQuestion();
//         }
//         currentQuestionIndex++;
//     })
// }


// Sets displays to block or none depending on users actions
function displayEvent() {
    if (questionContainerEl.classList[0] === 'hidden') {
        questionContainerEl.classList.remove('hidden');
        startScreenEl.classList.add('hidden');
    } else {
        questionContainerEl.classList.add('hidden');
        startScreenEl.classList.remove('hidden');
    }
    console.log(questionContainerEl.classList);
};

// Function for highscore list
function addHighscore(score) {
    var highscores = JSON.parse(localStorage.getItem('highscore')) || [];

    var newHighscore = {
        'score': score,
        'name': prompt('Enter your name: ')
    };

    highscores.push(newHighscore);

    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    if (highscores.length > 5) {
        highscores = highscores.slice(0, 5);
    };

    localStorage.setItem('highscore', JSON.stringify(highscores));

    var highScoreList = document.querySelector('#highscore-list');
    highScoreList.textContent = ' ';

    for (var i = 0; i < highscores.length; i++) {
        var scoreItem = document.createElement('li');
        scoreItem.textContent = highscores[i].score;
        highScoreList.appendChild(scoreItem);
    };
    highscoreEl.classList.remove('hidden');
};
addHighscore(score);