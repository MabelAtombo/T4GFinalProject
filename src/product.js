// function heading(){
//     let head= document.getElementById( "head");
//     head.style.fontFamily= "times new roman";
//     head.style.innerHTML=" A True Taste of Africa";
//     head.style.animation= "uppercase ";
//   }
//    let high= document.getElementById( "high");
//    high. addEventListener( "onclick", heading);

function loadMore(){
    let reveal= document.getElementById("hide");
    reveal.style.display=("block");
    reveal.style.display=("flex");
    reveal.style.flexWrap="wrap";
    reveal.style.justifyContent="center";
    reveal.style.justifyContent="space-between";
    let missing = document.getElementById("firstwoman");
    missing.style.display="none";
    let show= document.getElementById("woman");
    reveal.style.display="flex";
}
let hide=document.getElementById("hide");
hide.addEventListener("click",loadMore);

//showless
function hide(){
    let photoVanish=document.getElementById("hide");
    photoVanish.style.display="none";
    let reveal =document.getElementById("firstwoman");
    reveal.style.display="flex";
    let buttonVanish=document.getElementById("woman");
    buttonVanish.style.display="none";
}
let off= document.getElementById("hide");
off.addEventListener("click",hide);