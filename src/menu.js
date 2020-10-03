export const Menu = (()=>{
    const fishMenu = ["Baik kut kyee kaik",
            "Balchão",
            "Bánh canh",
            "Bisque",
            "Bún mắm",
            "Bún riêu",
            "Chowder",
            "Cioppino",
            "Coconut shrimp",
            "Crab puff",
            "Crawfish pie",
            "Curanto",
            "Fideuà",
            "Fish heads",
            "Halabos",
            "Hoe",
            "Hoedeopbap",
            "Jaecheopguk",
            "Kaeng som",
            "Kedgeree",
            "Maeuntang",
            "Moules-frites",
            "Namasu",
            "New England clam bake",
            "Orange cuttlefish",
            "'Ota 'ika"];
        const calmDishes=["Clam cake",
            "Clam chowder",
            "Clams casino",
            "Clams oreganata",
            "Fabes con almejas",
            "Fried clams (Back on popular Demand)",
            "New England clam bake",
            "Steamed clams",
            "Stuffed clam"];
        const iceCream = [
            "Olive Olive",
            "Oyster",
            "Passion fruit",
            "Pear",
            "Peppermint",
            "Pistachio",
            "POG",
            "Pralines and cream",
            "Raspberry Ripple",
            "Red Hot Lover",
            "Red velvet",
            "Roasted Turmeric", 
            "Candied Ginger",
            "Rocky road served with a cookie on top",
            "Rocky road",
            "Rose geranium",
            "Rosewater",
            "Rum and raisin",
            "Salty caramel cashew",
            "Salty licorice",
            "Sea salt caramel",
            "Smurf",
            "Spumoni",
            "Squid ink",
            "Sriracha",
            "Stracciatella",
            "Strawberry",
            "Superman",
            "Sweet potato maple walnut",
            "Teaberr",
            "Tea Time",
            "Tiger tail",
            "Tomato jam",
            "Tutti frutti",
            "Ube",
            "Vanilla",
            "Watermelon",
            "White chocolate habanero",
            "World’s Fair caramel corn"
        ]   
    const addTab = ()=>{
        let tHead = document.querySelector(".tabs-headings");
        let h = document.createElement("div");
        h.classList.add("head"); 
        h.innerHTML = "Menu";
        h.id = "Menu";
        h.addEventListener("click", ()=>{showContent(h)});
        tHead.appendChild(h);
    }    
    const showContent = (tab)=>{
        let contents = document.querySelector(".tabs-contents");
        let preActive = document.querySelector(".active-tab");
        document.querySelector("body").style.background = "rgb(247, 217, 196)"; 
        document.querySelector("h1").style.background = "rgb(247, 175, 157)";
        if(preActive != null) 
            preActive.classList.remove("active-tab");
        tab.classList.add("active-tab"); 
        contents.style.width= "100%";
        contents.style.textAlign = 'left';
        contents.innerHTML = "";
        contents.innerHTML = 
        `
        <div class="menu-contents">
            <div class="menu-row">
                <div class="menu-heading">Fish Menu</div>
                    <ul id="Fish">
                    </ul>
                <div class="menu-heading">Calm Dishes Menu</div>
                    <ul id="Clam">
                    </ul>
            </div>
            <div class="menu-row">
                <div class="menu-heading">Popular IceCream flavours</div>
                <ul id="Icecream">
                </ul>
            </div>
        </div>`;
        makeMenuList(document.getElementById("Fish"), fishMenu);
        makeMenuList(document.getElementById("Clam"), calmDishes);
        makeMenuList(document.getElementById("Icecream"), iceCream);
    }
    const makeMenuList = (list, items) =>{
        for(let i = 0; i< items.length; i++){
            let li = document.createElement("li");
            li.innerHTML = items[i];
            list.appendChild(li);
        }
    }
    return { addTab }
})();
