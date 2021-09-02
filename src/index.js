export {content};
import HOME from './home.js';
import ABOUT from './about.js';
import CONTACT from './contact.js';

console.log("hello");

let content = document.querySelector("#content");

// logo
let logo = document.createElement("h1");
logo.textContent = "Knead Cake";
logo.id = "logo";
content.appendChild(logo);


// tablinks
let tablinkContainer = document.createElement('div');
tablinkContainer.classList.add("tablink-container");
content.appendChild(tablinkContainer);

let home = document.createElement('button');
home.textContent = "Home";
home.classList.add("tablink");
tablinkContainer.appendChild(home);
home.addEventListener('click',() => {

    let i, tablinks;
    // to clear others bg color on next click
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    home.style.backgroundColor = "red";
    
    //to clear other page content before rendering its own.
    page.textContent = "";

    HOME();
});

let about = document.createElement('button');
about.textContent = "About";
about.classList.add("tablink");
tablinkContainer.appendChild(about);
about.addEventListener('click',() => {

    let i, tablinks;
    // to clear others bg color on next click
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    about.style.backgroundColor = "red";
    
    //to clear other page content before rendering its own.
    page.textContent = "";

    ABOUT();
});

let contact = document.createElement('button');
contact.textContent = "Contact";
contact.classList.add("tablink");
tablinkContainer.appendChild(contact);
contact.addEventListener('click',() => {

    let i, tablinks;
    // to clear others bg color on next click
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    contact.style.backgroundColor = "red";
    
    //to clear other page content before rendering its own.
    page.textContent = "";

    CONTACT();
});


// page content div for easy clear;
let page = document.createElement("div");
content.appendChild(page);
page.id = "page";








