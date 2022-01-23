'use strict';

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

// hairmake-slide

{
  const images = [
    'img/hair1.jpeg', 
    'img/hair2.jpeg',
    'img/hair3.jpeg',
    'img/hair4.jpeg',
    'img/hair5.jpeg',
    'img/hair6.jpeg',
    'img/hair7.jpeg',
    'img/hair8.jpeg',
    'img/hair9.jpeg',
    'img/hair10.jpeg',
    'img/hair11.jpeg',
    'img/hair12.jpeg',
    'img/hair13.jpeg',
    'img/hair14.jpeg',
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