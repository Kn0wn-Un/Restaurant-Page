export const Home = (()=>{
    const addTab = ()=>{
        let tHead = document.querySelector(".tabs-headings");
        let h = document.createElement("div");
        h.innerHTML = "Home";
        h.id = "Home";
        h.addEventListener("click", ()=>{showContent(h)});
        tHead.appendChild(h);
        showContent(h);
    }    
    const showContent = (tab)=>{
        let contents = document.querySelector(".tabs-contents");
        let preActive = document.querySelector(".active-tab");
        if(preActive != null) 
            preActive.classList.remove("active-tab");
        tab.classList.add("active-tab"); 
        document.querySelector("body").style.background = 'url("dist/table.jpg")'; 
        document.querySelector("body").style.backgroundRepeat = "no-repeat";
        document.querySelector("body").style.backgroundSize = "100% 100%";
        contents.innerHTML = "";
        contents.innerHTML = 
        `<h2> Welcome </h2><br>
        <h3>To The Restaurant</h3><br>
        The Restaurant is a Restaurant, bar and coffee roastery located in Antartica.
        We have awesome recipes and the most talented chefs in town!(&#128039;)`;
    }
    return { addTab }
})();
