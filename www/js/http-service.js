var service = {

    get: function(url) {
        return service._sendHttp('GET', url);
    },

    post: function(url, data) {

    },

    _sendHttp:  function(method, url, data) {
        var res = new XMLHttpRequest();
        res.open(method, url);
        res.onreadystatechange = function(res) {
            if(res.readyState == 4) {
                if(res.status >= 200 ) {
                    return res.resposeText;        
                }
            }
        }   

        if(method != 'GET') {
            res.send(JSON.stringify(data));
        }else {

            res.send();
        }
    }
}