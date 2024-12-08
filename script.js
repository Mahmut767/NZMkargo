// Show more information about projects
function showMoreInfo(projectName) {
    alert(`More info about ${projectName}`);
}

// Form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thanks for contacting us, ${name}! We’ll get back to you soon.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
