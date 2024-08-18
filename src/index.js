//header的搜尋按鈕觸發顯示搜尋欄

function headerSearchButton() {
  var searchContainer = document.getElementById('headerSearchInputContainer');
  searchContainer.classList.toggle('show');
}

//header的FooterUnderstandingExpo觸發偽元素
document.addEventListener('DOMContentLoaded', function() {
  const expoButton = document.querySelector('.footerUnderstandingExpo');
  const expoBox = document.querySelector('.footerUnderstandingExpoBox');

  expoButton.addEventListener('mouseover', function() {
    expoBox.style.display = 'block';
  });

  expoButton.addEventListener('mouseout', function(event) {
    if (!expoBox.contains(event.relatedTarget)) {
      expoBox.style.display = 'none';
    }
  });

  expoBox.addEventListener('mouseover', function() {
    expoBox.style.display = 'block';
  });

  expoBox.addEventListener('mouseout', function(event) {
    if (!expoButton.contains(event.relatedTarget)) {
      expoBox.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const expoButton = document.querySelector('.footerAboutTheAssociation');
  const expoBox = document.querySelector('.aboutTheAsscioationBox');

  expoButton.addEventListener('mouseover', function() {
    expoBox.style.display = 'block';
  });

  expoButton.addEventListener('mouseout', function(event) {
    if (!expoBox.contains(event.relatedTarget)) {
      expoBox.style.display = 'none';
    }
  });

  expoBox.addEventListener('mouseover', function() {
    expoBox.style.display = 'block';
  });

  expoBox.addEventListener('mouseout', function(event) {
    if (!expoButton.contains(event.relatedTarget)) {
      expoBox.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const expoButton = document.querySelector('.footerTickets');
  const expoBox = document.querySelector('.ticketsBox');

  expoButton.addEventListener('mouseover', function() {
    expoBox.style.display = 'block';
  });

  expoButton.addEventListener('mouseout', function(event) {
    if (!expoBox.contains(event.relatedTarget)) {
      expoBox.style.display = 'none';
    }
  });

  expoBox.addEventListener('mouseover', function() {
    expoBox.style.display = 'block';
  });

  expoBox.addEventListener('mouseout', function(event) {
    if (!expoButton.contains(event.relatedTarget)) {
      expoBox.style.display = 'none';
    }
  });
});

//主版白色新聞欄

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.news-cards');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    let currentTranslateX = 0;
  
    const cardWidth = document.querySelector('.news-card').clientWidth;
    const gap = 12;

    const totalCardsWidth = (cardWidth + gap) * document.querySelectorAll('.news-card').length - gap;
    const containerWidth = cardsContainer.parentElement.clientWidth;
    const maxTranslateX = totalCardsWidth - containerWidth + 400;
  
    rightBtn.addEventListener('click', () => {
        currentTranslateX -= (cardWidth + gap); // Move left
        cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;

        leftBtn.classList.remove('hidden');

        if (Math.abs(currentTranslateX) >= maxTranslateX) {
            rightBtn.classList.add('hidden');
        } else {
            rightBtn.classList.remove('hidden');
        }
      });
    
      leftBtn.addEventListener('click', () => {
        currentTranslateX += (cardWidth + gap); 
        cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;
        rightBtn.classList.remove('hidden');

        if (currentTranslateX >= 0) {
          leftBtn.classList.add('hidden');
        }
      });
    
      if (currentTranslateX >= 0) {
        leftBtn.classList.add('hidden');
      }
    });

//Enjoy Pavilions右上角的圖片切換
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slideshow-container .fade');
  let currentIndex = 0;
    
  function showNextSlide() {
    slides[currentIndex].classList.remove('show');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('show');
  }
    
  setInterval(showNextSlide, 3000);
  });


//Enjoy Pavilions中間的圖片欄位

  document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.enjoy-pavilions-cards');
    const leftBtn = document.querySelector('.enjoy-pavilions-left-btn');
    const rightBtn = document.querySelector('.enjoy-pavilions-right-btn');
    let currentTranslateX = 0;

  
    const cardWidth = document.querySelector('.enjoy-pavilions-card').clientWidth;

    const totalCardsWidth = cardWidth * document.querySelectorAll('.enjoy-pavilions-card').length;
    const containerWidth = cardsContainer.parentElement.clientWidth;
    const maxTranslateX = totalCardsWidth - containerWidth - 2000;
  
    rightBtn.addEventListener('click', () => {
        currentTranslateX -= cardWidth; // Move left
        cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;
        leftBtn.classList.remove('hidden');

        if (Math.abs(currentTranslateX) >= maxTranslateX) {
            rightBtn.classList.add('hidden');
        } else {
            rightBtn.classList.remove('hidden');
        }
      });
    
      leftBtn.addEventListener('click', () => {
        currentTranslateX += cardWidth  
        cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;
        rightBtn.classList.remove('hidden');

        if (currentTranslateX >= 0) {
          leftBtn.classList.add('hidden');
        }
      });
    
      if (currentTranslateX >= 0) {
        leftBtn.classList.add('hidden');
      }
    });
    
//footer 回到最上層按鈕
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}