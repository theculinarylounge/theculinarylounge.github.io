/**
 * Created by venkataramana on 25/03/19.
 */

$(document).ready(function () {


    var STEP_ID_SEQUENCE = [];
    const STEP_MAPPING = {
        'option1': 'step2_1',
        'option2': 'step2_2',
        'option3': 'step2_3',
        'option4': 'step2_4',
        'option5': 'step2_5'
    };
    var options_maintainer = {
        "option1": "Corporate Cook-offs",
        "option2": "Kids birthday parties",
        "option3": "Personalised private dining",
        "option4": "Culinary art education",
        "option5": "Rent our studio"

    }
    const step1Next = function (optionId) {

        var target_step_id = STEP_MAPPING[optionId];
        $('#step1').first().addClass('d-none');
        $('#' + target_step_id).first().removeClass('d-none');
        STEP_ID_SEQUENCE.push('step1')
    };
    const step2Prev = function (step_id) {
        $('#' + step_id).first().addClass('d-none');
        $('#' + STEP_ID_SEQUENCE.pop()).first().removeClass('d-none');
    };
    const step2Next = function (step_id) {
        $('#' + step_id).first().addClass('d-none');
        $('#step3').first().removeClass('d-none');
        STEP_ID_SEQUENCE.push(step_id);
    };
    const step3Prev = function () {


        $('#step3').first().addClass('d-none');
        $('#' + STEP_ID_SEQUENCE.pop()).first().removeClass('d-none');
    };


    const step3Next = function () {
        var option = document.getElementById('selected-service-option').value
        var service_type = options_maintainer[option];
        var message = {};
        message.name = document.getElementById('name').value;
        message.phone = document.getElementById('phone').value;
        message.email = document.getElementById('email').value;
        message.email = document.getElementById('email').value;
        message.service_type = service_type;
        console.log("message", message);
        if (option === "option1") {
            message.date = document.getElementById('cookoff-datepicker').value;
            message.time_slot = $("#step2_1 input[name='options']:checked").val();
            console.log(message);
        }
        else if (option === "option2") {
            message.date = document.getElementById('kids-datepicker').value;
            message.time_slot = $("#step2_2 input[name='options']:checked").val();
        }
        else if (option === "option3") {
            message.date = document.getElementById('private-datepicker').value;
            message.time_slot = $("#step2_3 input[name='options']:checked").val();
        } else if (option === "option4") {
            message.class_name = $("#step2_4 input[name='options']:checked").val();
        } else if (option === "option5") {
            message.date =

                message.time_slot = document.getElementById('hoursTheme').value;
            message.requirement = document.getElementById('requirement').value;
        }

        var API_HOST = "http://localhost:8002";

        $.post(API_HOST + "/api/booking",
            message,
            function (data, status) {
                // $("#news-letter-message").show();
                // $("#news-letter-message p ").html("Thank You for reaching out to us. A member of our team will get in touch with you shortly.");
            });


        $('#step3').first().addClass('d-none');
        $('#step4').first().removeClass('d-none').addClass('d-flex');
        STEP_ID_SEQUENCE.push('step3');
    };
    const step2PrevHandler = function () {
        var current_step_id = $(this).parent().attr('id');
        step2Prev(current_step_id);
    };
    const step2NextHandler = function () {
        var current_step_id = $(this).parent().attr('id');
        step2Next(current_step_id);
    };

    $('#step2_1_prev').click(step2PrevHandler);
    $('#step2_2_prev').click(step2PrevHandler);
    $('#step2_3_prev').click(step2PrevHandler);
    $('#step2_4_prev').click(step2PrevHandler);
    $('#step2_5_prev').click(step2PrevHandler);
    $('#step3_prev').click(step3Prev);


    $('#step1_submit').click(function (e) {
        console.log("step1_submit")
        var activeElem = $('.btn-group-toggle .active > input');
        if (activeElem !== undefined && activeElem.length > 0) {
            var optionId = activeElem.first().attr('id');

            document.getElementById('selected-service-option').value = optionId;
            step1Next(optionId);
        }
        console.log(e)
    });
    $('#step2_1_submit').click(step2NextHandler);
    $('#step2_2_submit').click(step2NextHandler);
    $('#step2_3_submit').click(step2NextHandler);
    $('#step2_4_submit').click(step2NextHandler);
    $('#step2_5_submit').click(step2NextHandler);
    $('#step3_submit').click(step3Next);


    var url = new URL(location.href);
    var service_type_selection = url.searchParams.get("service_type");
    console.log(service_type_selection);
    if (service_type_selection) {
        document.getElementById('selected-service-option').value = service_type_selection;

        step1Next(service_type_selection);
    }

    $(function () {
        $(".datepicker").datepicker({
            "showOn": "button",
            "buttonImage": "/assets/img/dateicon.png",
            "buttonImageOnly": true,
            "buttonText": "Select date"
        });
    });


});