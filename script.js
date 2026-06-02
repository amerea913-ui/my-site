// 🕒 ساعت زنده
function updateClock(){
  const c=document.getElementById("clock");
  if(c){
    c.innerHTML="🕒 "+new Date().toLocaleTimeString("fa-IR");
  }
}
setInterval(updateClock,1000);
updateClock();

// 💥 کلیک انیمیشن واقعی
document.querySelectorAll("a,button").forEach(el=>{
  el.addEventListener("click",()=>{
    el.style.transform="scale(0.9)";
    setTimeout(()=>el.style.transform="",150);
  });
});

// ✨ ورود نرم صفحه (fade in)
document.body.style.opacity=0;
window.onload=()=>{
  document.body.style.transition="1s";
  document.body.style.opacity=1;
};
