
var body = document.body;
var container = document.createElement('div');
var h2El = document.createElement('h2');
var startQuizBtn = document.createElement('button');
var timerEl = document.getElementById('countdown');

// Beginning message
container.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
body.appendChild(container);

h2El.textContent = 'JavaScript Quiz! :D';
h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center; padding:40px;');
container.appendChild(h2El);

startQuizBtn.textContent = 'Start Quiz';
startQuizBtn.setAttribute('style', 'align:center; text-align:center;');
container.appendChild(startQuizBtn);

// 60 second Countdown
function countdown() {
    var timeLeft = 60;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);

            console.log("Timer Done");
        }
    }, 1000);
}

function startQuiz() {
    var questionsArray = [
        { q: 'Commonly used data types DO Not Include:', answer: 3, a: 'Strings', b: 'Booleans', c: 'Alerts', d: 'Numbers' },
        { q: 'The condition in an if / else statement is enclosed with:', answer: 3, a: 'Quotes', b: 'Curly Brackets', c: 'Parenthesis', d: 'Square Brackets' },
        { q: 'Arrays in JavaScript can be used to store:', answer: 4, a: 'Numbers & Strings', b: 'Other Arrays', c: 'Booleans', d: 'All of the above' },
        { q: 'When being assigned to variables, string values must be enclosed within:', answer: 3, a: 'Commas', b: 'Curly Brackets', c: 'Quotes', d: 'Parenthesis' },
        { q: 'A very useful tool used during development and debugging for printing content to the debugger is:', answer: 4, a: 'JavaScript', b: 'Terminal/Bash', c: 'For Loops', d: 'Console.log' }
    ];

    var correctAnswers = 0;

    countdown();

    container.removeChild(startQuizBtn);

    var question = document.createElement('div');
    var listEl = document.createElement('ol');
    var li1 = document.createElement('li');
    var btn1 = document.createElement('button');
    var li2 = document.createElement('li');
    var btn2 = document.createElement('button');
    var li3 = document.createElement('li');
    var btn3 = document.createElement('button');
    var li4 = document.createElement('li');
    var btn4 = document.createElement('button');

    question.setAttribute('style', 'font-size:20px;');
    listEl.setAttribute('style', 'padding:20px;');

    //for (var i = 0; i < questionsArray.length; i++) {
        var i = 2;

        var userAnswer;

        h2El.textContent = questionsArray[i].q;

        btn1.textContent = questionsArray[i].a;
        btn1.addEventListener('click', function () {
            userAnswer = 1;
            if ( userAnswer === questionsArray[i].answer ){
                correctAnswers++;
                console.log(correctAnswers);
                return;
            }
        });
        btn2.textContent = questionsArray[i].b;
        btn2.addEventListener('click', function () {
            userAnswer = 2;
            if ( userAnswer === questionsArray[i].answer ){
                correctAnswers++;
                console.log(correctAnswers);
                return;
            }
        });
        btn3.textContent = questionsArray[i].c;
        btn3.addEventListener('click', function () {
            userAnswer = 3;
            if ( userAnswer === questionsArray[i].answer ){
                correctAnswers++;
                console.log(correctAnswers);
                return;
            }
        });
        btn4.textContent = questionsArray[i].d;
        btn4.addEventListener('click', function () {
            userAnswer = 4;
            if ( userAnswer === questionsArray[i].answer ){
                correctAnswers++;
                console.log(correctAnswers);
                return;
            }
        });

        // console.log(userAnswer);

        // if ( userAnswer === questionsArray[i].answer ){
        //     correctAnswers++;
        //     console.log(correctAnswers);
        // }

    //}

    container.appendChild(question);
    question.appendChild(listEl);
    listEl.appendChild(li1)
    li1.appendChild(btn1);
    listEl.appendChild(li2)
    li2.appendChild(btn2);
    listEl.appendChild(li3)
    li3.appendChild(btn3);
    listEl.appendChild(li4)
    li4.appendChild(btn4);

}


startQuizBtn.onclick = startQuiz;