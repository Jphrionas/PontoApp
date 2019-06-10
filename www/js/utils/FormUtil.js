var FormUtil = {

    getElementsFromForm: function(id) {
        var result = [];
        var elements = document.querySelector(id).elements;
        for(var i=0; i < elements.length; i++) {
            if(!(['button', 'submit'].includes(elements[i].type))) {

                result.push(elements[i]);            
            }

        }
        return result;
    },

    clear: function(formId) {
        document.querySelector(formId).reset();
    },

    formIsValid: function(id) {
        var elements = FormUtil.getElementsFromForm(id);

        var invalid = [];
        for(var i = 0; i < elements.length ; i++) {
            var element = elements[i];
            
            if(Validators.required(element.value)) {
                invalid.push(element);
                FormUtil.addErrorMessage(element.parentNode, element);
            }
            
        }

        return !invalid.length;
    },

    removeAllValidationMessages(formId) {
        var dangers = document.querySelector(formId)
            .querySelectorAll(".text-danger");

        if(dangers.length) {
            for(var i = 0; i < dangers.length; i++) {
                dangers[i].remove();
            }
        }
    },

    addErrorMessage(parent, element) {
        var span = document.createElement('span');
        span.classList.add('text-danger');
        span.innerHTML = 'Campo de ' +element.name+' inválido';
        parent.append(span);
    }
}