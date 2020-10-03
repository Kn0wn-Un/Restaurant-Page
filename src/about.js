export const About = (()=>{
    const addTab = ()=>{
        let tHead = document.querySelector(".tabs-headings");
        let h = document.createElement("div");
        h.classList.add("head"); 
        h.innerHTML = "About";
        h.id = "About";
        h.addEventListener("click", ()=>{showContent(h)});
        tHead.appendChild(h);
    }   
    const showContent = (tab)=>{
        let contents = document.querySelector(".tabs-contents");
        let preActive = document.querySelector(".active-tab");
        document.querySelector("body").style.background = "rgb(202, 233, 255)"; 
        document.querySelector("h1").style.background = "rgb(0, 175, 185)";
        contents.style.width= "auto";
        if(preActive != null) 
            preActive.classList.remove("active-tab");
        tab.classList.add("active-tab"); 
        contents.style.textAlign = 'center';
        let git = document.createElement("img");
        git.style.alt = "View source on GitHub";
        git.style.height = "50px";
        git.style.width = "125px";
        git.src = "https://pngimg.com/uploads/github/github_PNG15.png";
        contents.innerHTML = "";
        contents.innerHTML = 
        `<h3> About </h3><br>We are the most famous restaurant in all of Antartica, We pride ourselves in serving most of the local residents
        <br> All the ingredients are locally grown and resourced thus maintaining the natural ecosystem.<br><br>
        <h3>Where to Find us</h3><br>
        Our restaurant is covered in ice most of the time, Good Luck finding it maybe ask the whales or penguins for the direction.
        <br>(watch out for the bears though!)<br><br>
        <h3>Contact Us</h3><br>
        You really we get phone signals or landline?<br><br><br><br><br><br>
        <a href="https://github.com/Kn0wn-Un/Restaurant-Page">${git.outerHTML}</a>`; 
    } 
    return { addTab }
})();
