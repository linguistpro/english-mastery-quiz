const questions = [
{
question:"Choose the correct sentence.",
options:[
"He go to school every day.",
"He goes to school every day.",
"He going to school every day.",
"He gone to school every day."
],
answer:1
},
{
question:"What is the synonym of Happy?",
options:["Sad","Joyful","Weak","Hard"],
answer:1
},
{
question:"Choose the correct article.",
options:[
"I have a apple.",
"I have an apple.",
"I have the apple.",
"I have apple."
],
answer:1
},
{
question:"What is the opposite of Fast?",
options:["Quick","Rapid","Slow","Speed"],
answer:2
},
{
question:"She ____ reading now.",
options:["is","are","am","be"],
answer:0
},
{
question:"Choose the correct spelling.",
options:[
"Beautifull",
"Beautiful",
"Beutiful",
"Beautifal"
],
answer:1
},
{
question:"Which word is a noun?",
options:[
"Run",
"Happiness",
"Quickly",
"Blue"
],
answer:1
},
{
question:"I ____ my homework yesterday.",
options:[
"do",
"did",
"done",
"doing"
],
answer:1
},
{
question:"Which is a verb?",
options:[
"Chair",
"Table",
"Eat",
"Book"
],
answer:2
},
{
question:"Choose the correct sentence.",
options:[
"They was playing.",
"They were playing.",
"They is playing.",
"They be playing."
],
answer:1
}
];

let currentQuestion=0;
let score=0;
let selected=-1;

const question=document.getElementById("question");
const options=document.getElementById("options");
const number=document.getElementById("questionNumber");
const progress=document.getElementById("progress");

loadQuestion();

function loadQuestion(){

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
