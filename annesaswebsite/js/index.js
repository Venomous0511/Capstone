let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1320: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  const imagePaths = [
    "./assets/images/gallerys/1.jpg",
    "./assets/images/gallerys/2.jpg",
    "./assets/images/gallerys/3.jpg",
    "./assets/images/gallerys/4.jpg",
    "./assets/images/gallerys/5.jpg",
    "./assets/images/gallerys/6.jpg",
    "./assets/images/gallerys/7.jpg",
    "./assets/images/gallerys/8.jpg",
    "./assets/images/gallerys/9.jpg",
    "./assets/images/gallerys/10.jpg",
    "./assets/images/gallerys/11.jpg",
    "./assets/images/gallerys/12.jpg",
    "./assets/images/gallerys/13.jpg",
    "./assets/images/gallerys/14.jpg",
    "./assets/images/gallerys/15.jpg",
    "./assets/images/gallerys/16.jpg",
    "./assets/images/gallerys/17.jpg",
    "./assets/images/gallerys/18.jpg",
    "./assets/images/gallerys/19.jpg",
    "./assets/images/gallerys/20.jpg",
    "./assets/images/gallerys/21.jpg",
    "./assets/images/gallerys/22.jpg",
    "./assets/images/gallerys/23.jpg",
    "./assets/images/gallerys/24.jpg",
    "./assets/images/gallerys/25.jpg",
    "./assets/images/gallerys/26.jpg",
    "./assets/images/gallerys/27.jpg",
    "./assets/images/gallerys/28.jpg"
  ];

  // Get the gallery container
  const galleryContainer = document.getElementById('gallery');

  // Dynamically add images to the gallery
  imagePaths.forEach((path, index) => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    const image = document.createElement('img');
    image.src = path;
    image.alt = `gallery-${index + 1}`;

    swiperSlide.appendChild(image);
    galleryContainer.appendChild(swiperSlide);
  });