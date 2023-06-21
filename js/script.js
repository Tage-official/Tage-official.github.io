let startTime = Date.now();
let currentTime = 0;
setInterval(function() {
   currentTime = Date.now() - startTime;
   let minutes = Math.floor(currentTime / 60000);
   let seconds = Math.floor((currentTime % 60000) / 1000);
   document.getElementById("timer").innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
 }, 1000);
 
 function clock() {
   var d = new Date();
   var day = d.getDate();
   var hrs = d.getHours();
   var min = d.getMinutes();
   var sec = d.getSeconds();
   
   var mnt = new Array("January", "February", "March", "April", "May",
   "June", "Jule", "August", "September", "October", "November", "December");
   
   if (day <= 9) day="0" + day;
   if (hrs <= 9) hrs="0" + hrs;
   if (min <=9 ) min="0" + min;
   if (sec <= 9) sec="0" + sec;
   
   $("#time").html("Now: " + hrs + ":" + min + ":" + sec + "&nbsp;&nbsp;&nbsp;" +
   day + " of " + mnt[d.getMonth()] + " " + d.getFullYear());
   }
   setInterval("clock()",1000);
 
// burger menu
var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.nav');
var burger = document.querySelector('.burger');

toggle.addEventListener('click', function (e) {
   this.classList.toggle('opened');
   burger.classList.toggle('active');
   nav.classList.toggle('active');
});
var swiper = new Swiper('.swiper-container', {
   speed: 400,
   spaceBetween: 20,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });

const btnUp = {
   el: document.querySelector('.btn-up'),
   show() {
     // удалим у кнопки класс btn-up_hide
     this.el.classList.remove('btn-up_hide');
   },
   hide() {
     // добавим к кнопке класс btn-up_hide
     this.el.classList.add('btn-up_hide');
   },
   addEventListener() {
     // при прокрутке содержимого страницы
     window.addEventListener('scroll', () => {
       // определяем величину прокрутки
       const scrollY = window.scrollY || document.documentElement.scrollTop;
       // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
       scrollY > 400 ? this.show() : this.hide();
     });
     // при нажатии на кнопку .btn-up
     document.querySelector('.btn-up').onclick = () => {
       // переместим в начало страницы
       window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth'
       });
     }
   }
 }
 btnUp.addEventListener();
// Modal function
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');
const header = document.querySelector('header');
const main = document.querySelector('main');
const section = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const body = document.querySelector('body');

function modalOpen() {
   header.classList.add('non-active');
   main.classList.add('non-active');
   section.forEach(sectionNonActive);
   function sectionNonActive(item) {
      item.classList.add('non-active');
   };
   footer.classList.add('non-active');
   body.classList.add('non-active');
};

modalOpen();

const modalClose = function () {
   modal.classList.add('non-active');
   header.classList.remove('non-active');
   main.classList.remove('non-active');
   section.forEach(sectionNonActive);
   function sectionNonActive(item) {
      item.classList.remove('non-active');
   };
   footer.classList.remove('non-active');
   body.classList.remove('non-active');
};

closeBtn.addEventListener('click', () => {
   // modal.classList.add('non-active');
   modalClose ();
});

document.addEventListener('click', (e) => {
   const target = e.target;
   const itsModal = target == modal || modal.contains(target);
   const itsBtn = target == closeBtn;
   const modalActive = modal.classList.contains('non-active');

   if (!itsModal && !itsBtn && !modalActive) {
      // modal.classList.add('non-active');
      modalClose();
   }
});

let video = document.getElementById("video");            // Получаем элемент video
let videoTrack = document.querySelector(".video-track"); // Получаем элемент Видеодорожки
let time = document.querySelector(".timeline");          // Получаем элемент времени видео
let btnPlay = document.querySelector(".play");           // Получаем кнопку проигрывания
let btnPause = document.querySelector(".pause");         // Получаем кнопку паузы
btnPlay.addEventListener("click", function() {
   video.play(); // Запуск проигрывания
   // Запуск интервала
   videoPlay = setInterval(function() {
       // Создаём переменную времени видел
       let videoTime = Math.round(video.currentTime)
       // Создаём переменную всего времени видео
       let videoLength = Math.round(video.duration)
       // Вычисляем длину дорожки
       time.style.width = (videoTime * 100) / videoLength + '%';
   }, 10)
});
btnPause.addEventListener("click", function() {
   video.pause(); // Останавливает воспроизведение
   clearInterval(videoPlay) // убирает работу интервала
});
btnRewind.addEventListener("click", function() {
   video.currentTime -= 5; // Уменьшаем время на пять секунд
});

// Нажимаем на кнопку перемотать вперёд
btnForward.addEventListener("click", function() {
   video.currentTime += 5; // Увеличиваем время на пять секунд
});
videoTrack.addEventListener("click", function(e) {
   let posX = e.clientX - 8; // Вычисляем позицию нажатия
   let timePos = (posX * 100) / 800; // Вычисляем процент перемотки
   time.style.width = timePos + '%'; // Присваиваем процент перемотки
   video.currentTime = (timePos * Math.round(video.duration)) / 100 // Перематываем
});

// burger menu
var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.nav');
var burger = document.querySelector('.burger');

toggle.addEventListener('click', function (e) {
   this.classList.toggle('opened');
   burger.classList.toggle('active');
   nav.classList.toggle('active');
});



// wave animation
var windowWidth = window.innerWidth;
if (windowWidth > 800) {
   var myWave = wavify( document.querySelector('#wave'), {
      height: 10,
      bones: 2,
      amplitude: 100,
      color: '#FBF8E7',
      speed: .6
   
    })
} else {
   var myWave = wavify( document.querySelector('#wave'), {
      height: 5,
      bones: 2,
      amplitude: 150,
      color: '#FBF8E7',
      speed: .6
   
    })
}


//  reviews slider
var reviewsSlider = new Swiper(".reviews__slider", {
   spaceBetween: 66,
   navigation: {
     nextEl: ".reviews__button-next",
     prevEl: ".reviews__button-prev",
   },
   mousewheel: true,
   keyboard: true,
   slidesPerView: 1,
   breakpoints: {
      1250: {
         slidesPerView: 2,
      },
      1680: {
         slidesPerView: 3,
      }
   }
 });




//  instagram slider
 var reviewsSlider = new Swiper(".instagram__slider", {
   spaceBetween: 0,
   navigation: {
     nextEl: ".instagram__button-next",
     prevEl: ".instagram__button-prev",
   },
   mousewheel: true,
   keyboard: true,
   slidesPerView: 1,
   breakpoints: {
      690: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      1080: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      1820: {
         slidesPerView: 3,
         spaceBetween: 100,
      }
   }
 });

// form submit plug
const formBtn = document.querySelector('.form__button');

formBtn.addEventListener('click', (evt) => {
   event.preventDefault();
   alert('Ready');
});

const SubBtn = document.querySelector('.subscribe__button');

SubBtn.addEventListener('click', (evt) => {
   event.preventDefault();
   alert('Ready');
});

const MdlBtn = document.querySelector('.modal__button');

MdlBtn.addEventListener('click', (evt) => {
   event.preventDefault();
   alert('Ready');
});
var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.querySelector("body > section.reviews._wrapper > div > div.swiper.reviews__slider.swiper-initialized.swiper-horizontal.swiper-pointer-events.swiper-backface-hidden")
document.querySelector("#swiper-wrapper-8105faaa2b0eb7d19")