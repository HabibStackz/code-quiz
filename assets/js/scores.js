document.addEventListener("DOMContentLoaded", function () {
    const highscoresList = document.getElementById("highscores");
    const clearButton = document.getElementById("clear");
    
    // Retrieve and parse the scores from local storage
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    
    // Sort the scores by the score value in descending order
    scores.sort((a, b) => b.score - a.score);
    
    // Display the scores in the highscores list
    scores.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item.initials + ':  ' +  item.score;
        highscoresList.appendChild(listItem);
    });
    
    // Add a click event listener to the "Clear Highscores" button
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("scores");
        highscoresList.innerHTML = ""; // Clear the displayed highscores
    });
});