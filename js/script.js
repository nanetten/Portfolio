$(document).ready(function() {
    var element = $('.nav-element a');

    element.hover(function() {
       console.log("hello");
       element.removeClass('active');
       $(this).addClass('active');
    })
    console.log("hello");
    var url = window.location.href;
    if (url.indexOf('#home') == -1 && url.indexOf('#projects') == -1 && url.indexOf('#contact') == -1) {
        window.location = url + '\#home';
    }


    $('.nav-element a')
        .mouseenter(function() {

            element.removeClass('active');
            $(this).addClass('active');
        })
        .mouseleave(function() {
            element.removeClass('active');
            console.log($(location).attr('href'));
            if (($(location).attr('href')).indexOf('#home') !== -1) {
                element.first().addClass('active');
            } else if (($(location).attr('href')).indexOf('#projects') !== -1) {
               console.log("it works");
                element.eq(1).addClass('active');
            } else {
                element.eq(2).addClass('active');
            }
        });

        $('#fullpage').fullpage({
   	      anchors: ['home_a', 'projects_a', 'contact_a'],
   	        menu: '#menu',
              scrollingSpeed: 900,
      });



});
// $('.project-selection ul li:nth-child(2)').on("click", function() {
//    $(".project-block h2").html(projectsData[1].title);
// });
