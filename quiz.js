let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;
let selected = -1;

const question = document.getElementById("question");
const options = document.getElementById("options");
const number = document.getElementById("questionNumber");
const progress = document.getElementById("progress");

loadQuestion();

function loadQuestion() {

    clearInterval(timer);

    selected = -1;

    const exp = document.getElementById("explanation");
    if (exp) {
        exp.style.display = "none";
        exp.innerHTML = "";
    }

    question.innerHTML = questions[currentQuestion].question;

    number.innerHTML = `Question ${currentQuestion + 1} / ${questions.length}`;

    progress.style.width =
        ((currentQuestion + 1) / questions.length * 100) + "%";

    options.innerHTML = "";

    questions[currentQuestion].options.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "option";

        div.innerHTML = item;

        div.onclick = function () {

            if (selected !== -1) return;

            selected = index;

            clearInterval(timer);

            document.querySelectorAll(".option").forEach(opt => {
                opt.style.pointerEvents = "none";
            });

            if (index === questions[currentQuestion].answer) {

                div.style.background = "green";
                div.style.color = "white";

                score++;

            } else {

                div.style.background = "red";
                div.style.color = "white";

                const correct =
                    document.querySelectorAll(".option")[questions[currentQuestion].answer];

                correct.style.background = "green";
                correct.style.color = "white";
            }

            if (exp) {
                exp.style.display = "block";
                exp.innerHTML =
                    questions[currentQuestion].explanation || "";
            }

            setTimeout(() => {
                nextQuestion();
            }, 2000);

        };

        options.appendChild(div);

    });

    startTimer();

}

function nextQuestion() {

    clearInterval(timer);

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        localStorage.setItem("score", score);

        window.location.href = "result.html";

    }

}

function startTimer() {

    timeLeft = 30;

    const timerElement = document.getElementById("timer");

    timerElement.style.color = "black";

    timerElement.innerHTML = timeLeft + " sec";

    timer = setInterval(() => {

        timeLeft--;

        timerElement.innerHTML = timeLeft + " sec";

        if (timeLeft <= 10) {
            timerElement.style.color = "red";
        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            currentQuestion++;

            if (currentQuestion < questions.length) {

                loadQuestion();

            } else {

                localStorage.setItem("score", score);

                window.location.href = "result.html";

            }

        }

    }, 1000);

}
