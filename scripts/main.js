window.addEventListener('DOMContentLoaded', (event) => {
  // ハンバーガー
  const JsHamburgerBtn = document.querySelector('.bl_hamburger_button');
  const JsHamburgerMenu = document.querySelector('.bl_hamburger_menu');
  const JsHamburgerMenuLi = document.querySelectorAll('.js_a');
  const body = document.body;

  JsHamburgerBtn.addEventListener('click',function() {
    body.classList.toggle('js_hamburger_no_scroll');
    JsHamburgerBtn.classList.toggle('js_hamburger_open');
    JsHamburgerMenu.classList.toggle('js_hamburger_open');
  });
  
  for (let i = 0; i < JsHamburgerMenuLi.length; i++) {
    JsHamburgerMenuLi[i].addEventListener('click',function() {
      body.classList.toggle('js_hamburger_no_scroll');
      JsHamburgerBtn.classList.remove('js_hamburger_open');
      JsHamburgerMenu.classList.remove('js_hamburger_open');
    }); 
  }
 

  // function disableScroll(event) {
  //     event.preventDefault();
  //   }
    

//     // イベントと関数を紐付け
//   document.addEventListener('touchmove', disableScroll, { passive: false });

  // loading
  window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }

  // header 
  const Header = document.querySelectorAll('.js_header');
  const HeaderHight = document.querySelector('.ly_fv').clientHeight;

  window.addEventListener('scroll',function() {
    const Offset = window.pageYOffset;
    for (let i = 0; i < Header.length; i++) {
      if (HeaderHight < Offset) {
        Header[i].classList.add('header-scroll');
      } else {
        Header[i].classList.remove('header-scroll'); 
      }
    }
  });

    // intersection
  const target = document.querySelectorAll('.target')
  const targetArray = Array.prototype.slice.call(target);

  //オプション設定!
  const options = {root: null, rootMargin: '0% 0%', threshold: 0};
    window.addEventListener('scroll', () => {
        options.rootMargin = '0% 0%'
        //const options = {
        //    root: null,
        //    rootMargin: '20% 0%',
        //    threshold: 0
        //};
  });



  const observer = new IntersectionObserver(callback, options)
  targetArray.forEach((tgt) => {
    observer.observe(tgt)
  });


  function callback(entries) {
    entries.forEach(function(entry, i) {
      const target = entry.target;
      if (entry.isIntersecting && !target.classList.contains('is-active')) {
        const delay = i * 100
        setTimeout(function(){
          target.classList.add('is-active');
        },delay);
      }
    });
  };

  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click', (e) => {
      
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href'); 
    let targetElement = document.getElementById(href.replace('#', '')); 
    
    const rect = targetElement.getBoundingClientRect().top; 
    const offset = window.pageYOffset;
    const gap = 80;
    const target = rect + offset - gap;

    window.scrollTo({
        top: target,
        behavior: 'smooth',
    });
  });
  }
});


