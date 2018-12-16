$(function() {
    /* 
     Custom js file for assan
     */
    //preloader
    $(window).preloader({
        delay: 500
    });
    //back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();

    //tooltip
    $('[data-toggle="tooltip"]').tooltip();
    //popover
    $('[data-toggle="popover"]').popover();
    //smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 56, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function(anchor, toggle) {} // Function to run after scrolling
    });
    /**Carousel images**/
    $('.carousel-image').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /**Carousel popup**/
    $('.carousel-popup').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    /**Carousel project**/
    $('.carousel-project').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    /**Carousel project**/
    $('.carousel-project2').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    /**Carousel project**/
    $('.carousel-product').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    /**Carousel feature**/
    $('.carousel-feature').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    /**Carousel Clients**/
    $('.carousel-client').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    /**Carousel Clients**/
    $('.carousel-testimonial').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoHeight: true,
        dots: false,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.carousel-category').owlCarousel({
        loop: true,
        margin: 2,
        nav: true,
        autoHeight: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('.carousel-testimonial-dark').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoHeight: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.carousel-testimonial-grid').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoHeight: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    $('.owl-main-slide').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    wow = new WOW(
            {
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            }
    );
    wow.init();
    /**youtube video popup**/
    $('.modal-video').magnificPopup({
        type: 'iframe'
    });
    $(".menu-button").click(function() {
        $(".nav-container,.menu-button").toggleClass("nav-visible");
    });
});