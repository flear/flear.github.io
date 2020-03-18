(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery



    function buttonUp(){
         var valux = $('.search-input').val();
            valux = $.trim(valux).length;
            if(valux !== 0){
                $('.search-submit').css('z-index','99');
            } else{
                $('.search-input').val('');
                $('.search-submit').css('z-index','-999');
            }
    }

    $(document).ready(function(){
        var submitIcon = $('.icon-search');
        var submitInput = $('.search-input');
        var searchBox = $('.search');
        var isOpen = false;

        $(document).mouseup(function(){
            if(isOpen == true){
            submitInput.val('');
            $('.search-submit').css('z-index','-999');
            submitIcon.click();
            }
        });

        submitIcon.mouseup(function(){
            return false;
        });

        searchBox.mouseup(function(){
            return false;
        });

        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('search-open');
                isOpen = true;
            } else {
                searchBox.removeClass('search-open');
                isOpen = false;
            }
    });

});
