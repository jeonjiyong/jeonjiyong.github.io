$(function(){
//   $("header").vegas({
//     slides: [
//         { src: "images/bg1.jpg" },
//         { src: "images/bg4.jpg" },
//         { src: "images/bg2.jpg" },
//         { src: "images/bg4.jpg" }
//     ],
//    animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
//    overlay: 'D:/dev/fortfolio/main/images/07.png'
// });
// 내비 토글 고고
  $('nav .menutoggle').on('click',function(e){
    e.preventDefault();
    $('nav .menutoggle i').toggleClass('fa-times fa-bars');
    $('nav').toggleClass('toggle');
  })




// 검색에 상용되는 정규표현식 변수
//*정규표현식 문자의 패턴을 정해서 그 패턴에 맞는 걸 찾아내는 표현식
var qsRegex;

// isotope 초기화
var $gird=$('.grid').isotope();
//카테고리 버튼 클릭시 필터링처리
$('#works .nav li').on('click',function(e){
  e.preventDefault();
  $('#works .nav li').removeClass('active');
  $(this).addClass('active');
  var sortValue=$(this).attr('data-sort-value');
  $gird.isotope({filter:sortValue});
  searchCount();
})

//검색어 작성 후 검색버튼 누르면 필터링처리
$('#btn-search').on('click',function(){
  var $quicksearch=$('.quicksearch').val();//텍스트입력창에 작성한 값 얻기
  // console.log($quicksearch);
  qsRegex=new RegExp($quicksearch, 'gi');//.gird안에 있는 문자를 전역에서 검색(대소문자 구분없이)
  //검색할 단어를 정규표현식과 일치하는지 검사 후 일치하면 필터링 처리
  $gird.isotope({filter:function(){
    // 삼항연산자 조건식? 참일때 수행 할 문장 : 거짓일 때 수행 할 문자
    return qsRegex ? $(this).text().match(qsRegex):true;
  }})
  $('.quicksearch').val('').focus();//다시 검색어를 쓸 수 있도록 초기화하고 포커스 이동
  searchCount();
})

//작업물 총 수/ 검색한 수 구하기
function searchCount(){
  var iso = $('.grid').data('isotope');
  //$('.count').html(); //태그를 포함 작성
  //$('.count').text(); //문자
  $('.count').html('총 <span class="total">'+$('.grid .item').length+'</span>개 / 검색 <span class="search">'+iso.filteredItems.length+'</span>개');
  // console.log(.filteredItems);
}
//처음에 한번만 호출
searchCount();

//프로그레스 애니메이션
   function progress(){
     $(window).resize(function(){
       var deviceW=$('body').width();//디바이스의 넓이
       if(deviceW>768){//모바일이상
         //각 아이템에 접근
         $('#works .item').each(function(){
           //각 프로그레스바에 접근
           $(this).find('.progress-bar').each(function(){
             var percent=$(this).attr('aria-valuenow');
             //각 프로그레스바의 넓이가 2초동안 변경되고 수치값도 변경해서 출력
             $(this).animate({
               width:percent
             },{
               duration:2000,
               step:function(now){
                 //실수값을 반올림해서 정수값으로 표기
                 $(this).text(Math.round(now)+'%');
               },
               complete:function(){//애니메이션 완료 후 해당 클래스 제거
                 $(this).removeClass('active, progress-bar-striped');
               }
             })
           })
         })
       }else{//모바일
         $(window).scroll(function(){
           //각 아이템에 접근
           $('#works .item').each(function(){
             //해당 아이템의 위치값을 획득
             var position=$(this).offset().top;
             var winTop=$(window).scrollTop()+400;
             console.log(winTop);
             if(position<winTop){
               //각 프로그레스바에 접근
               $(this).find('.progress-bar').each(function(){
                 var percent=$(this).attr('aria-valuenow');
                 //각 프로그레스바의 넓이가 2초동안 변경되고 수치값도 변경해서 출력
                 $(this).animate({
                   width:percent
                 },{
                   duration:2000,
                   step:function(now){
                     //실수값을 반올림해서 정수값으로 표기
                     $(this).text(Math.round(now)+'%');
                   },
                   complete:function(){//애니메이션 완료 후 해당 클래스 제거
                     $(this).removeClass('active, progress-bar-striped');
                   }
                 })
               })
             }//if문 종료
           })
         })
       }
     }).resize();
   }







})
