const boxes = document.querySelectorAll(".box");

function createBoxes(numOfBoxes) {

    let newRow = document.createElement("div");
    let container = document.getElementById("container");
    newRow.classList.add("row");
    container.appendChild(newRow);

    for (i = 0; i < numOfBoxes; i++) {
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        newRow.appendChild(newBox);
        newBox.addEventListener('mouseover', (event) => {
            event.target.classList.add("highlighted");
        });
    }

}


function changeLayout() {
    let newLayout = prompt("Enter the new layout:");
    console.log(newLayout);
    if (newLayout > 100) {
        alert("Choose a number lower than 100.");
        return
    } else {
        let allRows = document.querySelectorAll(".row");
        allRows.forEach((row) => {
            row.classList.add("disappear")
        })

        let i = 0;
        while (i < newLayout) {
            createBoxes(newLayout);
            i++;
        }
    }
};

function resetBoxes() {
    let allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box) => {
        box.classList.remove("highlighted");
    });
}



boxes.forEach(item => {
    item.addEventListener('mouseover', (event) => {
        event.target.classList.add("highlighted");
    });
});
