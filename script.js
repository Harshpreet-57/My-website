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


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".discord");

    
    buttons.forEach(button => {
        button.addEventListener("click", redirectToLink);
    });
});

function redirectToLink(event) {
    const link = "https://discord.gg/TwPhfgRhS5"; // Get the data-link attribute value
    if (link) {
        window.location.href = link; // Redirect to the specified link
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".playButton");

    
    buttons.forEach(button => {
        button.addEventListener("click", redirectToLink2);
    });
});

function redirectToLink2(event) {
    const link = "https://open.spotify.com/playlist/19yHLHGZ1YyckaqymYVELz?si=b60389ae196942da"; // Get the data-link attribute value
    if (link) {
        window.location.href = link; // Redirect to the specified link
    }
}
