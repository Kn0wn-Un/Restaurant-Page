export const About = (()=>{
    const addTab = (contents)=>{
        let tHead = document.querySelector(".tabs-headings");
        let h = document.createElement("div");
        h.innerHTML = "About";
        h.id = "About";
        h.addEventListener("click", ()=>{showContent(contents)});
        tHead.appendChild(h);
    }   
    const showContent = (contents)=>{
        contents.innerHTML = "";
        contents.innerHTML = 
        `<h3> About </h3><br>TEsT 1`; 
    } 
    return { addTab }
})();
