const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the capital of North Korea?',
    answers: [
      { text: 'Pyong Yong', correct: true },
      { text: 'Seoul', correct: false },
      { text: 'Tokyo', correct: false },
      { text: 'Bangkok', correct: false }
    ]
  },
  {
    question: 'OS computer abbreviation usually means ?',
    answers: [
      { text: 'Order of Significance', correct: false },
      { text: 'Open Software', correct: false },
      { text: 'Operating System', correct: true },
      { text: 'Optical Sensor', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Noo', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2 * 6 ?',
    answers: [
      { text: '42', correct: false },
      { text: '48', correct: true },
      { text: '46', correct: false },
      { text: '54', correct: false }
    ]
  },
  {
    question: 'Which is the fastest racquet sport ?',
    answers: [
      { text: 'squash', correct: false },
      { text: 'tennis', correct: false },
      { text: 'table tennis', correct: false },
      { text: 'badminton', correct: true }
    ]
  },
  {
    question: 'Which item is good for your gut?',
    answers: [
      { text: 'Alcohol', correct: false },
      { text: 'Processed foods', correct: false },
      { text: 'Carbonated drinks', correct: false },
      { text: 'Organic foods', correct: true }
    ]
  },
  {
    question: 'Who is the President of India',
    answers: [
      { text: 'Mamta Banerjee', correct: false },
      { text: 'Narendra Modi', correct: false },
      { text: 'Muthuvel karunanidhi Stalin', correct: false },
      { text: 'Draupathi Murmu', correct: true }
    ]
  },
  {
    question: 'Which country sucessfully landed their space craft on the South Pole of the Moon ?',
    answers: [
      { text: 'China', correct: false },
      { text: 'USA', correct: false },
      { text: 'Russia', correct: false },
      { text: 'India', correct: true }
    ]
  },
  {
    question: 'Which of the below travels faster than sound?',
    answers: [
      { text: 'fire', correct: false },
      { text: 'air', correct: false },
      { text: 'water', correct: false },
      { text: 'light', correct: true }
    ]
  },
  {
    question: 'Which of the below is an interpretted language ?',
    answers: [
      { text: 'Java', correct: false },
      { text: 'C', correct: false },
      { text: 'C++', correct: false },
      { text: 'Javascript', correct: true }
    ]
  },
]