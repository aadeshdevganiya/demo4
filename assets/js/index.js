$(document).ready(function () {
    $('#hour-12').click(function () {
        $('.hour-24-main').hide() // Toggles the visibility of the time slots
        $('.hour-12').show()
    });

    $('#hour-24').click(function () {
        $('.hour-24-main').show() // Toggles the visibility of the time slots
        $('.hour-12').hide()
    });

    $('.hours-12-checkbox-cls').click(function () {
        // Get the parent .inner-time-wrap of the checkbox that was clicked
        const parentDiv = $(this).closest('.inner-time-wrap');
        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            parentDiv.css('opacity', '1'); // Set opacity to 1 when checked
            parentDiv.css('background-color', '#C8E1CD')
            parentDiv.css('transition', '0.5s')
            parentDiv.css('color', '#000')
        } else {
            // Check if there are any other checked checkboxes in the same .inner-time-wrap
            const anyChecked = parentDiv.find('.hours-12-checkbox-cls:checked').length > 0;
            parentDiv.css('opacity', anyChecked ? '1' : '0.7'); // Set opacity based on other checked checkboxes
            parentDiv.css('background-color', '#F5F5F5 ')
            parentDiv.css('color', '#bebebe')
        }
    });
    $('.hours-24-checkbox-cls').click(function () {
        // Get the parent .inner-time-wrap of the checkbox that was clicked
        const parentDiv = $(this).closest('.inner-time-wrap');

        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            parentDiv.css('opacity', '1'); // Set opacity to 1 when checked
            parentDiv.css('background-color', '#C8E1CD')
            parentDiv.css('transition', '0.5s')
            parentDiv.css('color', '#000')
        } else {
            const anyChecked = parentDiv.find('.hours-12-checkbox-cls:checked').length > 0;
            parentDiv.css('opacity', anyChecked ? '1' : '0.7'); // Set opacity based on other checked checkboxes
            parentDiv.css('background-color', '#F5F5F5 ')
            parentDiv.css('color', '#bebebe')
        }
    });

    $('.hours-12-checkbox-cls').click(function () {
        // Get the parent .inner-time-wrap of the checkbox that was clicked
        const parentDiv = $(this).closest('.hours-12-checkbox-cls');

        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            parentDiv.css('transform', 'scale(1.5)')
            parentDiv.css('transition', '0.5s')
        } else {
            parentDiv.css('transform', 'scale(1)')
        }
    });
    $('.hours-24-checkbox-cls').click(function () {
        // Get the parent .inner-time-wrap of the checkbox that was clicked
        const parentDiv = $(this).closest('.hours-24-checkbox-cls');

        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            parentDiv.css('transform', 'scale(1.5)')
            parentDiv.css('transition', '0.5s')
        } else {
            parentDiv.css('transform', 'scale(1)')
        }
    });
});
