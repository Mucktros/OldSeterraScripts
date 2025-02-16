function simulateShowNext() {
    if (!window.location.search.includes("shownext=1")) {
        history.replaceState(null, "", window.location.pathname + "?shownext=1");
    }
}

simulateShowNext();
