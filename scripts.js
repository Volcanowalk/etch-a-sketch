document.addEventListener("DOMContentLoaded", (event) => {
    const container = document.querySelector('.container')
    var size = 16;
    var count = 1;

    for (var i = 0; i < size; i++) {
        var col = document.createElement("div");
        for (var n = 0; n < size; n++) {
            var cell = document.createElement("div");
            cell.className = "square"
            cell.style.width = `${500/size}px`
            cell.style.height = `${500/size}px`
            cell.addEventListener("mouseover", (e) => {
                e.target.style.background = "black";
            })
            col.appendChild(cell);
        }
        container.appendChild(col);
    }

})