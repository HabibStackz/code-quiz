
var startButton = document.getElementById('start');
var startScreen = document.getElementById('start-screen')
var bodyEl = document.querySelector('body')
console.log(startButton);

function startQuiz() {
    startScreen.style.display = 'none';
    var questions = document.createElement('div')
    questions.setAttribute("class", "wrapper")
    questions.textContent = "these questions"
    bodyEl.append(questions)
    console.log(questions);

}

startButton.addEventListener('click', startQuiz);
