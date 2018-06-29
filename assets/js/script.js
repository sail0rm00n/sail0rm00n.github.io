// shorthand for document.ready
$(function() {

    $( ".work" ).hover(function() {
        $(this).find("ul.child").addClass("hover");
      }, function() {
        $(this).find("ul.child").removeClass("hover" );
      });

    // hover on about and click to go to another site
    $(".about").on("click", function() {
        window.location.href = "./about.html";
    });

    $(".contact").on("click", function() {
        window.location.href = "./contact.html";
    })

    $('#toggle').click(function() {
        $(this).toggleClass('toggle-active');
        $('#overlay').toggleClass('nav-active');
    });
});


    // hamburger icon
    // $('.icon').click(function(){
	// 	$(this).toggleClass('open');
    // });


