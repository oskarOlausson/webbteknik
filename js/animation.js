
/*This codes animates a link*/
var color = '#ee5244';

var regularCss = {
        opacity: 1,
        color: '#bb23aa',
        fontSize: "2rem",
        borderBottomWidth: ".2rem"
    };


/*the following functions are being called from the element in the html*/

//called onload
function loadMe(element) {
    $(element).css(regularCss);
}

function animateOn(element) {

    var animationProperties = {
            opacity: '0.5',
            color: color,
            fontSize: '3rem',
            borderBottomWidth: '.4rem'
        };

    $(element).animate(animationProperties, "slow");
}

function animateOff(element) {
    $(element).animate(regularCss, "fast");
}
