window.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    mousewheel: {
      sensitivity: 1,
    },

    autoplay: {
      delay: 2500,
      stopOnLastSlide: true,
    },

    speed: 1200,

    effect: 'fade',

    fadeEffect: {
      crossFade: false,
    },

  })

  const tabsBtn = document.querySelectorAll(".section-working-item")


  tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      let currentBtn = item
      let tabId = currentBtn.getAttribute("data-tab")
      let currentTab = document.querySelector(tabId)

      tabsBtn.forEach(function (item) {
        item.classList.remove('tab-content-active')
      })


      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })

      currentBtn.classList.add('tab-content-active')
      currentTab.classList.add('tab-content-active')

    })
  })


  $(function () {
    $("#accordion").accordion({
      active: 0,
      animate: {
        duration: 500,
        easing: 'swing',
      },
      heightStyle: 'content',
      classes: {
        "ui-accordion-header": "subtitle"
      },
    })
  })


  $('.section-faq__item').click(function () {
    $(this).toggleClass('section-faq__plus-active').next().slideToggle()
    cure
    $('.section-faq__item').not(this).removeClass('section-faq__plus-active').next().slideUp()
    })

})


