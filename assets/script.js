let quizButton = document.getElementById('quizButton')
let infoButton = document.getElementById('infoButton')
let homeNav = document.getElementById('homeNav')
let quizNav = document.getElementById('quizNav')
let infoNav = document.getElementById('infoNav')
let home = document.getElementById('home')
let quiz = document.getElementById('quiz')
let info = document.getElementById('info')



function openHome() {
    home.style.display = 'block';
    quiz.style.display = 'none';
    info.style.display = 'none';
}

function openQuiz() {
    home.style.display = 'none';
    quiz.style.display = 'block';
    info.style.display = 'none';
}

function openInfo() {
    home.style.display = 'none';
    quiz.style.display = 'none';
    info.style.display = 'block';
}

homeNav.addEventListener('click', openHome)
quizNav.addEventListener('click', openQuiz)
infoNav.addEventListener('click', openInfo)
quizButton.addEventListener('click', openQuiz)
infoButton.addEventListener('click', openInfo)