let currentIndex = 0;

        const images = document.querySelectorAll('.carousel-images img');
        const dotsContainer = document.querySelector('.carousel-dots');

        function showImage(index) {
            if (index >= images.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = images.length - 1;
            } else {
                currentIndex = index;
            }
            // Update the transform to show only one image at a time
            const newTransformValue = -currentIndex * 100;
            document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
            updateDots();
        }

        function nextImage() {
            showImage(currentIndex + 1);
        }

        function prevImage() {
            showImage(currentIndex - 1);
        }

        function updateDots() {
            const dots = document.querySelectorAll('.carousel-dots span');
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }

        // Create dot indicators dynamically based on number of images
        function createDots() {
            images.forEach((image, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === currentIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => showImage(index));
                dotsContainer.appendChild(dot);
            });
        }

        // Initialize
        createDots();
        showImage(currentIndex);

        // Auto-change every 5 seconds
        setInterval(nextImage, 5000);