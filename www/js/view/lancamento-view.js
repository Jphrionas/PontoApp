var lancamentoView = {
    template: function() {
        
        return `
          ${header.template()}
            <main id="main">
                <div class="container">
                    <div id="messages"></div>
                    <div class="app-lancamento">
                        <form id="form-lancamento">
                            <div class="input">
                                <label>Descrever Ponto</label>
                                <textarea id="descricao" name="descricao"></textarea>
                            </div>
            
                            <div class="input">
                                <button  class="btn btn--green" type="submit" id="btnBaterPonto">
                                    Bater Ponto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            `
    },
    render: function(view) {
        view.innerHTML = lancamentoView.template();
    }
}