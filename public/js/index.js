//Mobile Navbar Toggle
$('#navToggle').on('click', function() {
    if ($(window).width() < 941) {
        if (!$('.nav-item').hasClass('fadein')) {
            $('.nav-item').css('transform', 'translateX(100%)');
            $('.nav-item').removeClass('fadeout');
            $('.nav-item').addClass('fadein');
        } else {
            $('.nav-item').css('transform', 'translateX(0%)');
            $('.nav-item').removeClass('fadein');
            $('.nav-item').addClass('fadeout');
        }
    }
})

// Contact - Allows user to upload doc ro submit form by clicking icon instead of just on label
$('#uploadIcon').on('click', function() {
    $('#fileLabel').click();
})

$('#emailIcon').on('click', function() {
    $('#submitButton').click();
})

$('#submitButton').on('click', function() {
    $('#contactForm').submit();
})

// Contact - Changes Icon based on if file is present or not
$('#fileUpload').on('change', function() {
    var fileName = $('#fileUpload')[0].files[0].name;
    console.log($('#fileUpload')[0].files);
    if ($('#fileUpload')[0].files.length > 0) {
        $('#uploadIcon').hide();
        $('#deleteIcon').show();
        $('.file-label').text(fileName);
    } else {
        $('#deleteIcon').hide();
        $('#uploadIcon').show();
        $('.file-label').text("Select a File?");
    }
})

//Contact - Removes the Selected File
$('#deleteIcon').on('click', function() {
    var fileName = $('#fileUpload')[0].files[0].name;
    $('#fileUpload')[0].value = null;
    console.log($('#fileUpload')[0].files);
    if ($('#fileUpload')[0].files.length === 0) {
        $('#deleteIcon').hide();
        $('#uploadIcon').show();
        $('.file-label').text("Select a File?");
    } else {
        $('#uploadIcon').hide();
        $('#deleteIcon').show();
        $('.file-label').text(fileName);
    }
})

// TODO: Make email function work