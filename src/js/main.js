$(document).ready(function(){
  $(window).on('scroll', function(){
     if (window.scrollY > 200) {
       document.getElementById('toTop').style.visibility = 'visible';
     } else {
       document.getElementById('toTop').style.visibility = 'hidden';
     }
  })
});
function scrollToTop(){
    $('html, body').animate({scrollTop: 0},500);
}
function toggleSearchForm(){
  $('.top-menu__search-wrapper').toggleClass('active');
}
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
function prevSidebarSlide(){
  $('.card__sidebar-slider').slick('slickPrev');
}
function nextSidebarSlide(){
  $('.card__sidebar-slider').slick('slickNext');
}
function prevViewedSlide(){
  $('.card__viewed-slider').slick('slickPrev');
}
function nextViewedSlide(){
  $('.card__viewed-slider').slick('slickNext');
}
function prevAddSlide(){
  $('.card__add-slider').slick('slickPrev');
}
function nextAddSlide(){
  $('.card__add-slider').slick('slickNext');
}
function prevOrderSlide(){
  $('.order__steps').slick('slickPrev');
}
function nextOrderSlide(){
  $('.order__steps').slick('slickNext');
}
function changeMediaTab(tab){
  if (tab === 'foto'){
    $('#mediaTabFoto').addClass('active');
    $('#mediaTabButtonFoto').addClass('active');
    $('#mediaTabVideo').removeClass('active');
    $('#mediaTabButtonVideo').removeClass('active');
  } else {
    $('#mediaTabVideo').addClass('active');
    $('#mediaTabButtonVideo').addClass('active');
    $('#mediaTabFoto').removeClass('active');
    $('#mediaTabButtonFoto').removeClass('active');
  }
}
function changeCardTab(tab){
  $('#cardDesc').removeClass('active');
  $('#cardReview').removeClass('active');
  $('#cardMount').removeClass('active');

  $('#cardDescTab').removeClass('active');
  $('#cardReviewTab').removeClass('active');
  $('#cardMountTab').removeClass('active');
  $('#'+tab).addClass('active');
  $('#'+tab+'Tab').addClass('active');
}