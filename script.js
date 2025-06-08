document.addEventListener('DOMContentLoaded', () => {
    // --- Código da Galeria de Imagens (já existente) ---
    const images = document.querySelectorAll('.gallery-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const galleryContainer = document.querySelector('.gallery-container');

    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        images[index].classList.add('active');

        const activeImageElement = images[index].querySelector('img');
        if (activeImageElement) {
            if (activeImageElement.complete) {
                galleryContainer.style.height = activeImageElement.offsetHeight + 'px';
            } else {
                activeImageElement.onload = () => {
                    galleryContainer.style.height = activeImageElement.offsetHeight + 'px';
                };
            }
        }
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    }

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
    showImage(currentIndex);
    window.addEventListener('resize', () => {
        showImage(currentIndex);
    });

    const blinkingTextElement = document.getElementById('blinking-text');

    if (blinkingTextElement) {
        const wordsToCycle = ['STUDIOS', 'ANG', 'LIFE'];
        let currentWordIndex = 0;

        function cycleWords() {
            blinkingTextElement.textContent = wordsToCycle[currentWordIndex];
            currentWordIndex = (currentWordIndex + 1) % wordsToCycle.length; // 
        }

        cycleWords();

        setInterval(cycleWords, 2500); 
    }
});