const colors = ["#e3fdfd", "#cbf1f5", "#a6e3e9", "#71c9ce"];
const imgList = document.querySelectorAll(".slide-img");
const pageWrap = document.querySelector(".js-slide-dot");
let pages = [];

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let idx = 0;

function clickPager(e){
    const pageNum = e.target.id;
    controllImageList(pageNum);
    // console.log(e.target);
}

function triggerPager(){
    pages.forEach(page => {
        page.onclick = clickPager;
    });
}

function paintPages(){
    const ul = pageWrap.querySelector("ul");
    
    for(let i = 0; i < imgList.length; i++) {
        const li = document.createElement("li");
        li.className = "js-dot dot";
        li.id = i;
        ul.appendChild(li);
    }

    pages = document.querySelectorAll(".js-dot");
    pages[0].setAttribute("style", "background-color : rgba(0, 0, 0, 1)");

    triggerPager();
}

function resetImageList(){
    imgList.forEach(img => {
        img.setAttribute("style", "");
        // pages[idx].setAttribute("style", "");
    });

    pages.forEach(page=>{
        page.setAttribute("style", "");
    });

    // pages[0].setAttribute("style", "background-color : rgba(0, 0, 0, 1)");
    console.log(pages);
    imgList[0].setAttribute("style", `z-index:99999; background-color:${colors[0]}`);
}

function prevSlide(){
    if(idx === 0){
        idx = imgList.length - 1;
    }else{
        idx--;
    }
}

function nextSlide(){
    if(idx === imgList.length - 1){
        idx = 0;
    }else{
        idx++;
    }
}

function clickPrevBtn(e){
    prevSlide();
    controllImageList(idx);
}

function clickNextBtn(e){
    nextSlide();
    controllImageList(idx);
}

function controllImageList(idx){
    imgList.forEach(img => {
        img.setAttribute("style", "");
    });

    pages.forEach(page=>{
        page.setAttribute("style", "");
    });

    imgList[idx].setAttribute("style", `z-index:99999; background-color:${colors[idx]}`);
    pages[idx].setAttribute("style", "background-color : rgba(0, 0, 0, 1)");
}

function sliderController(){
    resetImageList();
    paintPages();
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
    setInterval(function(){
        nextSlide();
        controllImageList(idx);
    }, 3000);
}

init();