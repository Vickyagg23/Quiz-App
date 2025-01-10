const quizData = [
    {
        question: "How many bones are in the body of an adult human?",
        options: ["330", "206", "207", "210"],
        answer: "206",
    },

    {
        question: "What is the official currency of Japan?",
        options: ["Won", "Yuan", "Yen", "Dollars"],
        answer: "Yen",
    },

    {
        question: "How many times has Brazil won the World Cup?",
        options: ["3", "5", "7", "4"],
        answer: "5",
    },
    
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "120°C", "150°C"],
        answer: "100°C",
    },

    {
        question: "What is the largest lake in the world?",
        options: ["Caspian Sea", "Baikal", "Lake Superior", "ntario"],
        answer: "Baikal",
    },

    {
        question: "Which planet in the solar system is known as the “Red Planet”?",
        options: ["Venus", "Earth", "Mars", "upiter"],
        answer: "Mars",

    },

    {
        question: " Which river is the longest in the world?",
        options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
        answer: "Nile",
    },

    {
        question: "Which vitamin is often referred to as the “sunshine vitamin”?",
        options: ["Vitamin A", "Vitamin B", "Vitamin D", "Vitamin C"],
        answer: "Vitamin D",
    },

    {
        question: "Which country is considered the birthplace of the Olympic Games?",
        options: ["Greece", "Rome", "China", "Egypt"],
        answer: "Greece",
    },

    {
        question: "Which of these animals cannot jump?",
        options: ["Cat", "Snake", "Horse", "kangaroo"],
        answer: "Snake",
    },

];

const WINNING_SCORE = 6; // Max. Threshold Value for winning
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const resultMessageElement = document.getElementById("result-message");
const resultGifElement = document.getElementById("result-gif");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => handleAnswer(option);
        optionsElement.appendChild(button);
    });
}

function handleAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
        score++;
    }

    if (currentQuestionIndex + 1 < quizData.length) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quiz").classList.add("hidden");
    resultElement.classList.remove("hidden");

    if (score >= WINNING_SCORE) {
        resultMessageElement.textContent = "Congratulations! You're a Winner! 🎉";
        resultGifElement.src = "https://media.giphy.com/media/26u4nJPf0JtQPdStq/giphy.gif";
    } else {
        resultMessageElement.textContent = "Better Luck Next Time! 😔";
        resultGifElement.src = "https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").classList.remove("hidden");
    resultElement.classList.add("hidden");
    loadQuestion();
}

loadQuestion();