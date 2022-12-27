function hideNews(){
    const divsToHide = document.getElementsByClassName("grid_newscol");
    const pulse = document.getElementsByClassName("pulse-lenta");
    const hideTabs = document.querySelectorAll('[data-testid="news-tabs"]');
    hide(divsToHide);
    hide(pulse);
    hide(hideTabs);
}

function hide(elementsToHide){
    for(let i = 0; i < elementsToHide.length; i++){
        elementsToHide[i].style.display = "none";
    }
}

hideNews();

//Add the script to the DevTools Console and press "Enter"