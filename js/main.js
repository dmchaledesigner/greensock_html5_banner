// 1. Create a variable
var $box = $('#box'),
    $box2 = $('#box2'),
    $box3 = $('#box3'),
    tl = new TimelineLite();


// 3. Add Tweens to Timeline
tl.from($box, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut, delay: 1}) // no comma or semi-colon
 .from($box2, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut,}) // no comma or semi-colon
 .from($box3, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut}); // semi-colon after last tween
