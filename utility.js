const divs = [];

function destroyGrid() {
    for (const div of divs) {
        div.remove();
    }
}

function createGrid(n) {
    const parentDiv = document.getElementById("parent");

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            const block = document.createElement("div");
            block.className = "child";
            const id = `${i},${j}`;
            block.id = id;
            block.style.height = 100 / n + "%";
            block.style.width = 100 / n + "%";

            block.addEventListener("mouseenter", (e) => {
                const r = Math.random() * 255;
                const g = Math.random() * 255;
                const b = Math.random() * 255;

                block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
            block.addEventListener("mouseleave", (e) => {
                setTimeout(() => {
                    block.style.backgroundColor = "white";
                }, 2000);
            });

            parentDiv.appendChild(block);
            divs.push(block);
        }
    }
}

function changeGrid() {
    const input = prompt("Please enter the new grid size");
    const n = parseInt(input);

    if (isNaN(n)) {
        console.log("Invalid input");
        return;
    }

    if (n > 0 && n <= 100) {
        destroyGrid();
        createGrid(n);
    }
}