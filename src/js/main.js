function toggleNavMore(){
  $('.top-menu__nav-item.more').toggleClass('active');
}

function toggleNavSlide(target){
  var isActive = target.classList.contains('active');
  $('.main__nav-item').removeClass('active');
  if (isActive){
    $(target).removeClass('active')
  } else {
    $(target).addClass('active');
  }
}

function prevMainSlide(){
  $('.main__slider-wrapper').slick('slickPrev');
}
function nextMainSlide(){
  $('.main__slider-wrapper').slick('slickNext');
}
function prevDiscountsSlide(){
  $('.discounts__slider').slick('slickPrev');
}
function nextDiscountsSlide(){
  $('.discounts__slider').slick('slickNext');
}
function nextConstructorSlide(){
  $('.constructor__slider').slick('slickNext')
}
