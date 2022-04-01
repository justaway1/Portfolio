$(document).ready(function () {
    $('.main-button').click(function () {
        let fucking = $('.creator');
        fucking.animate({ width: 'toggle' }, "fast");

    });
});


$(document).ready(function () {
    $('.main-button-1').click(function () {
        $('.show-rules').slideToggle(500);
        $('.show-rules span').css('color', 'red');
        $('.show-rules em').css('color', 'green');
    })
});



// function responsive(maxWidth) {
//     if (maxWidth.matches) {
//         $('.main-button').click(function() {
//             $('.creator').slideDown(1000);
//         })  
//     } else {
//         $('.main-button').click(function() {
//         $('.creator').slideUp(1000);
//         })
//     }
// };

// let maxWidth = window.matchMedia("(max-width: 500px)");
// // responsive(maxWidth);
// maxwidth.addListener(responsive);

