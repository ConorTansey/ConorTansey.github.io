$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20 ){
             $('.navbar').addClass("sticky"); 
        } else {    
            $('.navbar').removeClass("sticky"); 
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show"); 
        } else {
            $('.scroll-up-btn').removeClass("show"); 
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Software Engineering", "Machine Learning", "Data and Mathematics"],
        typeSpeed: 100,
        backSpeed: 60, 
        loop: true   
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60, 
        loop: true   
    });
});