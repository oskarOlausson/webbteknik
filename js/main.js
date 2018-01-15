"use strict";


const list = ["inputName", "inputSlogan", "inputAdjective1", "inputAdjective2", "inputVerb1"];

const pitch = "På €inputName strävar vi efter perfektion. Med vår €inputAdjective1 design så \
tror vi att vi har skapat den mest €inputAdjective2a tjänsten i världen.\
Har du någonsin ståt inför problemet med att behöva €inputVerb1 i timmar i taget. Med\
€inputName du behöver inte längre. Vårt team tror på perfektion för oss alla\
och vi vill dela den upplevelsen med dig. Så hopp ombord och upplev framtiden\
med €inputName. €inputSlogan.";

const errorClass = "errorWarning";

/*This code removes errorWarnings when people click it*/
$(document).ready(function () {
   list.forEach(function (value) {
       document.getElementById(value).addEventListener("focus", function(ev) {
           removeFailedMarker(this);
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


$("#generateButton").click(function () {

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
    }
});



