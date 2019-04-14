$(document).ready(function () {
    const form = $('#contactUsForm'),
        wizard = $("#smartwizard"),
        btnPrev = $("#prev-btn"),
        btnNext = $("#next-btn"),
        btnSubmit = $("#submit-btn");

    wizard.smartWizard({
        useURLhash: false,
        toolbarSettings: {
            showNextButton: false, 
            showPreviousButton: false
        }
    });

    $('#hideMe').removeClass('hidden');
    Select2Helper.InitAndBeautifyError();
    let validator = Validator.InitializeValidator('#contactUsForm');

    wizard.on("leaveStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
        let isValid = true;

        if (stepDirection == 'forward') {
            isValid = Validator.ValidateForm(validator, form);
        } 

        return isValid; 
    });

    wizard.on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {

        if (stepPosition === 'first') {
            btnPrev.addClass('disabled');
            btnNext.parent().removeClass('hidden');
            btnSubmit.parent().addClass('hidden')
        } else if (stepPosition === 'final') {
            btnNext.parent().addClass('hidden');
            btnSubmit.parent().removeClass('hidden')
        } else {
            btnPrev.removeClass('disabled');
            btnNext.parent().removeClass('hidden');
            btnSubmit.parent().addClass('hidden')
        }
    });

    btnPrev.on("click", function () {
        wizard.smartWizard("prev");
        return true;
    });

    btnNext.on("click", function () {
        wizard.smartWizard("next");
        return true;
    });

    btnSubmit.on("click", function () {
        form.submit();
    });

    $("#Province").on('change', function () {
        var province = $('#Province').select2('val');
        $('#City').html('').trigger('change');

        $.ajax({
            type: "POST",
            url: '/api/Cities',
            data: JSON.stringify({ province: province }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: onSuccess
        });
    });

    function onSuccess(data) {
        let elementCache = [];

        elementCache.push('<option value="0">Select</option>');

        for (var d = 0; d < data.length; d++) {
            let item = data[d];

            let option = '<option value="' + item + '">' + item + '</option>';

            elementCache.push(option);
        }

        $('#City').html(elementCache.join("")).trigger('change');
    }
});