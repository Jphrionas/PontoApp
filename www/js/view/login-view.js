var loginView = {

    template: function() {
        return `

        <div class="panel">
            <div class="panel__body container app-login">
                
                <form id="form-login">
                    <div class="input">
                        <label for="#">E-mail</label>
                        <input type="email" name="e-mail" class="input-data"
                            placeholder="Digite seu e-mail">
                    </div>
            
                    <div class="input">
                        <label for="#">Senha</label>
                        <input type="password" name="senha" class="input-data"
                        placeholder="Digite a sua senha">
                    </div>

                    <div class="input" >
                        <button  class="btn btn--login btn--blue" id="btnLogin">Login</button>
                    </div>
                </form>
            </div>

            <div class="panel__bottom" id="messages"></div>
        </div>

        `
    },

    render: function(view) {
        view.innerHTML = loginView.template();
    }
}