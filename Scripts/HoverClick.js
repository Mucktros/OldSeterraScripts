function simulateHoverClick() {
    if (!window.location.search.includes("hoverclick=1")) {
        history.replaceState(null, "", window.location.pathname + "?hoverclick=1");
    }
}

simulateHoverClick();
