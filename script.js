const ADMIN_PASS="xmx123";

/* ===== BACKGROUND ===== */
const c=document.getElementById("bg");
const ctx=c.getContext("2d");
c.width=innerWidth;
c.height=innerHeight;

let dots=[];
for(let i=0;i<60;i++){
dots.push({x:Math.random()*c.width,y:Math.random()*c.height});
}

function draw(){
ctx.clearRect(0,0,c.width,c.height);
for(let d of dots){
ctx.fillStyle="#7CFFB2";
ctx.beginPath();
ctx.arc(d.x,d.y,2,0,Math.PI*2);
ctx.fill();
d.y+=0.3;
if(d.y>c.height)d.y=0;
}
requestAnimationFrame(draw);
}
draw();

/* ===== PLAYERS ===== */
let players=[
{en:"Lionel Messi",fa:"لیونل مسی",img:"https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg"},
{en:"Cristiano Ronaldo",fa:"کریستیانو رونالدو",img:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Cristiano_Ronaldo_Portugal.jpg"},
{en:"Kylian Mbappé",fa:"امباپه",img:"https://upload.wikimedia.org/wikipedia/commons/3/35/Kylian_Mbapp%C3%A9_2019.jpg"},
{en:"Erling Haaland",fa:"هالند",img:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Erling_Haaland_2020.jpg"}
];

function render(){
let box=document.getElementById("players");
box.innerHTML="";
players.forEach(p=>{
box.innerHTML+=`
<div class="card">
<img src="${p.img}" onerror="this.src='https://via.placeholder.com/200'">
<div class="en">${p.en}</div>
<div class="fa">${p.fa}</div>
</div>`;
});
}
render();

/* ===== ADMIN LOGIN ===== */
function openLogin(){
document.getElementById("panel").style.display="block";
}

function login(){
let pass=document.getElementById("pass").value;

if(pass===ADMIN_PASS){
localStorage.setItem("admin","1");
document.getElementById("panel").innerHTML=`
<h4>پنل مدیریت</h4>
<input id="name" placeholder="EN">
<input id="fa" placeholder="FA">
<input id="img" placeholder="IMG">
<button onclick="addPlayer()">افزودن</button>
`;
}else{
alert("رمز اشتباه");
}
}

/* فقط ادمین چرخ دنده را می‌بیند */
if(localStorage.getItem("admin")==="1"){
document.getElementById("adminBtn").style.display="block";
}

/* add player */
function addPlayer(){
players.push({
en:name.value,
fa:fa.value,
img:img.value
});
render();
}

/* CHAT (UI REAL) */
function toggleChat(){
chat.style.display=chat.style.display==="block"?"none":"block";
ai.style.display=ai.style.display==="block"?"none":"block";
}

function send(){
msgs.innerHTML+="<div>🧑 "+msg.value+"</div>";
msg.value="";
}

/* AI (placeholder) */
function ask(){
ans.innerText="برای AI واقعی باید API وصل شود: "+q.value;
}