(function () {
    let isClicking = false;

    function applyFastClick() {
        const elements = document.querySelectorAll(".q");

        elements.forEach((element) => {
            element.onmousedown = null;
            element.onmouseup = null;
            element.onmousemove = null;
            element.onclick = null;

            element.addEventListener("mousedown", function (event) {
                if (event.button === 0 && !isClicking) {
                    isClicking = true;
                    event.preventDefault();

                    if (typeof window.checkQuestion === "function") {
                        window.checkQuestion(this, event);
                    }

                    setTimeout(() => {
                        isClicking = false;
                    }, 1);
                }
            });
        });
    }

    const observer = new MutationObserver(() => {
        applyFastClick();
    });

    const gameContainer = document.body;
    observer.observe(gameContainer, { childList: true, subtree: true });

    applyFastClick();
})();