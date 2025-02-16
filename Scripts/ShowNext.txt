let currentIndex = 0;
let quizItems = [];

function fetchQuizItems() {
    quizItems = Array.from(document.querySelectorAll("[id^='AREA_']"))
        .map(el => ({
            name: el.getAttribute("data-name") || el.textContent?.trim() || "Unknown",
            id: el.id
        }))
        .filter(item => item.id && item.name !== "Unknown");
}

function updateLabel() {
    if (currentIndex < quizItems.length - 1) {
        let label = document.getElementById("label_quizLabel");
        if (label) {
            label.innerHTML = `Click on ${quizItems[currentIndex].name} | ${quizItems[currentIndex + 1].name}`;
            label.style.display = "block";
        }
    }
}

function simulateShownext() {
    if (!window.location.search.includes("shownext=1")) {
        history.replaceState(null, "", window.location.pathname + "?shownext=1");
    }
    injectScript();
}

function injectScript() {
    fetchQuizItems();
    document.addEventListener("click", function (event) {
        let targetId = event.target.id;
        if (currentIndex < quizItems.length && targetId === quizItems[currentIndex].id) {
            currentIndex++;
            updateLabel();
        }
    });
    updateLabel();
}

simulateShownext();
