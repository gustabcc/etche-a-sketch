function createSquares() {
    const gridContainer = document.getElementById("grid");

    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);

            gridItem.addEventListener("mouseover", () => {
                gridItem.classList.add("hovered")
            });
        };
    };
};

createSquares();