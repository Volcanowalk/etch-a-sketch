var size = 16;
var color = false;

document.addEventListener("DOMContentLoaded", (event) => {
    

    createGrid(size);

    //Slider 

    const slider = document.querySelector(".slider")
    const txtGridSize = document.querySelector('.gridSize')

    slider.addEventListener('input', function(e) {
        size = e.target.value
        txtGridSize.textContent = `GRID: ${size} X ${size}`
        clearGrid()
        createGrid(size)
    })

    //Toggle color button

    const btnColor = document.querySelector('.color')

    btnColor.addEventListener("click", () => {
        const squares = document.querySelectorAll('.square')

        if(!color) {
            color = true;
        } else {
            color = false;
        }
    })

    //Clear button

    const btnClear = document.querySelector('.clear')

    btnClear.addEventListener('click', () => {
        clearGrid()
        createGrid(size)
    })

})

function createGrid(size) {
    const container = document.querySelector('.container')

    for (var i = 0; i < size; i++) {
        var col = document.createElement("div");
        for (var n = 0; n < size; n++) {
            var cell = document.createElement("div");
            cell.className = "square"
            cell.style.width = `${500/size}px`
            cell.style.height = `${500/size}px`
            cell.addEventListener("mouseover", (e) => {
                if(!color) {
                    e.target.style.background = "black";
                } else {
                    e.target.style.background = randomRGB();
                }
            })
            col.appendChild(cell);
        }
        container.appendChild(col);
    }
}


function randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`
}

function clearGrid() {
    const container = document.querySelector('.container')

    container.innerHTML = '';
}