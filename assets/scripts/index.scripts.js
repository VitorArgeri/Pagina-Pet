const public_key = "MFYt9joFo285ZvyIh";
const secret_key = "jGIyKpGJMn03_gpAMyD87";

function teste() {
    const nome = document.getElementById('nome').value;
    alert(nome);
}

function enviarEmail() {

    (function () {
        emailjs.init(public_key);
    })();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const params = {
        nome: nome,
        email: email,
        mensagem: mensagem,
    };

    const serviceID = "service_qdpag0m";
    const templateID = "template_jyhn6de";

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("mensagem").value = ""
        console.log(res);
        alert('Mensagem enviada com sucesso!');
    })
        .catch((err) => {
            console.log(err);
            alert('Erro ao enviar mensagem!');
        });
};
