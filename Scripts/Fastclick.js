function simulateFastClick() {
    if (!window.location.search.includes("fastclick=1")) {
        history.replaceState(null, "", window.location.pathname + "?fastclick=1");
    }
}

simulateFastClick();
