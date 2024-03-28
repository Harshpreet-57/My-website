document.addEventListener("DOMContentLoaded", function() {
    // Get the current hour
    let currentHour = new Date().getHours();

    // Get the greeting message based on the current hour
    let greeting;
    if (currentHour < 12) {
        greeting = "Good morning 🌅";
    } else if (currentHour < 17) {
        greeting = "Good afternoon 🌞";
    } else {
        greeting = "Good evening 🌇";
    }

    // Select the element with the ID "greeting"
    let greetingElement = document.getElementById("greeting-top");

    // Update the content of the selected element with the greeting message
    greetingElement.textContent = greeting;
});


