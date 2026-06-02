// 🕒 ساعت
function updateClock(){
  const c=document.getElementById("clock");
  if(c){
    c.innerHTML="🕒 "+new Date().toLocaleTimeString("fa-IR");
  }
}
setInterval(updateClock,1000);
updateClock();

// 💥 کلیک
document.querySelectorAll("a,button").forEach(el=>{
  el.addEventListener("click",()=>{
    el.style.transform="scale(0.9)";
    setTimeout(()=>el.style.transform="",150);
  });
});

// 🚀 حذف لودر
window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.querySelector(".loader").style.display="none";
  },1500);
});