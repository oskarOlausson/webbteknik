function download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(getText()));
    element.setAttribute('download', 'dinPitch.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function getText() {
    var text = $("#output").text();
    console.log(text);
    return text;
}

