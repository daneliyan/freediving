/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navToggleIcon = document.querySelector('#nav-toggle i');

/*===== MENU SHOW =====*/
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  navToggleIcon.classList.toggle('icon-close');
});
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion')
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.accordion h3 button')
  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')
    toggleItem(item)
    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})
const toggleItem = (item) => {
  const accordionContent = item.querySelector('.accordion-content')
  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

/**
 * Компонент "Рейтинг"
 */
// $(".rating").each(function () {
//   var agregate = $(this).find('.rating-agregate').text();
//   var fulles = 5;
//   var rightes = (agregate / fulles) * 100;
//   $(this).find('.progress').css("width", rightes + '%');
// });
document.querySelectorAll(".rating").forEach(function (rating) {
  var agregate = rating.querySelector('.rating-agregate').textContent;
  var fulles = 5;
  var rightes = (agregate / fulles) * 100;
  rating.querySelector('.progress').style.width = rightes + '%';
});


/*=============== SWIPER ===============*/
/**
 * Слайдер на главной странице
 */
var swiper = new Swiper(".heroSwiper", {
  pagination: {
    el: ".hero .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Добавляем ведущий ноль к числам от 1 до 9
      var bulletNumber = (index + 1).toString().padStart(2, '0');
      return '<span class="' + className + '">' + bulletNumber + "</span>";
    },
  },
});

/**
 * Слайдер для блока Place
 */
var swiper = new Swiper(".placeSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Добавляем ведущий ноль к числам от 1 до 9
      var bulletNumber = (index + 1).toString().padStart(2, '0');
      return '<span class="' + className + '">' + bulletNumber + "</span>";
    },
  },
});

/**
 * Цикл для слайдеров одинакового типа (.standartSwiper) с родителем (.standartbl)
 */
if (document.querySelectorAll('.standartSwiper').length > 0) {
  let swiperInstances = [];
  const gallerySwipers = document.querySelectorAll('.standartSwiper');
  gallerySwipers.forEach(function (element, index) {
    const $this = element;
    // var standartbl = document.querySelector(".standartbl");
    // var standartbl = $this.querySelector(".standartbl");
    var standartbl = $this.closest(".standartbl");
    $this.classList.add("instance-" + index);
    standartbl.querySelector(".swiper-pagination").className += " pagination-" + index;
    standartbl.querySelector(".swiper-button-prev").className += " prev-" + index;
    standartbl.querySelector(".swiper-button-next").className += " next-" + index;
    swiperInstances[index] = new Swiper(".instance-" + index, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      navigation: {
        prevEl: ".prev-" + index,
        nextEl: ".next-" + index,
      },
      pagination: {
        el: '.pagination-' + index,
        clickable: true,
        renderBullet: function (index, className) {
          var bulletNumber = (index + 1).toString().padStart(2, '0');
          return '<span class="' + className + '">' + bulletNumber + "</span>";
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        }
      }
    });
  });
  swiperInstances[3].update();
  setTimeout(function () {
    for (const slider of swiperInstances) {
      slider.update();
    }
  }, 50);
}