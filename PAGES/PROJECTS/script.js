import data from "../../projectData.json" assert {type: 'json'}

const gridContainer = document.querySelector(".grid-container");

for(let i = 0; i < data.length; ++i){
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.classList.add(".flip-card");
    div.innerHTML += `
    <div class="card-inner">
        <div class="card-front">
            <img src="../${data[i].image_path}" alt="#">
            <h3>${data[i].title}</h3>
        </div>
        <div class="card-back">
            <h1>${data[i].title}</h1>
            <p>${data[i].description}</p>
        </div>
    </div>
    `;
    gridContainer.appendChild(div);
}

const items = document.querySelectorAll(".grid-item");

for(let i = 0; i < items.length; ++i){
    items[i].onclick = function(){
        window.location.href = data[i].destination;
    }
}