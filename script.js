function createSquares() {
    const gridContainer = document.getElementById("grid");


    for(let i = 0; i < 256; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseover", () => {
            gridItem.classList.add("hovered");
        })
    };
};

function resetBtn() {
    const btn = document.getElementById("reset-btn");

    btn.addEventListener("click", () => {
        const gridItem = document.querySelectorAll(".grid-item");

        gridItem.forEach(item => {
            item.classList.remove("hovered");
        })
    })
}

createSquares()
resetBtn();