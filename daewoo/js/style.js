$(function(){
//스와이퍼이미지
var mySwiper = new Swiper ('.swiper-container', {
   // Optional parameters
   loop: true,
   autoplay: {
   delay: 3000,
 },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 })

// 스크롤 simplebar
var scroll=new SimpleBar($('#txt-wrap')[0]);

// 네비
$(window).resize(function(){
  dev=$(window).width();
  // if(dev < 768){//모바일
  //   console.log('모바일');
  //   $('nav > ul > li').click(function(){
  //     $(this).children('ul').stop().slideToggle(500);
  //   })
  // }else{//모바일아닐때
  //   console.log('모바일이상');
  //   $('header nav > ul').stop().show();
  //   $('nav ul > li').stop().mouseenter(function(){
  //     $('nav ul > li > ul').stop().slideDown(500);
  //   }).mouseleave(function(){
  //     $('nav ul > li > ul').stop().slideUp(500);
  //   })
  // }
}).resize();

$(window).resize(function(){
  dev=$(window).width();
  if(dev < 768){//모바일
    console.log('모바일');
    //리사이징후에는 무조건 숨김처리
    $('header nav > ul').hide();
    $('nav ul > li').off('mouseenter');
    $('nav ul > li').off('mouseleave');
    $('nav ul ul').removeAttr('style');
  }else{//모바일아닐때
    //pc네비게이션
    //모바일토글로 전체메뉴가 닫혀버렸다면 보여준다.
    $('nav > ul > li').off('click');
    $('header nav > ul').show();
    //1depth메뉴 마우스 올렸을 때 2depth메뉴 활성화
    $('nav ul > li').mouseenter(function(){
      $('nav ul > li > ul').stop().slideDown(500);
    }).mouseleave(function(){
      $('nav ul > li > ul').stop().slideUp(500);
    })
  }
  $('.main-ad').removeAttr('style');
}).resize();


//모바일 토글메뉴버튼
$('.m-nav a').click(function(){
  $('.m-nav i').toggleClass('fa-bars fa-times');
  //전체 네비게이션 창을 열었다 닫았다 처리
  $('header nav > ul').stop().slideToggle();
  //1depth메뉴 클릭했을 때 해당 2depth메뉴 활성화
  $('nav > ul > li').click(function(){
    $(this).children('ul').stop().slideToggle(500);
  })
})


// 화면전환 vegas
  $('.main-ad').vegas({
      slides: [
          { src: 'images/visual1.jpg' },
          { src: 'images/visual3.jpg' },
          { src: 'images/visual2.jpg' },
          { src: 'images/visual4.jpg' }
      ]
  });

// 해당 컨텐츠 이동
$('.scroll-nav div a').click(function(e){
  e.preventDefault();
  var id=$(this).attr('href');
  $('html, body').animate({
    scrollTop:$(id).offset().top-100
  },800);
})

$(window).scroll(function(){
  var a=$('#a').offset().top;
  var b=$('#b').offset().top;
  var c=$('#c').offset().top;
  var d=$('#d').offset().top;
  var windowTop=$(window).scrollTop()+100;
  // console.log(a,b,c,d,windowTop);

  var index;
  if(windowTop>=a && windowTop<b){
    index=0;
  }else if(windowTop>=b && windowTop<c){
    index=1;
  }else if(windowTop>=c && windowTop<d){
    index=2;
  }else if(windowTop>=d){
    index=3;
  }
  //활성화상태초기화
  $('.scroll-nav > div').removeClass('on');
  //해당 영역의 메뉴만 활성화
  $('.scroll-nav > div').eq(index).addClass('on');
})


//공지사항 롤링
//3초마다 위에있는 리스트를 숨기고 마지막 위치에 다시 붙이는 작업을 반복 수행


//마우스를 공지사항 내용에 올렸을 때 롤링 멈추기
// $('.recruit-info ul li').on('mouseenter',function(){
//   //notice라는 이름을 호출해서 롤링작업을 멈추기
//   clearInterval(recruit);
// }).on('mouseleave',function(){
//   //다시 수행하도록 호출
//   recruit=setInterval(recruitRolling,3000);
// })

// family-site
$('.family-site > p').click(function(e){
  e.preventDefault();
  $('.family-site ul').toggle();
  $('.family-site  p a i').toggleClass('fa-chevron-up fa-chevron-down');
})






















})
