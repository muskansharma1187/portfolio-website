// Contact Form
let form = document.getElementById("contactForm");

let messageBox = document.getElementById("messageBox");


form.addEventListener("submit", function(event){

    event.preventDefault();


    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;


    if(name === "" || email === "" || message === ""){

        messageBox.innerText = "Please fill all the fields!";

    }

    else{

        messageBox.innerText =
            "Thank you " + name + "! Your message has been sent.";

        form.reset();

    }

});