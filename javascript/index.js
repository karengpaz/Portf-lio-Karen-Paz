document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-contato').addEventListener('submit', function(event) {
        event.preventDefault();

        // Verificar se algum campo de entrada está vazio
        for (let input of this.elements) {
            if (input.type !== 'submit' && input.value.trim() === '') {
                alert("Preencha todos os campos.");
                return; // Interrompe o envio caso algum campo esteja vazio
            }
        }

        alert("Mensagem enviada com sucesso!");
    });
});
