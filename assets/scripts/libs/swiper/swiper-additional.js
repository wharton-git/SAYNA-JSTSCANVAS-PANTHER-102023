var swiper = new Swiper(".animationSlide", {
    slidesPerView: 3,
    spaceBetween: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});