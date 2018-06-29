// shorthand for document.ready
$(function() {
    // hover accepts two functions
    // 1st function fires when mouse is in state of hover
    // $('ul.parent > li').hover(function() {
    //     // $('this').find('ul.child').stop().show(200);
    //     $('this').find('ul.child').css('display', 'block');
    //     console.log("Hi")
    // // 2nd function fires when mouse exits hover state
    // }, function() {
    //     $('this').find('ul.child').stop().hide(200);
    // });
    
    // $( "ul.parent > li" ).hover(function() {
    //       $(this).find("ul.child").addClass("hover");
    //       console.log("hello")
    //     }, function() {
    //       $(this).find("ul.child").removeClass("hover" );
    //     }
    // );

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

    // hamburger icon
    // $('.icon').click(function(){
	// 	$(this).toggleClass('open');
    // });

    $('#toggle').click(function() {
        $(this).toggleClass('toggle-active');
        $('#overlay').toggleClass('nav-active');
    });
});


