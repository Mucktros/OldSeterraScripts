const tooltip = document.getElementById('label_quizLabel');

if (tooltip) {
    tooltip.style.display = 'none';
    tooltip.style.pointerEvents = 'none';
}

const tooltipObserver = new MutationObserver(() => {
    const tooltip = document.getElementById('label_quizLabel');
    if (tooltip) {
        tooltip.style.display = 'none';
        tooltip.style.pointerEvents = 'none';
    }
});

tooltipObserver.observe(document.body, { childList: true, subtree: true });
