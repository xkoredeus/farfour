$(() => {
    // offer
    const offerAnimation = gsap.timeline({
        defaults: {
            ease: "power3.inOut"
        },
        paused: true,
        scrollTrigger: {
            trigger: '.banner',
            start: "top center",
        }
    });

    offerAnimation.to('.offer__in', {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1.2,
        delay: 0.5
    });

    offerAnimation.to('.offer__bottom', {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.5,
        delay: 0
    });

    // $(window).on('load', );
    $(window).on('load', function () {

        $('.preloader__wrp').fadeOut();

        setTimeout(() => {
            offerAnimation.play()
        }, 500)
    });
});

$(() => {

});

$(() => {
    //sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 5){
            $('body').addClass('sticky-header');
        } else{
            $('body').removeClass('sticky-header');
        }
    });
});

$('.js-menu').on('click', function () {
    $(this).toggleClass('header__burger--active');
    $('.header').toggleClass('header--active');
    $('.burger').toggleClass('burger--active');
});

$('.js-toggle-menu-dropdown').on('click', function () {
    if (!($(this).hasClass('menu__link-chevron--active'))) {
        $('.menu__link-chevron').removeClass('menu__link-chevron--active');
        $('.menu__dropdown').slideUp();
        $(this).toggleClass('menu__link-chevron--active');
        $(this).parent('.menu__link-wrapper').next('.menu__dropdown').slideToggle();
    } else {
        $(this).removeClass('menu__link-chevron--active');
        $(this).parent('.menu__link-wrapper').next('.menu__dropdown').slideUp();
    }
});

const toggleMenu = () => {
    $('.header').removeClass('header--active');
    $(this).removeClass('header__burger--active');
    $('.burger').removeClass('burger--active');
};

$(() => {
    $(window).on('mousewheel wheel', toggleMenu);
    $(window).on('touchmove', toggleMenu);
});

$(() => {
    $(document).on('click', function (e) {
        var container = $('.header');

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            toggleMenu();
        }

    });
});

$(() => {
    $('.js-prevent-default').on('click', function (e) {
        e.preventDefault();
    });
});

$(() => {
    $('.tabs__content-item:not(:first-child)').hide();
    $('.tabs__list-item:first-child').addClass('active');
    $('.tabs__list > .tabs__list-item').click(function tabListLiClick() {
        if (!($(this).hasClass('active'))) {
            const thisLi = $(this);
            const numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').hide()
                .eq(numLi)
                .fadeIn('slow');
        }
    });
});

$(() => {
    $('.js-offer-scroll').on('click', function scrollToDirections() {
        gsap.to(window, {duration: 1.4, scrollTo: {y: '.content', offsetY: 50}});
    });
})

$(() => {
    const restSlider = new Swiper(".js-rest-slider", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".js-rest-slider-next",
            prevEl: ".js-rest-slider-prev",
        },
        speed: 1000,
        breakpoints: {
            0: {
                spaceBetween: 10,
            },
            768: {
                spaceBetween: 15,
            },
            1200: {
                spaceBetween: 25,
            },
            1572: {
                spaceBetween: 30,
            },
        }
    });
});
$(() => {
    const aboutSlider = new Swiper(".js-about-slider", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".js-about-slider-next",
            prevEl: ".js-about-slider-prev",
        },
        speed: 1000,
        breakpoints: {
            0: {
                spaceBetween: 10,
            },
            768: {
                spaceBetween: 15,
            },
            1200: {
                spaceBetween: 25,
            },
            1572: {
                spaceBetween: 40,
            },
        }
    });
});

// console.log(mdc)
// const powerSlider = mdc.slider.MDCSlider.attachTo(document.querySelector('.js-power-slider.mdc-slider'));

$(() => {
    $('.quantity').on('click', '.quantity-minus, .quantity-plus', function quantityClick() {
        const input = $( this ).siblings( '.quantity-num' );
        if ( (input.val() > 1) && ($( this ).hasClass( 'quantity-minus' ) ) ) {
            input.val( +input.val() - 1 );
        } else if (  (input.val() < +input.attr('max') ) && ( $( this ).hasClass( 'quantity-plus' ) ) ) {
            input.val( +input.val() + 1 );
        }
    });
})

$(() => {
    /* Локализация datepicker */
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    if ($(window).width() > 768) {
        $(".datepicker--in").datepicker({
            minDate: 0
        });

        $(".datepicker--out").datepicker({
            minDate: 0
        });
    } else {
        const datepicker = $(".datepicker");
        datepicker.focus(function () {
            this.type = 'date';
            this.trigger('click');
        })
        datepicker.focusout(function () {
            this.type = 'text';
        })
    }

});

//marquee
$(() => {
    gsap.config({nullTargetWarn:false});
    const marquee = $('.marquee__text--1');
    // set a default rate, the higher the value, the faster it is
    let rate = 200;
    // get the width of the element
    let distance = marquee.parent().width() + marquee.width() + 50;
    // get the total width of the element
    let totalDistance = distance;
    // get the duration of the animation
    // for a better explanation, see the quoted codepen in the first comment
    let time = totalDistance / rate;

    gsap.to(marquee, time, {
        repeat: -1,
        x: '-' + totalDistance,
        ease: Linear.easeNone,
    });
});

$(() => {
    gsap.utils.toArray('.content > section').forEach((el) => {

        gsap.timeline({
            defaults: {
                ease: "power3.inOut",
            },
            scrollTrigger: {
                trigger: el,
                start: "top center",
            }
        })
            .fromTo(el, 1, {
                autoAlpha: 0,
                // yPercent: 5,
            }, {
                autoAlpha: 1,
                // yPercent: 0,
            })
    });

    // offer
    const footerAnimation = gsap.timeline({
        defaults: {
            ease: "power3.inOut"
        },
        indicators: true,
        scrollTrigger: {
            trigger: '.footer',
            start: "top 70%",
        }
    });

    footerAnimation.fromTo('.footer', 1, {
            autoAlpha: 0,
            yPercent: 5,
        }, {
            autoAlpha: 1,
            yPercent: 0,
        })
});


