export const About = (()=>{
    const addTab = ()=>{
        let tHead = document.querySelector(".tabs-headings");
        let h = document.createElement("div");
        h.innerHTML = "About";
        h.id = "About";
        h.addEventListener("click", ()=>{showContent(h)});
        tHead.appendChild(h);
    }   
    const showContent = (tab)=>{
        let contents = document.querySelector(".tabs-contents");
        let preActive = document.querySelector(".active-tab");
        document.querySelector("body").style.background = "none"; 
        if(preActive != null) 
            preActive.classList.remove("active-tab");
        tab.classList.add("active-tab"); 
        contents.innerHTML = "";
        contents.innerHTML = 
        `<h3> About </h3><br> vitae iaculis ex imperdiet. Nullam sed iaculis diam. 
        Quisque sapien quam, pharetra in dignissim ac, 
        lacinia sed tortor. Vivamus eget purus non leo mattis luctus. 
        Nunc bibendum velit a porttitor eleifend. 
        Morbi varius sapien quis enim sagittis, in efficitur justo blandit. 
        Donec rutrum accumsan velit, ut placerat mauris varius vel. `; 
    } 
    return { addTab }
})();
