jQuery(document).ready(function ($) {

    $(window).blur(function () {
        document.title = "stop running";
    });

    $(window).focus(function () {
        document.title = "anguish";
    });

    $('.enter>img').on('click', function () {
        var audio = new Audio('assets/song.mp3');
        audio.volume = 0.2;
        audio.play();
        $('.enter').fadeOut(100);
    })

    $('.login').click(function () {
        window.location.href = '/login';
    });

    $('.roster').click(function () {
        $('.wrap').fadeOut(100)
        $('.roster-wrap').fadeIn(250);
    });

    $('.login').on({

        mouseenter: function () {
            $(this).find('.overlay').css('background', 'rgba(0,0,0,0)').fadeIn(100)
        },

        mouseleave: function () {
            $(this).find('.overlay').css('background', 'rgba(0,0,0,.5)').fadeIn(100)
        }

    })

    $('.roster').on({

        mouseenter: function () {
            $(this).find('.overlay').css('background', 'rgba(0,0,0,0)').fadeIn(100)
        },

        mouseleave: function () {
            $(this).find('.overlay').css('background', 'rgba(0,0,0,.5)').fadeIn(100)
        }

    })

});
