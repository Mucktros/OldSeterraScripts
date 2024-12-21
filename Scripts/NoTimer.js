const timer = document.getElementById('timer');
if (timer) {
    timer.style.display = 'none';
    timer.style.pointerEvents = 'none';
}

const timerObserver = new MutationObserver(() => {
    const timer = document.getElementById('timer');
    if (timer) {
        timer.style.display = 'none';
        timer.style.pointerEvents = 'none';
    }
});

timerObserver.observe(document.body, { childList: true, subtree: true });
