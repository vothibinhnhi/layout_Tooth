
        //Mobile Menu
    $('.menu-icon').click(function(e) {
        e.stopPropagation();
        $("#nav").toggleClass('nav_acvite');
    
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
    })
        
    
        // drop
        
        // Enroll Now
    function Enroll(){
        alert("Enroll Now");
    }
        // header__close
    document.querySelector('#megax').addEventListener("click", function() {
        document.querySelector('.header__close').style.display = "none";
    });

