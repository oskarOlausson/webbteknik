



var me = $("#aboutMeContainer");
var toggler = $("#toggler");


function toggle() {

    if (me.is(':hidden')) {
        me.show();
        toggler.html("Dölj");
    } else {
        me.hide();
        toggler.html("Visa igen");
    }
}
