document.addEventListener("DOMContentLoaded", (event) => {
    var size = 16;
    var color = false;

    createGrid(size, color);

    const resize = document.querySelector('.size')

    resize.addEventListener("click", () => {
        size = prompt("Please enter grid size. MAX: 100")

        if(size > 100) {
            size = 100;
        }

        createGrid(size, color)

    })

    const btnColor = document.querySelector('.color')

    btnColor.addEventListener("click", () => {
        if(!color) {
            color = true;
        } else {
            color = false;
        }

        createGrid(size, color)
    })


})

function createGrid(size, color) {
    const container = document.querySelector('.container')

    container.innerHTML = '';

    for (var i = 0; i < size; i++) {
        var col = document.createElement("div");
        for (var n = 0; n < size; n++) {
            var cell = document.createElement("div");
            cell.className = "square"
            cell.style.width = `${500/size}px`
            cell.style.height = `${500/size}px`
            cell.addEventListener("mouseover", (e) => {
                if(!color){
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

    console.log(r)

    return `rgb(${r},${g},${b})`
}