// alert ( "Hi my name is Mabel" ); 
// let name = prompt( "What is your name?" );
// alert("Hi " + name +",welcome to our website.");
// alert("How do you do?");
// let repponds= prompt("How do you do?");
// alert("Very well" + ", Thank you.");
// let title = prompt ("What is your title");
// let name = prompt ( "What is your name");
// let product =  prompt( "What is your favorite product?");
// let hometown= prompt ( "What is your hometown?");
// alert(`Hi, ${title}  ${name} who likes ${product}, and comes from ${ hometown} your are welcome to our website.`);
// let name1 = "My name is Mabel"
// let sentence = "hi there " + name1
// console.log (name1);
// console.log ( sentence);
// let sentence1 = "Hello there 🙋‍♀️🙋‍♀️"
// let name = "my name is Lily"
// console.log(`${sentence1} , ${name}`);
// let num = 5
// console.log(num);
// let num1 = 10
// console.log(num1);
// console.log(`${num}${num1}`);
// let name = prompt( "What is your name?");
// if(name === "Mabel"){
//     console.log(name);
//     alert("Hi Beautiful 🙋‍♀️");
// } else{
//     console.log( name);
//     alert("Hi there!");
// }
// let name = prompt("What is your name?");
// let age = prompt( "what is your age?");
// let email = prompt("What is you email address?")
// !-- Button to open the modal login form -->
// <button onclick="document.getElementById('id01').style.display='block'">Login</button>

// <!-- The Modal -->
// <div id="id01" class="modal">
//   <span onclick="document.getElementById('id01').style.display='none'"
// class="close" title="Close Modal">&times;</span>
// /</div>/ Get the modal
// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  let slideIndex = 1;
showSlides(slideIndex);
}
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
V
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}