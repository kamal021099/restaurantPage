import {content} from './index.js';


export default function (){

    
    let pageContent = document.createElement("div");
    pageContent.textContent = "contact";
    pageContent.classList.add("tab-content");
    content.querySelector("#page").appendChild(pageContent);

}