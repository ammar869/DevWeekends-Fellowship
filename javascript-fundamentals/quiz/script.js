// Quiz App - JavaScript Fundamentals Demo
// Demonstrates: Arrays of Objects, State Management, DOM Manipulation, Events

// Array of objects: Each quiz question is an object with properties
const questions = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: 0 // Index of correct option
    },
    {
        id: 2,
        question: "Which language runs in a web browser?",
        options: [
            "Java",
            "C",
            "Python",
            "JavaScript"
        ],
        correctAnswer: 3
    },
    {
        id: 3,
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "Which tag is used for the largest heading in HTML?",
        options: [
            "<h6>",
            "<h2>",
            "<h1>",
            "<heading>"
        ],
        correctAnswer: 2
    },
    {
        id: 5,
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Strong Question Language",
            "Simple Question Language",
            "Sub Query Language"
        ],
        correctAnswer: 0
    }
];

// State management variables
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Array to store user's answers

// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const questionCounter = document.getElementById('question-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const quizResults = document.getElementById('quiz-results');
const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

// Initialize the quiz
function initQuiz() {
    loadUserAnswers(); // Try to load previous answers
    renderQuestion();
    updateControls();
}

// Render the current question
function renderQuestion() {
    // Clear container
    quizContainer.innerHTML = '';
    
    const currentQuestion = questions[currentQuestionIndex];
    
    // Create question element
    const questionElement = document.createElement('h2');
    questionElement.className = 'question-text';
    questionElement.textContent = currentQuestion.question;
    quizContainer.appendChild(questionElement);
    
    // Create options list
    const optionsList = document.createElement('ul');
    optionsList.className = 'options-list';
    
    currentQuestion.options.forEach((option, index) => {
        const optionItem = document.createElement('li');
        optionItem.className = 'option-item';
        
        // Check if this option was previously selected
        const isSelected = userAnswers[currentQuestionIndex] === index;
        const isCorrect = currentQuestion.correctAnswer === index;
        const hasBeenAnswered = userAnswers[currentQuestionIndex] !== undefined;
        
        if (isSelected) {
            optionItem.classList.add('selected');
        }
        if (hasBeenAnswered && !isSelected) {
            optionItem.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        
        optionItem.innerHTML = `
            <input type="radio" name="quiz-option" class="option-input" 
                   ${isSelected ? 'checked' : ''} ${hasBeenAnswered ? 'disabled' : ''} value="${index}">
            <label class="option-label">${option}</label>
        `;
        
        // Add click handler only if question hasn't been answered yet
        if (!hasBeenAnswered) {
            optionItem.addEventListener('click', function() {
                const radio = this.querySelector('.option-input');
                radio.checked = true;
                selectOption(index);
            });
        }
        
        optionsList.appendChild(optionItem);
    });
    
    quizContainer.appendChild(optionsList);
}

// Select an option and store the answer
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    renderQuestion(); // Re-render to show selection
    updateControls();
}

// Update navigation buttons
function updateControls() {
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Next button
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = 'Finish Quiz';
    } else {
        nextBtn.textContent = 'Next';
    }
    
    // Question counter
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    
    // Show results if quiz is complete
    if (currentQuestionIndex === questions.length && userAnswers.length === questions.length) {
        showResults();
    }
}

// Show quiz results
function showResults() {
    // Calculate score
    score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    // Hide quiz container, show results
    quizContainer.style.display = 'none';
    quizControls.style.display = 'none';
    quizResults.classList.remove('hidden');
    finalScore.textContent = `${score} out of ${questions.length}`;
}

// Navigate to previous question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateControls();
    }
}

// Navigate to next question
function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        updateControls();
    } else {
        // Finish quiz
        userAnswers[currentQuestionIndex] = userAnswers[currentQuestionIndex] || 0;
        showResults();
    }
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    localStorage.removeItem('quizState'); // Clear saved state
    quizContainer.style.display = 'block';
    document.getElementById('quiz-controls').style.display = 'flex';
    quizResults.classList.add('hidden');
    renderQuestion();
    updateControls();
}

// Save quiz state to localStorage
function saveQuizState() {
    const state = {
        currentQuestionIndex: currentQuestionIndex,
        userAnswers: userAnswers
    };
    localStorage.setItem('quizState', JSON.stringify(state));
}

// Load quiz state from localStorage
function loadUserAnswers() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        const state = JSON.parse(savedState);
        currentQuestionIndex = state.currentQuestionIndex;
        userAnswers = state.userAnswers;
    }
}

// Event listeners
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Auto-save state when user answers
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('option-input')) {
        saveQuizState();
    }
});

// Initialize quiz when page loads
initQuiz();

// Concept Explanation:
// 1. ARRAYS OF OBJECTS: questions array contains objects, each representing a quiz question
// 2. OBJECT PROPERTY ACCESS: question.question, question.options, question.correctAnswer
// 3. STATE MANAGEMENT: currentQuestionIndex, score, userAnswers track application state
// 4. DOM MANIPULATION: createElement, appendChild, innerHTML, querySelector
// 5. EVENTS: addEventListener for clicks and changes
// 6. ARRAY METHODS: forEach for iteration, conditional logic for state updates
// 7. CONDITIONAL LOGIC: Complex state management for quiz flow
// 8. LOCALSTORAGE: Persist quiz progress between page reloads