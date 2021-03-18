function loading() {
    for (element of document.getElementsByClassName("LoadingScreen")){
        element.classList.add("EndLoading");
    }
    for (element of document.getElementsByClassName("LoadingScreenTitle")){
        element.classList.add("EndLoading");
    }
    

    var element = document.getElementById("LoadingScreenBody");
    element.style.overflowY = "visible";
}
