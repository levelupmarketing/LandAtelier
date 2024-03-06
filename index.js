function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.style.width === "100vw") {
        menu.style.width = "0";
        window.onscroll = function () { };
    } else {
        menu.style.width = "100vw";
        window.onscroll = function () {
            window.scrollTo(0,0);
        };
    }
}

// swiper

var swiperServicii

if (window.innerWidth < 1100) {
    var serviciiDiv = document.querySelector('.servicii');
    serviciiDiv.classList.add('swiper');
    var swiperWrapper = serviciiDiv.children[0];
    swiperWrapper.classList.add('swiper-wrapper');
    var slides = swiperWrapper.children;
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add('swiper-slide');
    }

    swiperServicii = new Swiper(".servicii", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })
}
else {
    var serviciiDiv = document.querySelector('.servicii');
    var gridContainer = serviciiDiv.children[0];
    gridContainer.classList.add('grid-container');
    var gridItems = gridContainer.children;
    for (var i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.add('grid-item');
    }

    var swiperButtonPrev = document.querySelector('.servicii .swiper-button-prev');
    if (swiperButtonPrev) swiperButtonPrev.remove();
    var swiperButtonNext = document.querySelector('.servicii .swiper-button-next');
    if (swiperButtonNext) swiperButtonNext.remove();
    var swiperPagination = document.querySelector('.servicii .swiper-pagination');
    if (swiperPagination) swiperPagination.remove();
}

var swiperStudii

if (window.innerWidth < 1100) {
    var studiiDiv = document.querySelector('.studii');
    studiiDiv.classList.add('swiper');
    var swiperWrapper = studiiDiv.children[0];
    swiperWrapper.classList.add('swiper-wrapper');
    var slides = swiperWrapper.children;
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add('swiper-slide');
    }

    swiperStudii = new Swiper(".studii", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })
}
else {
    var studiiDiv = document.querySelector('.studii');
    var gridContainer = studiiDiv.children[0];
    gridContainer.classList.add('grid-container');
    var gridItems = gridContainer.children;
    for (var i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.add('grid-item');
    }

    var swiperButtonPrev = document.querySelector('.studii .swiper-button-prev');
    if (swiperButtonPrev) swiperButtonPrev.remove();
    var swiperButtonNext = document.querySelector('.studii .swiper-button-next');
    if (swiperButtonNext) swiperButtonNext.remove();
    var swiperPagination = document.querySelector('.studii swiper-pagination');
    if (swiperPagination) swiperPagination.remove();
}

var swiperBlog

if (window.innerWidth < 1100) {
    var blogDiv = document.querySelector('.blog');
    blogDiv.classList.add('swiper');
    var swiperWrapper = blogDiv.children[0];
    swiperWrapper.classList.add('swiper-wrapper');
    var slides = swiperWrapper.children;
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add('swiper-slide');
    }

    swiperStudii = new Swiper(".blog", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })
}
else {
    var blogDiv = document.querySelector('.blog');
    var gridContainer = blogDiv.children[0];
    gridContainer.classList.add('grid-container');
    var gridItems = gridContainer.children;
    for (var i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.add('grid-item');
    }

    var swiperButtonPrev = document.querySelector('.blog .swiper-button-prev');
    if (swiperButtonPrev) swiperButtonPrev.remove();
    var swiperButtonNext = document.querySelector('.blog .swiper-button-next');
    if (swiperButtonNext) swiperButtonNext.remove();
    var swiperPagination = document.querySelector('.blog swiper-pagination');
    if (swiperPagination) swiperPagination.remove();
}