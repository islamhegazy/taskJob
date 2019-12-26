$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
    /********col-sm-6*********/
    (function($) {
        jQuery.fn.checkEmpty = function() {
            return !$.trim(this.html()).length;
        };
    }(jQuery));

    $('.col-sm-6').each(function() {
        if ($(this).checkEmpty()) {
            $(this).remove();
        }
    });
    /*****************************************************/

    /* control sidebar menu open drop down menu */
    var A = ['purchases'];
    for (var i = 0; i <= A.length - 1; i++) {
        if (window.location.href.indexOf(A[i]) > -1) {
            $("#stores").addClass('in');
            $('ul.collapse li a[data-class="' + A[i] + '"]').addClass('clicked_link');
            $("#stores").parent().children('a').addClass('active')
        }
    }

    $('.selectpicker').selectpicker();

    $('#sidebar ul.ulParent>li>a').on('click', function() {
        $(this).parent().siblings().children('.collapse').removeClass('in');

    });



    $('.con').css('min-height', ($(window).outerHeight() - ($('.contentTop').outerHeight() + $('footer').outerHeight())));
    $(window).on('load resize scroll', function() {
        $('.con').css('min-height', ($(window).outerHeight() - ($('.contentTop').outerHeight() + $('footer').outerHeight())));
    });
    /************** to top of page **************/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 600) {
            $(".to-top").fadeIn(1000);
        } else {
            $(".to-top").fadeOut(1000);
        }
    });

    $(".to-top").click(function() {
        //$(window).scrollTop(0);
        $("html,body ").animate({
                scrollTop: 0
            },
            600
        );
    });

    /************** sidebar scroll **************/
    $("#sidebar").mCustomScrollbar({
        scrollInertia: 100,
        autoHideScrollbar: true,
        theme: "minimal",
        advanced: {
            updateOnContentResize: true
        }
    });
    $("body").niceScroll({
        cursorcolor: "#3095e4",
        cursorwidth: "9px",
        background: "linear-gradient(to top, #15243a 0%, #2c5a80 100%)",
        cursorborder: "1px solid #3095e4",
    });
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = yyyy + '/' + mm + '/' + dd;
    $('#Purchases_Date,#Invoice_Date').val(today);


});