$(function(){

  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      autoplay:true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

// art1-info 를 호버시 컨텐츠 변화하기
$('.art1-info> ul > li').hover(function(){
   $('.art1-info ul li>div').hide();
   $(this).find('div').toggle();
})
$('.art1-info> ul > li').mouseenter(function(){
  $(this).find('h1 a').css('color','#c35353');
})
$('.art1-info> ul > li').mouseleave(function(){
  $(this).find('h1 a').css('color','#000');
})

// art2-study 를 호버시 컨텐츠 변화하기

$('.art2-study> ul > li').hover(function(){
   $('.art2-study ul li>div').hide();
   $(this).find('div').toggle();
})
$('.art2-study> ul > li').mouseenter(function(){
  $(this).find('h1 a').css('color','#2cc6e2');
})
$('.art2-study> ul > li').mouseleave(function(){
  $(this).find('h1 a').css('color','#000');
})
// .art2 .left를 호버시 컨텐츠 변화하기


$('.art2 .left > ul > li').hover(function(){
   $('.art2 .left ul li>div').hide();
   $(this).find('div').toggle();
})













})
