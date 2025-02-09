// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.margin = "20px";
    document.body.insertBefore(toggleButton, document.body.firstChild);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
