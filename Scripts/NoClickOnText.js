const tooltip = document.getElementById('label_quizLabel');

if (tooltip) {
    const labelText = tooltip.querySelector('.labelText');
    if (labelText && labelText.textContent.includes('Click on')) {
        labelText.textContent = labelText.textContent.replace('Click on ', '');
    }
}

const tooltipObserver = new MutationObserver(() => {
    const tooltip = document.getElementById('label_quizLabel');
    if (tooltip) {
        const labelText = tooltip.querySelector('.labelText');
        if (labelText && labelText.textContent.includes('Click on')) {
            labelText.textContent = labelText.textContent.replace('Click on ', '');
        }
    }
});

tooltipObserver.observe(document.body, { childList: true, subtree: true });
