const score = Number(localStorage.getItem("score")) || 0;
const total = 20;

document.getElementById("score").innerHTML = score + "/" + total;

const xp = score * 10;
document.getElementById("xp").innerHTML = "⭐ XP : " + xp;

const level = Math.floor(xp / 100) + 1;
document.getElementById("level").innerHTML = "🏆 Level : " + level;

const percent = (score / total) * 100;

document.getElementById("progressBar").style.width = percent + "%";

let grade = "";

if(percent>=90){
grade="🏅 Grade A+";
}
else if(percent>=80){
grade="🥇 Grade A";
}
else if(percent>=70){
grade="🥈 Grade B";
}
else if(percent>=60){
grade="🥉 Grade C";
}
else{
grade="📚 Need More Practice";
}

document.getElementById("grade").innerHTML=grade;
