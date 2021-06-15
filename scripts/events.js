import { sliderBox } from "../scripts/helpers.js";

const navbarLinks = document.getElementsByClassName('navbar-links')[0];

export function toggleButtonClick(e) {
    navbarLinks.classList.toggle('active');
}

export function btnContainerClick(e) {
    const btn = e.target;
    if(e.target.classList[0] !== 'btn_Slider') return;
    
    const slideNumber = btn.innerText.slice('1') - 1;
    sliderBox(slideNumber);
}