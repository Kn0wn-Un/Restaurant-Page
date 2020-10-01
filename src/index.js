
const tLinks = ['Home', 'Menu', 'About'];
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
    populateHeadings();
    let tContents = document.createElement("div");
    tContents.classList.add("tabs-contents");

    tContainer.appendChild(tHeading);
    tContainer.appendChild(tContents);
    container.appendChild(tContainer);
}

const populateHeadings = ()=>{
    let tHeading = document.querySelector(".tabs-headings");
    for(let i = 0; i < tLinks.length; i++){
        let h = document.createElement("div");
        h.innerHTML = tLinks[i];
        h.id = tLinks[i];
        //h.addEventListener("click", (e)=>{displayContent(e)});
        tHeading.appendChild(h);
    }
}

const displayContent = (e)=>{
    console.log(e);
}
const init = ()=>{
    addHeading();
    addTabs();
}
init();
//return {init, addHeading, addTabs}



/*const addHeading = ()=>{
    let rName = document.createElement("h1");
    rName.innerHTML = "Restaurant Name";
    const container = document.querySelector(".container");
    container.appendChild(rName);
}
addHeading();*/