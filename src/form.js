header('Content-Type: text/javascript');

const btn = document.querySelector('.boton-form')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    console - console.log(msg);
    const phone = (inputs.elements["phone"].value).trim()
    // if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
    //     alert("Campos vacíos")
    //     return
    // }

    if (!name.length > 0) {
        alert("Falta el nombre")
    } else if (!email.length > 0 || !email.includes('@')) {
        alert("Necesito un email valido")
    } else if (!msg.length > 0) {
        alert("Mensaje vacío")
    } else {
        let ebody = '<b>Nombre: </b>' + name +
            '<br>' +
            '<b>email: </b>' + email +
            '<br>' +
            '<b>Telf: </b>' + phone +
            '<br>' +
            '<b>Mensaje: </b>' + msg +
            '<br>'

        Email.send({
            SecureToken: "dad5268f-a331-4b54-baee-a62af6404345",
            To: 'antoniblanc.aba@gmail.com',
            From: 'antoniblanc.aba@gmail.com',
            Subject: "Quiere contactarte",
            Body: ebody
        }).then(
            message => alert('Formulario enviado correctamente')
        );
    }


});

