const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');
});    

document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackMsg = document.getElementById("feedback-msg");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (feedbackText.length < 5) {
            alert("Please provide more detailed feedback to help us understand your experience 😊");
            return;
        }

        // Show confirmation
        feedbackMsg.style.display = "block";

        // Optionally, log it (or send to a backend in real projects)
        console.log("Feedback submitted:", feedbackText);

        // Clear the form
        feedbackForm.reset();

    });
});