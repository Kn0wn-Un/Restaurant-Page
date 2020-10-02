export const Menu = (()=>{
    const addTab = ()=>{
        let tHead = document.querySelector(".tabs-headings");
        let h = document.createElement("div");
        h.innerHTML = "Menu";
        h.id = "Menu";
        h.addEventListener("click", ()=>{showContent(h)});
        tHead.appendChild(h);
    }    
    const showContent = (tab)=>{
        let contents = document.querySelector(".tabs-contents");
        let preActive = document.querySelector(".active-tab");
        document.querySelector("body").style.background = "black"; 
        if(preActive != null) 
            preActive.classList.remove("active-tab");
        tab.classList.add("active-tab"); 
        contents.innerHTML = "";
        contents.innerHTML = 
        `<h3> Menu </h3><br>
        tortor, blandit feugiat mauris turpis sit amet risus. 
        Donec laoreet lacus eget ante efficitur, sit amet pretium turpis 
        vulputate.`;
    }
    return { addTab }
})();
