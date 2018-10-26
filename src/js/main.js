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
  $('.main-discounts__slider').slick('slickPrev');
}
function nextDiscountsSlide(){
  $('.main-discounts__slider').slick('slickNext');
}
function nextConstructorSlide(){
  $('.constructor__slider').slick('slickNext')
}
function prevDiplomasSlide(){
  $('.diplomas__slider').slick('slickPrev');
}
function nextDiplomasSlide(){
  $('.diplomas__slider').slick('slickNext');
}
function prevNewsSlide(){
  $('.main-news__slider').slick('slickPrev');
}
function nextNewsSlide(){
  $('.main-news__slider').slick('slickNext');
}
function nextClientsSlide(){
  $('.clients__slider').slick('slickNext');
}
function changeMediaTab(tab){
  if (tab === 'foto'){
    $('#mediaTabFoto').addClass('active');
    $('#mediaTabButtonFoto').addClass('media__button_active');
    $('#mediaTabVideo').removeClass('active');
    $('#mediaTabButtonVideo').removeClass('media__button_active');
  } else {
    $('#mediaTabVideo').addClass('active');
    $('#mediaTabButtonVideo').addClass('media__button_active');
    $('#mediaTabFoto').removeClass('active');
    $('#mediaTabButtonFoto').removeClass('media__button_active');
  }
}