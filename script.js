const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("feedback-form");
    const feedbackField = document.getElementById("feedback");
    const feedbackMessage = document.getElementById("feedback-message");
    
    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload

        // Grab the feedback value
        const feedback = feedbackField.value.trim();
        
        // Check if feedback has been provided
        if (feedback.length < 5) {
            alert("Please provide a more detailed feedback.");
            return; // Prevent further actions if feedback is too short
        }
        
        // Save feedback to localStorage or perform additional actions if needed
        const savedFeedback = JSON.parse(localStorage.getItem("musicFeedbackList")) || [];
        localStorage.setItem("musicFeedbackList", JSON.stringify(savedFeedback));

        // Show the "Thank you" message
        feedbackMessage.style.display = "block";

        // Hide the "Thank you" message after 5 seconds
        setTimeout(() => {
            feedbackMessage.style.display = "none";
        }, 5000);
    });
});
