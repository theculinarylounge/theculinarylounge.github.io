/**
 * Created by venkataramana on 27/03/19.
 */
$(document).ready(function () {

    $("#send-contact-message").click(function () {
        var message = {};
        message.name = $("#contact-sender-name").val();
        message.phone = $("#contact-sender-phone").val();
        message.option = $("#fieldSelect").val();
        message.message = $("#contact-sender-message").val();
        var API_HOST = "https://tcl-newsletter-backend-service.herokuapp.com"
        $.post(API_HOST + "/api/contact",
            message,
            function (data, status) {
                $("#news-letter-message").show();
                $("#news-letter-message p ").html("Thank You for reaching out to us. A member of our team will get in touch with you shortly.");
         });


    })
});
