var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        if(window.localStorage) {
            var view = document.querySelector("#app");
            if(window.localStorage.getItem('auth-token') === null) {
                loginController.start(view);
                
            }else {
                lancamentoController.start(view);
            }

        }
    },


    /*controlLoginForm: function() {
        document.querySelector(".app-login")
        .classList.toggle('app-login--hide');
      
    },

    controlLancamentoForm: function() {
        document.querySelector(".app-lancamento")
        .classList.toggle('app-lancamento--hide');
    },*/

};

app.initialize();