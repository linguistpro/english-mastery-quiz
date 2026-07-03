let currentQuestion=0;
let score=0;
let timeLeft = 30;
let timer;
let selected=-1;

const question=document.getElementById("question");
const options=document.getElementById("options");
const number=document.getElementById("questionNumber");
const progress=document.getElementById("progress");

loadQuestion();

function loadQuestion(){
startTimer();
selected=-1;

question.innerHTML=questions[currentQuestion].question;

number.innerHTML=`Question ${currentQuestion+1} / ${questions.length}`;

progress.style.width=((currentQuestion+1)/questions.length*100)+"%";

options.innerHTML="";

questions[currentQuestion].options.forEach((item,index)=>{

const div=document.createElement("div");

div.className="option";

div.innerHTML=item;

div.onclick=function(){

document.querySelectorAll(".option").forEach(o=>o.style.background="#eef4ff");

div.style.background="#2563eb";

div.style.color="white";

selected=index;

}

options.appendChild(div);

});

}

function nextQuestion(){

if(selected==-1){

alert("Please select an answer.");

return;

}

if(selected===questions[currentQuestion].answer){

score++;

}

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

localStorage.setItem("score",score);

window.location.href="result.html";

}

}
function startTimer(){

clearInterval(timer);

timeLeft=30;

document.getElementById("timer").innerHTML=timeLeft+" sec";

timer=setInterval(()=>{

timeLeft--;

document.getElementById("timer").innerHTML=timeLeft+" sec";

if(timeLeft<=10){

document.getElementById("timer").style.color="red";

}

if(timeLeft<=0){

clearInterval(timer);

nextQuestion();

}

},1000);

}
