//stores an array of questions in a var quizData
const quizData = [
    {
        question: 'Q1.How many countries are there in Europe?',
        a: '216',
        b: '195',
        c: '81',
        d: '336',
        correct: 'b',
    }, {
        question: 'Q2.What programming language is necessary for web development?',
        a: 'Swift',
        b: 'C++',
        c: 'JavaScript',
        d: 'Python',
        correct: 'c',
    }, {
        question: 'What does JSON stand for?',
        a: 'JavScript Omssion Nexus',
        b: 'Java Syntax Orientated Nodes',
        c: 'JavaScript Object Notation',
        d: 'Joma Swift & Orientated Notes',
        correct: 'c',
    }, {
        question: 'What year was JavaScript launched?',
        a: '1982',
        b: '2001',
        c: '1995',
        d: '1999',
        correct: 'c',
    }, {
        question: 'How many states are in America?',
        a: '49',
        b: '36',
        c: '50',
        d: '52',
        correct: 'c',
    }, 
];

//uses dom selector to get html elements
const quiz = document.getElementById("quiz");

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentQuizData  = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked)   {
            answer = answerEl.id;
        }
    });

    return answer;
}
//This is to deselect the checked radio for the next question
    function deselectAnswers()  {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });

    }

//When submit button is clicked load next quiz question.
submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    
    //counts up the score every time correct answer is given
    if (answer) {
        if (answer === quizData[currentQuiz].correct)   {
            score++;
        }   
            //adds 1 to the next question variable
            currentQuiz++;
    } if (currentQuiz < quizData.length)    {
        //function to load the quiz
         loadQuiz();
    } else {
        //string interpolation to calculate score/total scores
        //onclick refreshes the browser
        quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} questions correct.</h2> <button onclick="location.reload()">Start again</button>`;
    }
    
   
});