let flag = 1;

function controller(x){
    flag =  flag + x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(elm){
    let slides = document.getElementsByClassName("slide");
    
    if(elm === slides.length){
        flag = 0;
        elm = 0; 
    }
    if(elm  < 0){
        flag = slides.length-1;
        elm = slides.length-1;
    }
    
    for(let y of slides){
        y.style.display = "none";
    }
    
    slides[elm].style.display = "block";
}


