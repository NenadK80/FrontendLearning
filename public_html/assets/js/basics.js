//Primer za alert:
//alert("hello")

//Dohvatanje elementa preko id
var userElement = document.getElementById("user");
console.log(userElement);
//console.log(userElement.innerHTML);

//Dohvatanje elementa pomoću klase
console.log("Element sa klasom desc:");
var descElements = document.getElementsByClassName("desc");

//console.log("student 1: ");
//console.log(descElements[0]);
//console.log("student 2: ");
//console.log(descElements[1]);
//console.log("student 3: ");
//console.log(descElements[2]);

console.log("studenti su: "
+descElements[0].innerHTML + ","
+descElements[1].innerHTML + ","
+descElements[2].innerHTML + ".");

//Izmena vrednosti elementa 
userElement.innerHTML = "Nenad";
console.log(userElement.innerHTML);

descElements[0].innerHTML = "Marija";
descElements[1].innerHTML = "Milica";
descElements[2].innerHTML = "Maja";

//Provera da lie je korisnik punoletan



function ageVerification() {
    var ageInput = document.getElementById("age").value;
    alert(ageInput);
    var messageBoxElement = document.getElementById("message-box");
        
    if (ageInput>=18) {
      messageBoxElement.innerHTML = "Korisnik je punoletan";  
    } else {
      messageBoxElement.innerHTML = "Korisnik nije punoletan";  
    }
}
