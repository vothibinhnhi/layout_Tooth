
        //Mobile Menu
    $('.menu-icon').click(function() {
        $("#nav").slideToggle('nav_acvite');
    });
    
    $('.menu-icon').click(function(e) {
        e.stopPropagation();
        $("#nav").toggleClass('nav_acvite');
        $("#nav").slideToggle('nav_acvite');
    });


    $('body').click(function(e) {
        if ($('#nav').hasClass('nav_acvite')) {
            $("#nav").toggleClass('nav_acvite')
        }
    });


        // search
    $('.header__navbar-icon').click(()=>{
        $('.search-container').show()
        $('#nav').hide()
    });

    $('button[type="submit"]').click((e)=>{
        e.preventDefault()
        $('.search-container').hide()
        $('#nav').show()
    });
       
        // Enroll Now
    function Enroll(){
        alert("Enroll Now");
    }
        // header__close
    document.querySelector('#megax').addEventListener("click", function() {
        document.querySelector('.header__close').style.display = "none";
    });

        // close/open content-footer
    $( function() {
        $( "#accordion" ).accordion();
    } );

    

        // Slider img
    $('.content__list-slider ').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
    });


   