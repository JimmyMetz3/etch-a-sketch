const boxes = document.querySelectorAll(".box");

boxes.forEach(item => {
    item.addEventListener('mouseover', (event) => {
        event.target.classList.add("highlighted")
    })
})