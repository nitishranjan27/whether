 var EffectButton = document.getElementById("clickButton");
 var BodyBG = document.querySelector("body");
 var classAdd = BodyBG.classList.add("bg");
 EffectButton.addEventListener("click",() => {
     if(BodyBG.style.backgroundColor == "green"){
        BodyBG.style.backgroundColor =""
     } else {
      BodyBG.style.backgroundColor = "green"
     }
      
 })

 var CountEffect = document.getElementById("countIncreaseDecrease");
let count = 0;
 function increase(){
  count++;
  counting();
 }
 function decrease(){
  count--;
  counting();
 }
 function counting(){
  CountEffect.innerHTML = count;
 }