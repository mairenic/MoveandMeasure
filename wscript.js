const searchInput = document.getElementById('searchInput');
const difficultyFilter = document.getElementById('difficultyFilter');
const workoutCards = document.querySelectorAll('.workout-card');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    workoutCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(searchValue) ? '' : 'none';
    });
});

difficultyFilter.addEventListener('change', () => {
    const selectedDifficulty = difficultyFilter.value;
    workoutCards.forEach(card => {
        const cardDifficulty = card.getAttribute('data-difficulty');
        card.style.display = (selectedDifficulty === 'all' || cardDifficulty === selectedDifficulty) ? '' : 'none';
    });
});
