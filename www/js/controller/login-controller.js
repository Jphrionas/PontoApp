var loginController = {

    start(view) {
        loginView.render(view);

        // subscribe, Messages.subscribe('successMessage', callback);
        document.querySelector("#form-login")
            .addEventListener('submit', loginController.loginForm
                .bind(this));
        
    },

    loginForm: function(event) {
        event.preventDefault();
        
        // Aplicar a validação
        var elements = this.__getElementsForm('#form-login');
        var isValid = false;
        var result = {};

        for(var i = 0; i < elements.length ; i++) {
            var element = elements[i];
            if(!['submit'].includes(element.type)) {
                isValid = this.__validateField(element);        
                if(!isValid)     {
                    this.__addValidationMessage(element.parentNode, element)
                }else {
                    result[element.name] = isValid;
                }
            };
        }

        if(isValid && !this.__hasFielsEmpty("#form-login")) {
            this.__removeAllValidationMessages("#form-login");
            
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:8080/auth/login')


            xhr.onloadend = function() {
                if(xhr.status != 401 ) {
                    var auth = JSON.parse(this.responseText);

                    window.localStorage.setItem("auth-token", auth.token);
                    window.localStorage.setItem("publicId", auth.publicId);
                    window.localStorage.setItem("empresa", auth.empresa);
                    lancamentoController.start(document.querySelector("#app"));
                    return;
                }else {
                    document.querySelector("#messages")
                    .innerHTML = `<span class="text-danger">Usuario/Senha inválido</span>`;
                }
            }
  
            xhr.onerror = function(error) {
                console.log(error);
            }

            xhr.send(JSON.stringify({
                username:  result['e-mail'],
                password: result['senha']
            }))

        }


        return;
        
    },

    __hasFielsEmpty(form) {
        var elements = this.__getElementsForm(form);
        var arr = [];
        for(var i =0 ; i < elements.length; i++) {
            if(this.__validateField(elements[i]) == false) {
                arr.push(elements[i]);
            }
        }

        return arr.length;

    },

    __validateEmail: function(element) {
        if(!(/\w+@\w+/.test(element.value))) {

            var span = document.createElement('span');
            span.classList.add('text-danger');

            element.parentNode.append(span.innerHTML= 'Campo de e-mail inválido');
            return false;
        }

        return element.value;
    },

    __addValidationMessage(parent, element) {
        var span = document.createElement('span');
        span.classList.add('text-danger');
        span.innerHTML = 'Campo de ' +element.name+' inválido';
        parent.append(span);
    },

    __removeAllValidationMessages(formId) {
        var dangers = document.querySelector(formId)
            .querySelectorAll(".text-danger");

        if(dangers.length) {
            for(var i = 0; i < dangers.length; i++) {
                dangers[i].remove();
            }
        }
    },
    
    __validateField: function(element) {
        if(element.type == 'submit' || element.type == 'button') return true;

        if((element.value === "")) {
             return false;
        }

        return element.value;
    },

    __getElementsForm(id) {
        var result = [];
        var elements = document.querySelector(id).elements;
        for(var i=0; i < elements.length; i++) {
            if(!(['button', 'submit'].includes(elements[i].type))) {

                result.push(elements[i]);            
            }

        }
        return result;
    }

}