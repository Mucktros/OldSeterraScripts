const elementsToHide = ['imgCursorFlag', 'questionFlag'];

elementsToHide.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = 'none';
        element.style.pointerEvents = 'none';
    }
});

const observer = new MutationObserver(() => {
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
            element.style.pointerEvents = 'none';
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
