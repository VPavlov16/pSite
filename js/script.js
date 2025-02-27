document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-item img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img src="" alt="Full Image">';
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".lightbox-close");

    images.forEach(image => {
        image.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});
