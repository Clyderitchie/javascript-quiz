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
var restartBtnEl = document.querySelector('#restart-btn');
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
});

// Restart button for once the user is finished with the quiz
restartBtnEl.addEventListener('click', function () {
    currentQuestionIndex = 0;
    score = 0;
    timeleft = 60;
    showQuestion();
    timer();
    displayEvent();
    restartBtnEl.classList.add('hidden');
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
                score++;
            } else if (event.target.textContent != questions[currentQuestionIndex].answer) {
                timeleft -= 15;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex === questions.length) {
                addHighscore();
            } else {
                showQuestion();
            }
        })

    }
}

// Sets displays to block or none depending on users actions
function displayEvent() {
    if (questionContainerEl.classList[0] === 'hidden') {
        questionContainerEl.classList.remove('hidden');
        startScreenEl.classList.add('hidden');
    } else {
        questionContainerEl.classList.add('hidden');
        startScreenEl.classList.remove('hidden');
    }
};

// Function for highscore list and users name 
function addHighscore() {
    var name = prompt('Enter your name: ');
    if (name) {
      var highscores = JSON.parse(localStorage.getItem('highscore')) || [];
      var newHighscore = {
        'score': score,
        'name': name
      };
      highscores.push(newHighscore);
      highscores.sort(function (a, b) {
        return b.score - a.score;
      });
      if (highscores.length > 5) {
        highscores = highscores.slice(0, 5);
      }
      localStorage.setItem('highscore', JSON.stringify(highscores));
      var highScoreList = document.querySelector('#highscore-list');
      highScoreList.textContent = '';
      for (var i = 0; i < highscores.length; i++) {
        var scoreItem = document.createElement('li');
        scoreItem.textContent = highscores[i].name + ': ' + highscores[i].score;
        highScoreList.appendChild(scoreItem);
      }
    }
    restartBtnEl.classList.remove('hidden');
  }