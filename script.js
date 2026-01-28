/* TYPING */
const typing=document.querySelector(".typing");
const roles=[
 "Cyber Security & Ethical Hacker",
 "SOC Analyst",
 "Blue Teaming",
 "OWASP Top 10 Specialist"
];
let i=0,j=0,d=false;

function type(){
 let t=roles[i];
 typing.textContent=t.slice(0,j);
 if(!d && j++===t.length+5)d=true;
 if(d && j--===0){d=false;i=(i+1)%roles.length}
 setTimeout(type,d?50:100);
}
type();

/* REVEAL */
const reveals=document.querySelectorAll(".reveal");
function reveal(){
 reveals.forEach(r=>{
  if(r.getBoundingClientRect().top<window.innerHeight-120)
   r.classList.add("active");
 });
}
window.addEventListener("scroll",reveal);
reveal();

/* NAV ACTIVE */
const sections=document.querySelectorAll(".section");
const links=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
 let cur="";
 sections.forEach(s=>{
  if(scrollY>=s.offsetTop-160)cur=s.id;
 });
 links.forEach(l=>{
  l.classList.remove("active");
  if(l.getAttribute("href")==="#"+cur)l.classList.add("active");
 });
});

/* SECTION FOCUS GLOW */
const allSections = document.querySelectorAll(".section");

function focusSection(){
    allSections.forEach(sec=>{
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight/2 && rect.bottom > window.innerHeight/2){
            sec.classList.add("focused");
        }else{
            sec.classList.remove("focused");
        }
    });
}
window.addEventListener("scroll", focusSection);
focusSection();
