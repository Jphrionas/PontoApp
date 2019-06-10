var header = {

    template: function() {
        return `
            <header>
                <nav class="navbar navbar--blue">
                    <span class="navbar__title">Ponto App</span>
                    <a href="#" id="btn-sidebar" class="icon icon--bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <div class="navbar__info">
                        <div class="user">
            
                        </div>
                        <ul class="list">
                            <li class="list__item"><a href="#">Inicio</a></li>
                            <li class="list__item"><a href="#">Bater Ponto</a></li>
                            <li class="list__item"><a href="#">Minhas Horas</a></li>
                            <button class="btn btn--blue btn--logout">Sair</button>
                        </ul>
                    </div>
                </nav>

            </header>
        `

    },

    initialize: function() {

        var items  = [];
        var elements = document.querySelectorAll(".list__item");
        for(var i=0; i < elements.length; i++) {
            items.push(elements[i]);            
        }

        // var items = [...document.querySelectorAll(".list__item")]
        if(items) {
            for(var i =0; i < items.length; i++) {
                var item = items[i];

                item.addEventListener('click', function(event) {
                    console.log("this");
                })
            }

        var sidebar= document.querySelector("#btn-sidebar");
        if(sidebar) sidebar.addEventListener('click', toggleMenu); 

        function toggleMenu(event) {
            event.preventDefault();
            document.querySelector(".navbar__info")
                .classList.toggle('navbar--show');
        }
    }
}