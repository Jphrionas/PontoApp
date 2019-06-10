var formId = "#form-lancamento";

var lancamentoController = {

    start: function(view) {
        lancamentoView.render(view);

        document.querySelector(formId)
            .addEventListener('submit', lancamentoController
                .lancamentoForm
                .bind(this));

        header.initialize();
    },
    
    lancamentoForm: function(event) {
        event.preventDefault();        
        if(FormUtil.formIsValid(formId)) {
            FormUtil.removeAllValidationMessages(formId);

    
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:8080/v1/lancamento')
            xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("auth-token"));
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

            xhr.onloadend = function() {
                if(xhr.status != 401 ) {
                    var result = JSON.parse(this.responseText);
                    console.log(result);

                    // Limpar o foumario
                    FormUtil.clear(formId);

                    document.querySelector("#messages")
                    .innerHTML = `<span class="alert alert--success">O Lancamento de Ponto foi Enviado!</span>`;
                    // Mensagem de Pontos Salvos
                    return;
                }else {
                    document.querySelector("#messages")
                    .innerHTML = `<span alert alert--danger>Não foi possível enviar o lançamento!</span>`;
                }
            }
  
            xhr.onerror = function(error) {
                console.log(error);

                document.querySelector("#messages")
                    .innerHTML = `<span>Serviço de Lancamento Indisponível</span>`;
            }

            xhr.send(JSON.stringify({
                descricao:  document.querySelector("#descricao").value,
                coords: "lat=120310931;lng=-12039109301"
            }))
        }
    },

    listLancamento: function() {

    }
}