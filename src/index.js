
import { Home } from "./home";
import { About } from "./about";
import { Menu } from "./menu";
const mainPage = (()=>{
    const container = document.querySelector(".container");

    const addHeading = ()=>{
        let rName = document.createElement("h1");
        rName.innerHTML = "Restaurant Name";
        container.appendChild(rName);
    }
    
    const addTabs = ()=>{
        let tContainer = document.createElement("div");
        tContainer.classList.add("tabs-container");
        let tHeading = document.createElement("div");
        tHeading.classList.add("tabs-headings");
        let tContents = document.createElement("div");
        tContents.classList.add("tabs-contents");
        tContainer.appendChild(tHeading);
        tContainer.appendChild(tContents);
        container.appendChild(tContainer);
        Home.addTab(tContents);
        Menu.addTab(tContents);
        About.addTab(tContents);
    }

    const init = ()=>{
        addHeading();
        addTabs();
    }

    return{ init }
})();
mainPage.init();
