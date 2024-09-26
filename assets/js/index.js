$(document).ready(function () {
    // Show or hide time slots based on selected hour format
    $('#hour-12').click(function () {
        $('.hour-24-main').hide(); // Hide 24-hour slots
        $('.hour-12').show(); // Show 12-hour slots
    });

    $('#hour-24').click(function () {
        $('.hour-24-main').show(); // Show 24-hour slots
        $('.hour-12').hide(); // Hide 12-hour slots
    });

    // Handle click event for the inner-time-wrap div
    $('.inner-time-wrap').click(function (e) {
        // Prevent the event from bubbling up from checkboxes to the parent div
        if ($(e.target).is('input')) return;

        // Find the checkbox within this div and toggle its state
        const checkbox12 = $(this).find('.hours-12-checkbox-cls');
        const checkbox24 = $(this).find('.hours-24-checkbox-cls');
        const isChecked = !checkbox12.is(':checked'); // Toggle based on current state

        // Toggle checkboxes within this container
        checkbox12.prop('checked', isChecked);
        checkbox24.prop('checked', isChecked);

        // Apply scale transformation to both checkboxes
        checkbox12.css({
            'transform': 'scale(1.5)',
            'transition': 'transform 0.3s ease'
        });
        checkbox24.css({
            'transform': 'scale(1.5)',
            'transition': 'transform 0.3s ease'
        });

        // Reset the scale after 300ms
        setTimeout(() => {
            checkbox12.css('transform', 'scale(1)');
            checkbox24.css('transform', 'scale(1)');
        }, 300);

        // Update the parent div's style
        const parentDiv = $(this);
        if (isChecked) {
            parentDiv.css({
                'opacity': '1',
                'background-color': '#C8E1CD',
                'color': '#000',
                'transition': '0.5s',
            });
        } else {
            const anyChecked = parentDiv.find('.hours-12-checkbox-cls:checked').length > 0 || 
                              parentDiv.find('.hours-24-checkbox-cls:checked').length > 0;
            parentDiv.css({
                'opacity': anyChecked ? '1' : '0.7',
                'background-color': '#F5F5F5',
                'color': '#bebebe'
            });
        }
    });

    // Handle click event for 12-hour checkboxes
    $('.hours-12-checkbox-cls').click(function () {
        const isChecked = $(this).is(':checked');

        // Scale the clicked checkbox
        $(this).css({
            'transform': 'scale(1.5)',
            'transition': 'transform 0.3s ease'
        });

        // Reset scale after a short delay
        setTimeout(() => {
            $(this).css('transform', 'scale(1)');
        }, 300);

        // Check or uncheck all 12-hour checkboxes in the same parent div
        const parentDiv = $(this).closest('.inner-time-wrap');
        parentDiv.find('.hours-12-checkbox-cls').prop('checked', isChecked);

        // Update 24-hour checkboxes in the same parent div
        parentDiv.find('.hours-24-checkbox-cls').prop('checked', isChecked);

        if (isChecked) {
            parentDiv.css({
                'opacity': '1',
                'background-color': '#C8E1CD',
                'color': '#000',
                'transition': '0.5s',
            });
        } else {
            const anyChecked = parentDiv.find('.hours-12-checkbox-cls:checked').length > 0 || 
                              parentDiv.find('.hours-24-checkbox-cls:checked').length > 0;
            parentDiv.css({
                'opacity': anyChecked ? '1' : '0.7',
                'background-color': '#F5F5F5',
                'color': '#bebebe'
            });
        }
    });

    // Handle click event for 24-hour checkboxes
    $('.hours-24-checkbox-cls').click(function () {
        const isChecked = $(this).is(':checked');

        // Scale the clicked checkbox
        $(this).css({
            'transform': 'scale(1.5)',
            'transition': 'transform 0.3s ease'
        });

        // Reset scale after a short delay
        setTimeout(() => {
            $(this).css('transform', 'scale(1)');
        }, 300);

        // Check or uncheck all 24-hour checkboxes in the same parent div
        const parentDiv = $(this).closest('.inner-time-wrap');
        parentDiv.find('.hours-24-checkbox-cls').prop('checked', isChecked);

        // Update 12-hour checkboxes in the same parent div
        parentDiv.find('.hours-12-checkbox-cls').prop('checked', isChecked);

        if (isChecked) {
            parentDiv.css({
                'opacity': '1',
                'background-color': '#C8E1CD',
                'color': '#000',
                'transition': '0.5s'
            });
        } else {
            const anyChecked = parentDiv.find('.hours-12-checkbox-cls:checked').length > 0 || 
                              parentDiv.find('.hours-24-checkbox-cls:checked').length > 0;
            parentDiv.css({
                'opacity': anyChecked ? '1' : '0.7',
                'background-color': '#F5F5F5',
                'color': '#bebebe'
            });
        }
    });
});

