document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's'; // 4-7 seconds
        heart.style.opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity
        
        heartsContainer.appendChild(heart);

        // Remove the heart element after the animation ends
        setTimeout(() => {
            heart.remove();
        }, parseFloat(heart.style.animationDuration) * 1000);
    }

    // Create a new heart every 300 milliseconds
    setInterval(createHeart, 300);
});