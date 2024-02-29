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
    "./assets/images/galleryspic/0.jpg",
    "./assets/images/galleryspic/1.jpg",
    "./assets/images/galleryspic/2.jpg",
    "./assets/images/galleryspic/3.jpg",
    "./assets/images/galleryspic/4.jpg",
    "./assets/images/galleryspic/5.jpg",
    "./assets/images/galleryspic/6.jpg",
    "./assets/images/galleryspic/7.jpg",
    "./assets/images/galleryspic/8.jpg",
    "./assets/images/galleryspic/9.jpg",
    "./assets/images/galleryspic/10.jpg",
    "./assets/images/galleryspic/11.jpg",
    "./assets/images/galleryspic/12.jpg",
    "./assets/images/galleryspic/13.jpg",
    "./assets/images/galleryspic/14.jpg",
    "./assets/images/galleryspic/15.jpg",
    "./assets/images/galleryspic/16.jpg",
    "./assets/images/galleryspic/17.jpg",
    "./assets/images/galleryspic/18.jpg",
    "./assets/images/galleryspic/19.jpg",
    "./assets/images/galleryspic/20.jpg",
    "./assets/images/galleryspic/21.jpg",
    "./assets/images/galleryspic/22.jpg",
    "./assets/images/galleryspic/23.jpg",
    "./assets/images/galleryspic/24.jpg",
    "./assets/images/galleryspic/25.jpg",
    "./assets/images/galleryspic/26.jpg",
    "./assets/images/galleryspic/27.jpg",
    "./assets/images/galleryspic/28.jpg",
    "./assets/images/galleryspic/29.jpg",
    "./assets/images/galleryspic/30.jpg",
    "./assets/images/galleryspic/31.jpg",
    "./assets/images/galleryspic/32.jpg",
    "./assets/images/galleryspic/33.jpg",
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