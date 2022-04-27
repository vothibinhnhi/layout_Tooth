
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
    var accordionHeadingEls = document.querySelectorAll(".accordion__item-minus .accordion__item-plus");

    function accordion() {
        for (let item of accordionHeadingEls) {
            let accordionIcon = item.lastElementChild;
            item.addEventListener("click", function() {
                let accordionDetails = this.nextElementSibling;

                for (let item2 of accordionHeadingEls) {
                    if (item2 != item) {
                        item2.nextElementSibling.style.maxHeight = null;
                        item2.lastElementChild.classList.remove("accordion__icon--turn");
                        item2.classList.remove('accordion__heading--active');

                        // item2.classList.remove('show--active');
                    }
                }
                item.classList.toggle("accordion__heading--active");

                accordionIcon.classList.toggle("accordion__icon--turn");
                if (accordionDetails.style.maxHeight != 0) {
                    accordionDetails.style.maxHeight = null;
                } else {
                    accordionDetails.style.maxHeight = accordionDetails.scrollHeight + "px";
                }
              
            });
        }
    }
    accordion();

                // Enroll Now
            function Enroll(){
                alert("Enroll Now");
            }
            // header__close
            document.querySelector('#megax').addEventListener("click", function() {
                document.querySelector('.header__close').style.display = "none";
            });

