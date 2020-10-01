export const Home = (()=>{
    const addTab = (contents)=>{
        let tHead = document.querySelector(".tabs-headings");
        let h = document.createElement("div");
        h.innerHTML = "Home";
        h.id = "Home";
        h.addEventListener("click", ()=>{showContent(contents)});
        tHead.appendChild(h);
        showContent(contents);
    }    
    const showContent = (contents)=>{
        contents.innerHTML = "";
        contents.innerHTML = 
        `<h3> Home </h3><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo sodales, eleifend metus a, tincidunt nunc. 
        Vivamus eget eros consequat, efficitur est a, 
        placerat elit. Aenean vestibulum velit vitae lorem luctus, 
        vitae iaculis ex imperdiet. Nullam sed iaculis diam. 
        Quisque sapien quam, pharetra in dignissim ac, 
        lacinia sed tortor. Vivamus eget purus non leo mattis luctus. 
        Nunc bibendum velit a porttitor eleifend. 
        Morbi varius sapien quis enim sagittis, in efficitur justo blandit. 
        Donec rutrum accumsan velit, ut placerat mauris varius vel. 
        In consectetur, dui id bibendum ultricies, sapien libero venenatis 
        tortor, blandit feugiat mauris turpis sit amet risus. 
        Donec laoreet lacus eget ante efficitur, sit amet pretium turpis 
        vulputate.`;
    }
    return { addTab }
})();
