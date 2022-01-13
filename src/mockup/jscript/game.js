const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is a correct syntax to output "Hello World" in Python?',
        choice1: 'print("Hello World")',
        choice2: 'echo "Hello World"',
        choice3: 'echo("Hello World")',
        choice4: 'p("Hello World")',
        answer: 1,
    },

    {
        question: 'What is the output of the following code? \n\np, q, r = 10, 20 ,30 \nprint(p, q, r)',
        choice1: '10 20',
        choice2: '10 20 30',
        choice3: '10 30',
        choice4: 'Error: invalid syntax', 
        answer: 2,
    },

    {
        question: 'What is the output of the following code? \n\nsampleList = ["Jon", "Kelly", "Jessa"] \nsampleList.append("Scott") \nprint(sampleList)',
        choice1: 'The program executed with errors',
        choice2: '["Jon", "Kelly", "Scott", "Jessa"]',
        choice3: '["Jon", "Kelly", "Jessa", "Scott"]',
        choice4: '["Jon", "Scott", "Kelly", "Jessa"]', 
        answer: 3,
    },

    {
        question: 'What is the output of the following code? \n\nvar= "James Bond" \nprint(var[2::-1])',
        choice1: 'Jam',
        choice2: 'dno',
        choice3: 'maJ',
        choice4: 'dnoB semaJ', 
        answer: 3,
    },

    {
        question: 'What is the output of the following code? \n\nvar1 = 1 \nvar2 = 2 \nvar3 = "3" \nprint(var + var2 + var3)',
        choice1: '6',
        choice2: '33',
        choice3: '123',
        choice4: 'Error. Mixing operators between numbers and strings are not supported', 
        answer: 4,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter ++ 
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return 

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
        'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 800)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score

}

startGame()