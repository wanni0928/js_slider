const colors = ["#e3fdfd", "#cbf1f5", "#a6e3e9", "#71c9ce"];
const imgList = document.querySelectorAll(".slide-img");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let idx = 0;
function resetImageList(){
    imgList.forEach(img => {
        
    });

    imgList[0].setAttribute("style", `z-index:99999; background-color:${colors[0]}`);
}

function clickPrevBtn(e){
    if(idx === 0){
        idx = imgList.length - 1;
    }else{
        idx--;
    }
    controllImageList(idx);
}

function clickNextBtn(e){
    if(idx === imgList.length - 1){
        idx = 0;
    }else{
        idx++;
    }
    controllImageList(idx);
}

function controllImageList(idx){
    imgList.forEach(img => {
        img.setAttribute("style", "");
    });

    imgList[idx].setAttribute("style", `z-index:99999; background-color:${colors[0]}`);
}

function sliderController(){
    resetImageList();
    prev.onclick = clickPrevBtn;
    next.onclick = clickNextBtn;
}

function paintBackgroundColor(){
    for(let i = 0; i < imgList.length; i++) {
        imgList[i].setAttribute("style", `background-color :${colors[i]}`)
    }
}

function init() {
    // paintBackgroundColor();
    sliderController();
}

init();