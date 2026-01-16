const boxes = document.querySelectorAll('.box');

function changeColors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    boxes[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    boxes[1].style.backgroundColor = `rgb(${r}, ${b}, ${g})`;
    boxes[2].style.backgroundColor = `rgb(${g}, ${r}, ${b})`;
    boxes[3].style.backgroundColor = `rgb(${g}, ${b}, ${r})`;
    boxes[4].style.backgroundColor = `rgb(${b}, ${r}, ${g})`;
    boxes[5].style.backgroundColor = `rgb(${b}, ${g}, ${r})`;
}

boxes.forEach(box => box.addEventListener('click', changeColors));