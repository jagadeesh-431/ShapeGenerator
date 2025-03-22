let button = document.getElementById("button");
let numberInShape = 1;
let oldValue = 0;

button.onclick = () => {
    let inputVal = parseInt(document.getElementById("number").value) || 0;
    const circle = document.getElementById("circle");
    const square = document.getElementById("square");
    const rectangle = document.getElementById("rectangle");
    const triangle = document.getElementById("triangle");
    const box = document.getElementById("box");
    const clr = document.getElementById("colour").value;

    const finalValue = inputVal + oldValue;

    for (let j = numberInShape; j <= finalValue; j++) {
        let shape = document.createElement("div");
        shape.innerHTML = numberInShape;

        if (circle.checked) {
            shape.classList.add("circle");
        } else if (square.checked) {
            shape.classList.add("square");
        } else if (rectangle.checked) {
            shape.classList.add("rectangle");
        } else if (triangle.checked) {
            shape.classList.add("triangle");
        } else {
            console.warn("No shape selected");
            return;
        }

        shape.style.backgroundColor = clr;
        numberInShape++;
        box.appendChild(shape);
    }

    // Update oldValue safely
    oldValue = numberInShape - 1;
};
