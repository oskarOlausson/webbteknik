
var linkImage = $("#linkImage");
linkImage.hide();


var tag = $("#elmLink");

var pos = tag.position();

var offset = {
    top: pos.top - 200,
    left: pos.left + tag.width()/2 - 0.25 * (linkImage.width()/2)
};


var dragger = $( "#dragger" );

$(function() {
    dragger.draggable({
        drag: function( event, ui ) {
            $("#dropZone").css("background-color", "#222222");
        }
    });

    $('#dropZone').droppable( {
        drop: handleDropEvent
    } );
});



function handleDropEvent( event, ui ) {

    $(this).css("background-color", "green");
}


linkImage.offset(offset);


tag.mouseover(function () {
    linkImage.fadeIn();
});

tag.mouseleave(function () {

    linkImage.hide();
});


var text7 = $("#text7");
var text3 = $("#text3");

var text7isFaded = false;
var text3isFaded = false;

text7.on('click', function () {
    if (!text7isFaded) {
        text7.fadeTo("slow", .7);
    } else {
        text7.fadeTo("slow", 1);
    }

    text7isFaded = !text7isFaded;
});


text3.on('click', function () {
    if (!text3isFaded) {
        text3.fadeTo("slow", .3);
    } else {
        text3.fadeTo("slow", 1);
    }

    text3isFaded = !text3isFaded;
});


$('.panel-tab').on('click', function(event){
    event.preventDefault();
    $('.panel-stage').slideToggle('slow', function(event){
        if($(this).is(':visible')){
            $('.panel-tab').html('Dölj alternativ <span>&#9650;</span>');
        } else {
            $('.panel-tab').html('Se alternativ <span>&#9660;</span>');
        }
    });
});


