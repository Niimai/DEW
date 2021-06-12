var inputBoxName = document.getElementById('input-name');
inputBoxName.onkeyup = function() { document.getElementById('show-text-name').innerHTML = inputBoxName.value; }

var inputBoxPos = document.getElementById('input-position');
inputBoxPos.onkeyup = function() { document.getElementById('show-text-pos').innerHTML = inputBoxPos.value; }

var inputBoxPhone = document.getElementById('input-phone');
inputBoxPhone.onkeyup = function() { document.getElementById('show-text-phone').innerHTML = inputBoxPhone.value; }

var inputBoxMail = document.getElementById('input-mail');
inputBoxMail.onkeyup = function() { document.getElementById('show-text-mail').innerHTML = inputBoxMail.value; }


/*function mostrar() {
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(archivo);
        reader.onloadend = function() {
            document.getElementById("img").src = reader.result;
        }
    }
}*/

function selectText(container) {
    var container = document.getElementById(container);
    var range;
    if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(container);
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(container);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
    document.execCommand("copy");
    if (window.getSelection) { window.getSelection().removeAllRanges(); } else if (document.selection) { document.selection.empty(); }
}

function cargarImgBase64(file) {
    fetch(file)

    .then(response => response.blob())
        .then(blob => {
            var reader = new FileReader();
            reader.onload = function() {
                var imagen = document.getElementById("imgTag");

                imagen.src = this.result;
            }; // <--- this.result contains a base64 data URI
            reader.readAsDataURL(blob);
        });
}

function cargarImg() {
    var file = document.getElementById("selector").value;
    cargarImgBase64(file);
}