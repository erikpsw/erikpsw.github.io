$(function() {
    // Smooth scrolling for navigation links
    $('#start_box a').on('click', function(event) {
        // Check if the link has a hash value
        if (this.hash !== "") {
            event.preventDefault(); // Prevent default anchor click behavior

            var hash = this.hash; // Store hash

            // Use jQuery's animate() method for smooth page scroll to the bottom
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $(hash).height()-30
            }, 300);
        }
    });

    // Add hover effect to navigation links
    $('#start_box a').hover(
        function() {
            $(this).css('color', '#1a73e8'); // Change color on hover
        },
        function() {
            $(this).css('color', ''); // Revert color when not hovering
        }
    );

    // Add hover effect to social icon
    $('.social_list svg').hover(
        function() {
            $(this).css('color', '#1a73e8'); // Change color on hover
        },
        function() {
            $(this).css('color', 'black'); // Revert color when not hovering
        }
    );
})