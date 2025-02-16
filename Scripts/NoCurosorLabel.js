function simulateNoLabel() {
    if (!window.location.search.includes("nocursor=1")) {
        history.replaceState(null, "", window.location.pathname + "?nocursor=1");
    }
}

simulateNoLabel();
