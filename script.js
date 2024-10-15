document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("vQRIayhTbHG5bPlAb");
});

function sendEmail(event) {
    event.preventDefault();
    emailjs.sendForm('service_jqn2ryn', 'template_13bytv7', event.target)
        .then(function(response) {
            document.getElementById('message-sent').style.display = 'block';
        }, function(error) {
            alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        });
}
