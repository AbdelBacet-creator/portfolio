// window.addEventListener("scroll", (event) => {
//     let scroll = this.scrollY;
//     if(scroll>110){
//         document.querySelector('.background').style.backgroundImage='linear-gradient(rgb(114, 61, 61),rgb(130, 100, 35),rgb(59, 140, 85))';
//     }
//     else{
//         document.querySelector('.background').style.backgroundImage='linear-gradient(rgb(252, 195, 195),rgb(255, 231, 180),rgb(197, 255, 215))'; 
//     }
// });
const right = document.querySelector(".right");
const cards = document.querySelector('.cards');
const card0 = document.querySelector('.card0');
const card00 = document.querySelector('.card00');
const card = document.querySelector('.card');
const circle = document.querySelector('.circle');
const h1 = document.querySelector('.card h1');
const illustration = document.querySelector('.illustration');
const biggate = document.querySelector('.big-gate');
const smallgate = document.querySelector('.small-gate');
const backgate = document.querySelector('.back-gate');
const overlay = document.querySelector('.overlay');
// const middle1Div1 = document.getElementById("middle-1Div1");
// const middle1Div2 = document.getElementById("middle-1Div2");
// const middle1Div3 = document.getElementById("middle-1Div3");
// const middle1Div4 = document.getElementById("middle-1Div4");
// const middle1Div5 = document.getElementById("middle-1Div5");
// const middle1Div6 = document.getElementById("middle-1Div6");
// const middle1Div7 = document.getElementById("middle-1Div7");
// const middle1Div8 = document.getElementById("middle-1Div8");
cards.addEventListener("mouseover",e=>{
    card00.style.transform = "translateX(-2rem) rotateX(0deg) rotateZ(-60deg)";
    card0.style.transform = "translateX(4rem) translateZ(3rem) rotateX(0deg) rotateY(15deg) rotateZ(-40deg)";
    card.style.transform = "translateX(10rem) rotateX(0deg) rotateY(15deg) rotateZ(20deg)";
    circle.style.transform = "translateX(0.5rem) translateY(2rem) rotateZ(0deg)";
    h1.style.transform = " translateX(0.5rem)";  
});
cards.addEventListener("mouseout",e=>{
    card00.style.transform = "translateX(4rem) rotateX(20deg) rotateZ(-20deg)";
    card0.style.transform = "translateX(4.5rem) translateZ(0rem) rotateX(20deg) rotateZ(-15deg)";
    card.style.transform = "translateX(5rem) rotateX(20deg) rotateZ(-10deg)";
    circle.style.transform = "translateX(0) translateY(0) rotateZ(0deg)";
    h1.style.transform = " translateX(0rem)";  
});
// right.addEventListener("mouseover",e=>{
//     card00.style.transform = "translateX(-2rem) rotateX(0deg) rotateZ(-60deg)";
//     card0.style.transform = "translateX(4rem) translateZ(3rem) rotateX(0deg) rotateY(15deg) rotateZ(-40deg)";
//     card.style.transform = "translateX(10rem) rotateX(0deg) rotateY(15deg) rotateZ(20deg)";
//     circle.style.transform = "translateX(0.5rem) translateY(2rem) rotateZ(0deg)";
//     h1.style.transform = " translateX(0.5rem)";  
// });
// right.addEventListener("mouseout",e=>{
//     card00.style.transform = "translateX(4rem) rotateX(20deg) rotateZ(-20deg)";
//     card0.style.transform = "translateX(4.5rem) translateZ(0rem) rotateX(20deg) rotateZ(-15deg)";
//     card.style.transform = "translateX(5rem) rotateX(20deg) rotateZ(-10deg)";
//     circle.style.transform = "translateX(0) translateY(0) rotateZ(0deg)";
//     h1.style.transform = " translateX(0rem)";  
// });
illustration.addEventListener("mouseover",e=>{
    biggate.style.transform = "translateX(-9rem) rotateY(0deg) rotateZ(0deg)";
    smallgate.style.transform = "translateX(-14rem) rotateY(25deg) rotateZ(-20deg)";
    backgate.style.transform = "translateX(-2rem) rotateY(-25deg) rotateZ(20deg)";

});
illustration.addEventListener("mouseout",e=>{
    biggate.style.transform = "translateX(0rem) rotateY(-30deg)";
    smallgate.style.transform = "translateX(0rem) rotateY(-30deg)";
    backgate.style.transform = "translateX(0rem) rotateY(-30deg)";

});
function translateY(id,overlay){
    const element = document.getElementById(id);
    const element1 = document.getElementById(overlay);  
    element.style.transform =  "rotateY(360deg)";
    element1.style.opacity = 1;
}
function translateMinusY(id,overlay){
    const element = document.getElementById(id);  
    const element1 = document.getElementById(overlay);
    element.style.transform =  "rotateY(360deg)"
    element1.style.opacity = 0;
}