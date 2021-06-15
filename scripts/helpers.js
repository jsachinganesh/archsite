const btnContainer = document.querySelector('.btnContainer');
const slides = document.querySelectorAll('.slide');

export function sliderBox(slideNumber){
    let curSlide = slideNumber;
    slides.forEach((el,i)=>{
        const translateX = 100 * (i-curSlide) ;
        if(translateX === 0){
            document.querySelector('.grey').classList.remove('grey');

            btnContainer.querySelector(`.img-${slideNumber}`).classList.add('grey')
        }
        el.style.transform = `translateX(${translateX}%)`;

    });
}

export function auto(){
    let slideNumber = 0;
    setInterval(()=>{
        if(slideNumber===4){
            slideNumber = 0;
        }
       
        sliderBox(slideNumber);
        slideNumber++;
    },3000)
}

