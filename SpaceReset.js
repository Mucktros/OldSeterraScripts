document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        const resetButton = document.getElementById('cmdRestart');
        if (resetButton) {
            resetButton.click();
        }
    }
});
