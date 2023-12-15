$(document).ready(function(){
    $('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
    });
});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');


hamberger.addEventListener('click',function(){
    // jena pr apply karvanu chhe e means mobileeNav jema apda mobile nu navigation chhe e
    // .classlist:  property which shows all class of mobileNav  
    //add() function will add open class
    mobileNav.classList.add('open');
})

times.addEventListener('click',function(){
    //remove : do work as name
    mobileNav.classList.remove('open');
})