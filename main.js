const slide = document.querySelector('.slide');
const imgs = document.querySelectorAll('.images');
const left =document.querySelector('.bxs-chevron-left'),
right =document.querySelector('.bxs-chevron-right');


let count = 0;

function changeImg(){
    if(count > imgs.length -1){
        count = 0;
    }else if(count < 0){
        count = imgs.length -1;
    }
    slide.style.transform = `translateX(${-count * 100}vw)`;
}

right.addEventListener('click',() => {
    count++;
    changeImg()
})
left.addEventListener('click',() =>{
    count--;
    changeImg()
})

function avtoChange(){
    count++;
    changeImg();
}
let reset = setInterval(avtoChange , 5000);

function resetInterval(){
    clearInterval(reset);
    reset = setInterval(avtoChange , 5000);
}