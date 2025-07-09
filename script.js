const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("feedback-form");
    const textarea = document.getElementById("feedback");
    const msg = document.getElementById("feedback-message");
    
    form.addEventListener("submit", e => {
        e.preventDefault(); // Prevent the form from submitting normally
        
        if (textarea.ariaValueMax.trim().length < 5) {
            alert("Please provide a more detailed feedback!");
            return;
        }
        msg.style.display = "block"; // Show the feedback message
        textarea.value = ""; 
    });
});
