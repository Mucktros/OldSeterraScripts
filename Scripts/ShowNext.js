function simulateShowNext() {
    if (!window.location.search.includes("shownext=1")) {
        history.replaceState(null, "", window.location.pathname + "?shownext=1");
    }
}

simulateShowNext();


//if you want this to work with other gamemodes so its not just this, you can do something like this

//function simulateFastClick() {
  //  if (!window.location.search.includes("fastclick=1?shownext=1")) {
    //    history.replaceState(null, "", window.location.pathname + "fastclick=1?shownext=1");
    //}
//}

//simulateFastClick();
