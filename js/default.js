$(document).ready(function(){

    //contact 연락처 넣기
    let myphone = '010-2433-0218'
    $('.callBtn').click(function(){
        document.location.href='tel:'+myphone;
    });
    
    //aos
    AOS.init();


    //메인 메뉴탭버튼.
    $("#gnb>ul>li>a").click(function(event){ 
        event.preventDefault(); 
        if ($('#header').hasClass('on') == true){
            $('html,body').animate({scrollTop:$(this.hash).offset().top-80}, 1000); 
        }else{
            $('html,body').animate({scrollTop:$(this.hash).offset().top-330}, 1000);
        }            
    });
    

    //스크롤시 header.on 클래스 on/off
    $(window).scroll(function(){        
        if($(this).scrollTop() > 0){
            $("#header").addClass("on");
        }else{$("#header").removeClass("on");}
    });


    //스크롤시 메뉴에 표시.
    let aboOff = $("#about").offset();
    let proOff = $("#project").offset();
    let banOff = $("#banner").offset();
    
    $(window).scroll(function(){
        if(proOff.top > $(document).scrollTop() + 410 && $(document).scrollTop() + 410 > aboOff.top){
            $("#gnb>ul>li").removeClass("on");
            $("#gnb>ul>li.about").addClass("on");
        } else if(banOff.top > $(document).scrollTop() + 410 && $(document).scrollTop() + 410 > proOff.top){
            $("#gnb>ul>li").removeClass("on");
            $("#gnb>ul>li.project").addClass("on");
        } else if($(document).scrollTop() + 410 > banOff.top){
            $("#gnb>ul>li").removeClass("on");
            $("#gnb>ul>li.contact").addClass("on");
        }else{
            $("#gnb>ul>li").removeClass("on");
        }
    });


    //탑버튼 클릭시 위로 올라가기
    $(".topBtn, #logo").css("cursor", "pointer").click(function(
        ){$('body, html').animate({scrollTop:0}, 500);
        return false;
    });


    // 카피라이트 날짜
    const thisYear = document.querySelector('.this-year')
    thisYear.textContent = new Date().getFullYear() //20nn






    //스크롤하면 글자 노출 : test---------------------------------------
    let observer = new IntersectionObserver((e)=>{ //하단에 감시중인 박스가 등장&퇴장 시 실행.
        e.forEach((박스)=>{
            if(박스.isIntersecting){ //박스.isIntersecting = 보일때만 실행해주세요. 박스.intersectionRatio = 박스가 .5 보일때 실행.
                박스.target.style.opacity = 1;
                박스.target.style.transform = 'translateY(0)';
            } else{ //사라질때 실행
                박스.target.style.opacity = 0;
                박스.target.style.transform = 'translateY(50px)';
            }
        })
    })

    let testbox = document.querySelectorAll('.test') //.test요소를 찾기
    for(var i=0; i<=testbox.length; i++){ //text요소 개수.testbox.length
        observer.observe(testbox[i])
    }







    
});
