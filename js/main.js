const hamburger=document.querySelector('.hamburger');
const height=document.querySelector('.nav');
const collapse=document.querySelector('.nav-items');
const responsive={
    0:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    },
}

hamburger.addEventListener('click',() => {
    collapse.classList.toggle('collapse');
    height.classList.toggle('strech');
});

// owl carousel for blog

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive:responsive,
});

$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000);
});

// AOS instance
AOS.init();