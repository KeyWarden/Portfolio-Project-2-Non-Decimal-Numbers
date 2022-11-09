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

let question = 0;
let answered = 0;
let score = 0;
let quizTitle = document.getElementById('quizTitle')
let quizText = document.getElementById('quizText')
let testButton = document.getElementById('testButton')
let quizAnswer = document.getElementById('quizAnswer')
let scoreText = document.getElementById('score')
let answerB1 = '010001';
let answerB2 = '31';
let answer1B3 = '36';
let answer2B3 = '100100';
let answerH1 = '1728';
let answerH2 = '0001CA';
let answer1H3 = '002AA9';
let answer2H3 = '10921';
let answer1C = '00003E';
let answer2C = '111110';

function playQuiz() {
    if (question === 0) {
        quizTitle.innerHTML = `Binary 1`;
        quizText.innerHTML = `What is 17 in binary?<br><br>Enter your answer below in 6-digits of binary.`;
        testButton.innerHTML = `Submit`;
        quizAnswer.style.display = 'block';
        quizAnswer.style.margin = '0 auto';
        question++
    } else if (question === 1 && quizAnswer.value === answerB1 && answered < 1) {
        quizTitle.innerHTML = `Correct!`;
        quizText.innerHTML = `Congratulations!<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        score++
        scoreText.innerHTML = `Current Score: ${score}/7`
        answered++
    } else if (question === 1 && quizAnswer.value != answerB1 && answered < 1) {
        quizTitle.innerHTML = `Incorrect!`;
        quizText.innerHTML = `Unfortunately that was the wrong answer. The correct answer is ${answerB1}.<br><br>Remember! Each digit in binary represents a power of 2, ascending from right to left.<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        answered++
    } else if (answered === 1 && question === 1) {
        quizTitle.innerHTML = `Binary 2`;
        quizText.innerHTML = `What is 000110 + 011001?<br><br>Enter your answer below in decimal.`;
        testButton.innerHTML = `Submit`;
        quizAnswer.value = ''
        quizAnswer.style.display = 'block';
        quizAnswer.style.margin = '0 auto';
        question++
    } else if (question === 2 && quizAnswer.value === answerB2 && answered < 2) {
        quizTitle.innerHTML = `Correct!`;
        quizText.innerHTML = `Congratulations!<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        score++
        scoreText.innerHTML = `Current Score: ${score}/7`
        answered++
    } else if (question === 2 && quizAnswer.value != answerB2 && answered < 2) {
        quizTitle.innerHTML = `Incorrect!`;
        quizText.innerHTML = `Unfortunately that was the wrong answer. The correct answer is ${answerB2}.<br><br>Remember! Each digit in binary represents a power of 2, ascending from right to left.<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        answered++
    } else if (answered === 2 && question === 2) {
        quizTitle.innerHTML = `Binary 3`;
        quizText.innerHTML = `What do you get when you multiply 000110 by 6?<br><br>Enter your answer below in either 6-digits of binary or in decimal.`;
        testButton.innerHTML = `Submit`;
        quizAnswer.value = ''
        quizAnswer.style.display = 'block';
        quizAnswer.style.margin = '0 auto';
        question++
    } else if (question === 3 && (quizAnswer.value === answer1B3 || quizAnswer.value === answer2B3) && answered < 3) {
        quizTitle.innerHTML = `Correct!`;
        quizText.innerHTML = `Congratulations!<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        score++
        scoreText.innerHTML = `Current Score: ${score}/7`
        answered++
    } else if (question === 3 && (quizAnswer.value != answer1B3 && quizAnswer.value != answer2B3) && answered < 3) {
        quizTitle.innerHTML = `Incorrect!`;
        quizText.innerHTML = `Unfortunately that was a wrong answer. The correct answer would be either ${answer1B3} or ${answer2B3}.<br><br>Remember! Each digit in binary represents a power of 2, ascending from right to left.<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        answered++
    } else if (answered === 3 && question === 3) {
        quizTitle.innerHTML = `Hexadecimal 1`;
        quizText.innerHTML = `What is 0006C0 in decimal?<br><br>Enter your answer below in decimal without including commas.`;
        testButton.innerHTML = `Submit`;
        quizAnswer.value = ''
        quizAnswer.style.display = 'block';
        quizAnswer.style.margin = '0 auto';
        question++
    } else if (question === 4 && quizAnswer.value === answerH1 && answered < 4) {
        quizTitle.innerHTML = `Correct!`;
        quizText.innerHTML = `Congratulations!<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        score++
        scoreText.innerHTML = `Current Score: ${score}/7`
        answered++
    } else if (question === 4 && quizAnswer.value != answerH1 && answered < 4) {
        quizTitle.innerHTML = `Incorrect!`;
        quizText.innerHTML = `Unfortunately that was the wrong answer. The correct answer is ${answerH1}.<br><br>Remember! Each digit in hexadecimal represents a power of 16, ascending from right to left.<br>Also, letters A through F are used to represent numbers 10 through 15 respectively.<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        answered++
    } else if (answered === 4 && question === 4) {
        quizTitle.innerHTML = `Hexadecimal 2`;
        quizText.innerHTML = `What is 700 - 242?<br><br>Enter your answer below in 6-digits of hexadecimal.`;
        testButton.innerHTML = `Submit`;
        quizAnswer.value = ''
        quizAnswer.style.display = 'block';
        quizAnswer.style.margin = '0 auto';
        question++
    } else if (question === 5 && quizAnswer.value.toUpperCase() === answerH2 && answered < 5) {
        quizTitle.innerHTML = `Correct!`;
        quizText.innerHTML = `Congratulations!<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        score++
        scoreText.innerHTML = `Current Score: ${score}/7`
        answered++
    } else if (question === 5 && quizAnswer.value.toUpperCase() != answerH2 && answered < 5) {
        quizTitle.innerHTML = `Incorrect!`;
        quizText.innerHTML = `Unfortunately that was the wrong answer. The correct answer is ${answerH2}.<br><br>Remember! Each digit in hexadecimal represents a power of 16, ascending from right to left.<br>Also, letters A through F are used to represent numbers 10 through 15 respectively.<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        answered++
    } else if (answered === 5 && question === 5) {
        quizTitle.innerHTML = `Hexadecimal 3`;
        quizText.innerHTML = `What do you get when you divide 007FFB by 3?<br><br>Enter your answer below in either 6-digits of hexadecimal or in decimal.`;
        testButton.innerHTML = `Submit`;
        quizAnswer.value = ''
        quizAnswer.style.display = 'block';
        quizAnswer.style.margin = '0 auto';
        question++
    } else if (question === 6 && (quizAnswer.value.toUpperCase() === answer1H3 || quizAnswer.value === answer2H3) && answered < 6) {
        quizTitle.innerHTML = `Correct!`;
        quizText.innerHTML = `Congratulations!<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        score++
        scoreText.innerHTML = `Current Score: ${score}/7`
        answered++
    } else if (question === 6 && (quizAnswer.value.toUpperCase() != answer1H3 && quizAnswer.value != answer2H3) && answered < 6) {
        quizTitle.innerHTML = `Incorrect!`;
        quizText.innerHTML = `Unfortunately that was a wrong answer. The correct answer would be either ${answer1H3} or ${answer2H3}.<br><br>Remember! Each digit in hexadecimal represents a power of 16, ascending from right to left.<br>Also, letters A through F are used to represent numbers 10 through 15 respectively.<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        answered++
    } else if (answered === 6 && question === 6) {
        quizTitle.innerHTML = `Binary and Hexadecimal`;
        quizText.innerHTML = `What do you get when you take the binary number 011110 and add the hexadecimal number 000020 to it?<br><br>Enter your answer below in 6-digits of either hexadecimal or binary.`;
        testButton.innerHTML = `Submit`;
        quizAnswer.value = ''
        quizAnswer.style.display = 'block';
        quizAnswer.style.margin = '0 auto';
        question++
    } else if (question === 7 && (quizAnswer.value.toUpperCase() === answer1C || quizAnswer.value === answer2C) && answered < 7) {
        quizTitle.innerHTML = `Correct!`;
        quizText.innerHTML = `Congratulations!<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        score++
        scoreText.innerHTML = `Current Score: ${score}/7`
        answered++
    } else if (question === 7 && (quizAnswer.value.toUpperCase() != answer1C && quizAnswer.value != answer2C) && answered < 7) {
        quizTitle.innerHTML = `Incorrect!`;
        quizText.innerHTML = `Unfortunately that was a wrong answer. The correct answer would be either ${answer1C} or ${answer2C}.<br><br>Remember! Each digit in binary represents a power of 2, ascending from right to left.<br><br>Remember! Each digit in hexadecimal represents a power of 16, ascending from right to left.<br>Also, letters A through F are used to represent numbers 10 through 15 respectively.<br><br>Please click the button below to continue.`;
        testButton.innerHTML = `Next`;
        quizAnswer.style.display = 'none';
        answered++
    } else if (answered === 7) {
        quizTitle.innerHTML = `Congratulations!`;
        quizText.innerHTML = `You have now completed the quiz, and earned a final score of ${score}/7!<br><br>Thank you so much for participating. If you would like to record your score for posterity, as well as give any feedback on this site you may have, you can do so below your score.<br><br>You can also see feedback provided by other users.<br><br>Thanks once more for using our site! Have a wonderful day.`;
        testButton.style.display = 'none';
    }
}

testButton.addEventListener('click', playQuiz)