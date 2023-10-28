// JavaScript to handle click event and toggle expansion
const boxes = document.querySelectorAll('.box');

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        // Remove the 'expanded' class from all boxes
        boxes.forEach((box) => {
            box.classList.remove('expanded');
        });

        // Add the 'expanded' class to the clicked box
        box.classList.add('expanded');
    });
});