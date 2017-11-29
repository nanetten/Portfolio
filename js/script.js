$(document).ready(function() {
   // var element = $('.nav-element a');
   //
   // element.hover(function() {
   //    console.log("hello");
   //    element.removeClass('active');
   //    $(this).addClass('active');
   // })
   // console.log("hello");
   // var url = window.location.href;
   // if (url.indexOf('#home') == -1 && url.indexOf('#projects') == -1 && url.indexOf('#contact') == -1) {
   //    window.location = url + '\#home';
   // }
   //
   //
   // $('.nav-element a')
   // .mouseenter(function() {
   //
   //    element.removeClass('active');
   //    $(this).addClass('active');
   // })
   // .mouseleave(function() {
   //    element.removeClass('active');
   //    console.log($(location).attr('href'));
   //    if (($(location).attr('href')).indexOf('#home') !== -1) {
   //       element.first().addClass('active');
   //    } else if (($(location).attr('href')).indexOf('#projects') !== -1) {
   //       console.log("it works");
   //       element.eq(1).addClass('active');
   //    } else {
   //       element.eq(2).addClass('active');
   //    }
   // });


   var elem = $("#projects");
   var wdow = $(window);
   var elemPos = elem.offset().top;
   $(window).resize(function() {
      //resize just happened, pixels changed
      elemPos = elem.offset().top;
   });
   var line = $(".line-wrapper");
   var count = 36;
   var count_array = [];
   for (var i = 0; i <8; i++) {
      count_array.push(count);
      count += 4;
   }
   var tl = new TimelineLite();
   tl.from(".letter-1", 0.85, {left: count_array[0] + "%"}, "letter-1")
   .from(".letter-2", 0.85, {left:  count_array[1] + "%"}, "letter-1")
   .from(".letter-3", 0.85, {left:  count_array[2] + "%"}, "letter-1")
   .from(".letter-4", 0.85, {left:  count_array[3] + "%"}, "letter-1")
   .from(".letter-5", 0.85, {left:  count_array[4] + "%"}, "letter-1")
   .from(".letter-6", 0.85, {left: count_array[5] + "%"}, "letter-1")
   .from(".letter-7", 0.85, {left:  count_array[6] + "%"}, "letter-1")
   .from(".letter-8", 0.85, {left:  count_array[7] + "%"}, "letter-1");



   line.on("click", function() {
      tl.restart();
      TweenMax.to(wdow, 0.85, {scrollTo:elemPos, ease: CustomEase.create("custom", "M0,0,C0.128,0.572,0.257,1.016,0.512,1.09,0.672,1.136,0.838,1,1,1")});
      tl.delay(0.5).timeScale(1).play();
   });

   var letter =  $(".title-wrapper .letter");
   var projects_title = $(".title-wrapper");
   var titles_left = $(".title-wrapper .left");
   var title = $(".title-wrapper .title");



   // Controller
   var controller = new ScrollMagic.Controller();

   // Scene
   var scene = new ScrollMagic.Scene({triggerElement: ".title-wrapper", triggerHook: 'onEnter'})
   .addTo(controller)
   .setTween( tl.play());


});
