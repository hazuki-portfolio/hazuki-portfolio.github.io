'use strict';

// slide

window.addEventListener('load', function () {
	viewSlide('.slide img');
});
function viewSlide(className, slideNo = -1)
{
	let imgArray = document.querySelectorAll(className);
	if (slideNo >= 0) {
		//初回以外は現在のスライドを消す
		imgArray[slideNo].style.opacity = 0;
	}
	slideNo++;
	if (slideNo >= imgArray.length) {
		slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
	}
	imgArray[slideNo].style.opacity = 1;
	let msec = document.getElementById('slide_speed').value;
	setTimeout(function(){viewSlide(className, slideNo);}, msec);
}



// nav-menu

{
  document.querySelector('.menu-trigger').addEventListener('click', function(){
    document.querySelector('.menu-trigger').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('is-active');
  });

  document.querySelector('#menu-top').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('is-active');
    document.querySelector('.menu-trigger').classList.toggle('active');
  });
  
  document.querySelector('#menu-about').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('is-active');
    document.querySelector('.menu-trigger').classList.toggle('active');
  });
  
  document.querySelector('#menu-contact').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('is-active');
    document.querySelector('.menu-trigger').classList.toggle('active');
  });
}

// artmake-slide

{
  const images = [
    'img/art1.jpeg',
    'img/art2.jpeg',
    'img/art3.jpeg',
    'img/art4.jpeg',
    'img/art5.jpeg',
    'img/art6.jpeg',
    'img/art7.jpeg',
    'img/art8.jpeg',
    'img/art9.jpeg',
    'img/art10.jpeg',
    'img/art11.jpeg',
    'img/art12.jpeg',
    'img/art13.jpeg',
    'img/art14.jpeg',
    'img/art15.jpeg',
    'img/art16.jpeg',
    'img/art17.jpeg',
    'img/art18.jpeg',
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex) {
      li.classList.add('current');
    }
    li.addEventListener('click', () => {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000);
  }

  let isPlaying = false;

  const play = document.getElementById('play');
  play.addEventListener('click', () => {
    if (isPlaying === false) {
      playSlideshow();
      play.textContent = 'Pause';
    } else {
      clearTimeout(timeoutId);
      play.textContent = 'Play';
    }
    isPlaying = !isPlaying;
  });
}

