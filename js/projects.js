// $(document).ready(function() {
//
// // Detect scroll
// $('html').on ('mousewheel', function (e) {
//     var delta = e.originalEvent.wheelDelta;
//
//     if (delta < 0) {
//       setTimeout(function(){ nextProject(); }, 800);
//
//        console.log ('You scrolled down');
//
//     } else if (delta > 0) {
//          console.log ('You scrolled up');
//          $.fn.fullpage.setAutoScrolling(true);
//     }
// });
// function getValues(){
//   var matrix = page.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
//   var x = matrix[12] || matrix[4];
//   var y = matrix[13] || matrix[5];
//   return -y;
// };
// // $(".re").removeAttr('id');
// var page = $('#fullpage');
// var wrapper = $('.projects-wrapper');
// var headerTitle = $(".project-block .header-title-wrapper h2");
// function nextProject () {
//
//    if(getValues() == $( window ).height()) {
//       $.fn.fullpage.setAutoScrolling(false);
//    }
//    var url = window.location.href;
//    // if (url.indexOf('#projects') != -1) {
//    //    // console.log('eeeeey');
//    //
//    // }
// }
//
// });
