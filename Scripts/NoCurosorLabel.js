function simulateNoLabel() {
    if (!window.location.search.includes("nocursor=1")) {
        history.replaceState(null, "", window.location.pathname + "?nocursor=1");
    }
}

simulateNoLabel();


//if you want this to work with other gamemodes so its not just this, you can do something like this

//function simulateFastClick() {
  //  if (!window.location.search.includes("fastclick=1?shownext=1")) {
    //    history.replaceState(null, "", window.location.pathname + "fastclick=1?shownext=1");
    //}
//}

//simulateFastClick();
