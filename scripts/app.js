import { btnContainerClick, toggleButtonClick } from "../scripts/events.js";
import { auto } from "../scripts/helpers.js";

const btnContainer = document.querySelector('.btnContainer');
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const containerImgs = document.querySelector('.containerImgs');
if(btnContainer)btnContainer.addEventListener('click',btnContainerClick);
  


toggleButton.addEventListener('click', toggleButtonClick);


window.addEventListener('load',(e)=>{
    if(containerImgs)containerImgs.style.transform = `translateY(0)`;
    
})

auto(); //auto preview


