export const Home = (()=>{
    const addTab = ()=>{
        let tHead = document.querySelector(".tabs-headings");
        let h = document.createElement("div");
        h.classList.add("head"); 
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
        document.querySelector("body").style.background = 'url("dist/table.jpeg")'; 
        document.querySelector("body").style.backgroundRepeat = "no-repeat";
        document.querySelector("body").style.backgroundSize = "100% 100%";
        contents.innerHTML = "";
        contents.innerHTML = 
        `<h2> Welcome to,</h2><br>
        <h3>The IceHut</h3><br>
        The IceHut is a Restaurant, bar and ice-cream parlor located in Antartica.
        We have awesome recipes and the most talented chefs in town!(&#128039;)`+
        `<div class="review">
        <img src="dist/penguin.jpg" alt="Penguin">
        <div class="review-title">Our customer review:</div>
        <div class="review-name">Bob</div>
        <div class="review-sub">Local Penguin, Happy customer</div>
        <div class="review-text"><i>"penguin noises"</i></div>
        <div class="review-translate">(Translation: I don't know bro, I don't speak penguin)</div>
        </div>`;
    }
    return { addTab }
})();
