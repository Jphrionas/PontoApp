var Validators = {

    required: function(value) {
        if((value === "")) {
             return true;
        }

        return false;
    },

    email: function(value) {
        if(!(/\w+@\w+/.test(value))) {
            return false;
        }
        return value;
    },

    min: function(item) {


    },

    max: function() {
        
    }

}