const linkNavigazione = document.querySelectorAll('.nav-link');
const tutteLePagine = document.querySelectorAll('.page');

for (let i = 0; i < linkNavigazione.length; i++) {
    linkNavigazione[i].addEventListener('click', function(evento) {
        evento.preventDefault(); // Blocca il comportamento di default del link
        
        // Rimuove la classe active da tutti i link del menu
        for (let j = 0; j < linkNavigazione.length; j++) {
            linkNavigazione[j].classList.remove('active');
        }
        // La aggiunge solo al link cliccato
        this.classList.add('active');

        // Legge il valore del data-target
        const idPaginaBersaglio = this.getAttribute('data-target');

        // Nasconde tutte le pagine togliendo la classe active
        for (let k = 0; k < tutteLePagine.length; k++) {
            tutteLePagine[k].classList.remove('active');
        }
        
        // Mostra solo la pagina con l'ID corrispondente
        const paginaBersaglio = document.getElementById(idPaginaBersaglio);
        paginaBersaglio.classList.add('active');
    });
}