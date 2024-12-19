function trackWorkouts() {
    const workoutsCompleted = document.getElementById('workoutsCompleted').value;
    const workoutResult = document.getElementById('workoutResult');
    
    if (workoutsCompleted === '' || workoutsCompleted < 0) {
        workoutResult.textContent = "Please enter a valid number of workouts.";
        workoutResult.style.color = "red";
    } else {
        workoutResult.textContent = `You have completed ${workoutsCompleted} workouts this week! Keep it up!`;
        workoutResult.style.color = "green";
    }
}
const quotes = [
    "Push yourself because no one else is going to do it for you.",
    "The only bad workout is the one that didn’t happen.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "Don’t stop when you’re tired. Stop when you’re done."
];

function generateQuote() {
    const quoteText = document.getElementById('quoteText');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomIndex]}"`;
    quoteText.style.fontStyle = "italic";
    quoteText.style.color = "#333";
}
const trackerForm = document.getElementById('trackerForm');
const resultDisplay = document.getElementById('caloriesResult');

trackerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const exerciseType = document.getElementById('exerciseType').value;
    const duration = parseFloat(document.getElementById('exerciseDuration').value);
    const calorieRates = { running: 10, cycling: 8, yoga: 3 };

    if (calorieRates[exerciseType] && duration > 0) {
        const caloriesBurned = calorieRates[exerciseType] * duration;
        resultDisplay.textContent = `You burned ${caloriesBurned} calories!`;
    } else {
        resultDisplay.textContent = 'Please enter valid inputs.';
    }
});
