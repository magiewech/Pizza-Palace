console.log("hey")
var button = document.getElementById("submit")
button.addEventListener("click" ,submit)
radio.addEventListener("checked" ,small)
radio.addEventListener("checked" ,large)
radio.addEventListener("checked" ,medium)



function submit(event){
    event.preventDefault()
    var size = document.getElementById("small").checked
    var size =document.getElementById("large").checked
    var size =document.getElementById("medium").checked
    var crust = document.getElementById("crust").value
    var toppings = document.getElementById("Toppings").value
    var how many = docment.getElementById("number").value
    var delivery = document.getElementById("Delivery").value

}

functio myFunction(){
    var small =getElementById(".checked");
    if (small.checked == true) {
        text.style.display ="block";
    } else {
        text.style.display ="none";
    }
}