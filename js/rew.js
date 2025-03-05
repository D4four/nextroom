document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('review-modal');
    const closeBtn = document.querySelector('.review-close-btn');
  
    const reviewsData = [
      {
        author: "Автор 1",
        text: "Полный текст отзыва 1.",
        images: ["content/img/2.jpg", "content/img/13.png"]
      },
      {
        author: "Автор 2",
        text: "Полный текст отзыва 2.",
        images: ["content/img/2.jpg", "content/img/13.png"]
      },
      {
        author: "Автор 3",
        text: "Полный текст отзыва 3.",
        images: ["content/img/2.jpg", "content/img/13.png"]
      },
      {
        author: "Автор 4",
        text: "Полный текст отзыва 4.",
        images: ["content/img/2.jpg", "content/img/13.png"]
      },
      {
        author: "Автор 5",
        text: "Полный текст отзыва 5.",
        images: ["content/img/2.jpg", "content/img/13.png"]
      },
      {
        author: "Автор 6",
        text: "Полный текст отзыва 6.",
        images: ["content/img/2.jpg", "content/img/13.png"]
      },
      {
        author: "Автор 7",
        text: "Полный текст отзыва 7.",
        images: ["content/img/2.jpg", "content/img/13.png"]
      }
    ];
  
    const links = document.querySelectorAll('.reviews__item a');
  
    links.forEach((link, index) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const review = reviewsData[index];
  
        document.getElementById('modal-title').textContent = review.author;
        document.getElementById('modal-text').textContent = review.text;
  
        const modalImages = document.getElementById('modal-images');
        modalImages.innerHTML = '';
  
        review.images.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = image;
          imgElement.alt = 'Изображение отзыва';
          modalImages.appendChild(imgElement);
        });
  
        modal.style.display = 'block';
  
        // Логика для слайдера
        let currentSlide = 0;
        const allImages = modalImages.querySelectorAll('img');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
  
        function updateSlider() {
          const offset = -currentSlide * 100;
          modalImages.style.transform = `translateX(${offset}%)`;
        }
  
        prevBtn.addEventListener('click', () => {
          if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
          }
        });
  
        nextBtn.addEventListener('click', () => {
          if (currentSlide < allImages.length - 1) {
            currentSlide++;
            updateSlider();
          }
        });
  
        updateSlider();
      });
    });
  
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  