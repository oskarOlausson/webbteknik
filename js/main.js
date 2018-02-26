"use strict";


const list = ["inputName", "inputSlogan", "inputAdjective1", "inputAdjective2", "inputVerb1"];

const pitch = "På €inputName strävar vi efter perfektion. Med vår €inputAdjective1 design så \
tror vi att vi har skapat den €inputAdjective2 tjänsten i världen.\
Har du någonsin stått inför problemet med att behöva €inputVerb1 i timmar i sträck. Med \
€inputName så behöver du inte €inputVerb1 längre. €inputName's team tror på perfektion för oss alla \
och vi vill dela den upplevelsen med dig. Så hoppa ombord och upplev framtiden \
med €inputName, €inputSlogan.";

const errorClass = "errorWarning";

/*This code removes errorWarnings when people click it*/
$(document).ready(function () {

    list.forEach(function (value) {
        if (typeof(sessionStorage[value]) != "undefined") {
            document.getElementById(value).value = sessionStorage[value];
        }
    })


   list.forEach(function (value) {
       var inputField = document.getElementById(value);

       inputField.addEventListener("focus", function(ev) {
           removeFailedMarker(this);
       });

       inputField.addEventListener('input', function() {
           sessionStorage[value] = $(this).val(); // get the current value of the input field.
       });
   });

});



function fill(replaceMap) {

    var newPitch = pitch;

    var keys = Object.keys(replaceMap)
    for (var i = 0; i < keys.length; i++) {

        var value = replaceMap[keys[i]];

        var replace = "€" + keys[i];
        newPitch = newPitch.replace(new RegExp(replace, "g"), value);

    }
    return newPitch;

}

function removeFailedMarker(element) {
    var parent = element.parentNode;
    var list = parent.getElementsByClassName(errorClass);

    while(list[0]) {
        parent.removeChild(list[0]);
    }

}

function addFailedMarker(element) {
    var parent = element.parentNode;

    if (parent.getElementsByClassName(errorClass).length > 0) {
        return;
    }

    var newElement = document.createElement('div');
    newElement.classList.add(errorClass);
    newElement.innerText = "x";

    //parent.appendChild(newElement);
    parent.insertBefore(newElement, element);
}


$("#generateButton").on('click', function () {

    var map = {};
    var failed = false;

    for (var i = 0; i < list.length; i++) {
        var str = list[i];

        var element = document.getElementById(str);
        var text = element.value.toString();

        if (text.length === 0) {
            failed = true;
            addFailedMarker(element);
        } else {
            map[str] = text;
        }
    }

    if (!failed) {
        document.getElementById("output").innerText = fill(map);
        $("#downloadButton").fadeIn();
    }
});







