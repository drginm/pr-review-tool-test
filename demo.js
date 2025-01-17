document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');
    if (!button) {
        console.error('Color button element not found');
        return;
    }

    button.addEventListener('click', () => {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1', '#33FFD1'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    button.addEventListener('click', () => {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1', '#33FFD1'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
