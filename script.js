document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("TU_ID_DE_USUARIO");
});

function sendEmail(event) {
    event.preventDefault();
    emailjs.sendForm('TU_SERVICIO_ID', 'TU_PLANTILLA_ID', event.target)
        .then(function(response) {
            document.getElementById('message-sent').style.display = 'block';
        }, function(error) {
            alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        });
}
