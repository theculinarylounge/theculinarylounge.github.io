/**
 * Created by venkataramana on 27/03/19.
 */
$(document).ready(function () {
    var newsletter = document.getElementsByClassName("news-letter").item(0);
    var sticky = newsletter.offsetTop - 24;

    var navHeight = document.getElementsByClassName('navbar').item(0).offsetHeight;
    var right = (document.documentElement.offsetWidth || document.body.offsetWidth) - newsletter.getBoundingClientRect().right;

    function stickyNewsLetter() {
        if (window.pageYOffset > sticky) {
            newsletter.classList.add("news-letter-sticky");
            newsletter.style.top = navHeight + 24 + 'px';
            newsletter.style.right = right + 'px';
            $('#btn-news-letter-close').find('img').first().removeClass('d-none');
        } else {
            removeStickyNewsLetter();
        }
    }

    function removeStickyNewsLetter() {
        newsletter.classList.remove("news-letter-sticky");
        newsletter.style.top = '';
        newsletter.style.right = 0;
    }

    function closeNewsLetter() {
        removeStickyNewsLetter();
        $('#btn-news-letter-close').find('img').first().addClass('d-none');
        $(window).off('scroll', stickyNewsLetter);
    }

    $(window).on('scroll', stickyNewsLetter);

    $('#btn-news-letter-close').click(closeNewsLetter);


    var API_HOST = "https://tcl-newsletter-backend-service.herokuapp.com";


    $("#subscribe-newsletter").click(function () {
        var email = $("#subscriber-email").val();
        var igree = $("#homepage-i-agree").is(':checked');
        $("#news-letter-message").hide();

        console.log(igree);
        if (igree === false) {
            $("#news-letter-message").show();

            $("#news-letter-message p ").html("You should agree that you want to receive emails from us.");

        }
        else {
            $.ajax({
                type: "POST",
                url: API_HOST + "/api/subscriber",
                data: "email=" + email,
                success: function (msg) {
                    $("#news-letter-message").show();
                    $("#news-letter-message p ").html("Thank You for subscribing to our Digital Magazine");

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown)
                    $("#news-letter-message").show();
                    $("#news-letter-message p ").html("You are already subscribed to our mailing list.");

                }
            });
        }
    });

    $(".news-letter-mobile #subscribe-newsletter-mobile").click(function () {
        var email = $("#subscriber-email-mobile").val();
        var igree = $("#homepage-i-agree-mobile").is(':checked');
        $("#news-letter-message-mobile").hide();


        if (igree === false) {
            $("#news-letter-message-mobile").show();

            $("#news-letter-message-mobile p").html("You should agree that you want to receive emails from us.");

        }
        else {
            $.ajax({
                type: "POST",
                url: API_HOST + "/api/subscriber",
                data: "email=" + email,
                success: function (msg) {
                    $("#news-letter-message-mobile").show();
                    $("#news-letter-message-mobile p ").html("Thank You for subscribing to our Digital Magazine");

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                    $("#news-letter-message-mobile").show();
                    $("#news-letter-message-mobile p ").html("You are already subscribed to our mailing list.");

                }
            });
        }
    });

    // $("#send-contact-message").click(function () {
    //     var message = {};
    //     message.email = $("#contact-sender-name").val();
    //     message.phone = $("#contact-sender-phone").val();
    //     message.option = $("#contact-sender-option").val();
    //     message.message = $("#contact-sender-message").val();
    //     $("#news-letter-message").show();
    //     $("#news-letter-message p ").html("Thank You for reaching out to us. A member of our team will get in touch with you shortly.");
    // })
});
