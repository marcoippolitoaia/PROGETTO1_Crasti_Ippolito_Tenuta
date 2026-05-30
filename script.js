//Logica cambio pagina senza dover ricaricare il browser

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


//Lettura file json

let elencoPercorsi = [];
let elencoProfessioni = [];

// Variabili per gestire l'ordinamento (serviranno dopo)
let ordineInvertito = false;
let istanzaGrafico = null;


const inputFile = document.getElementById('file-input');
const testoStato = document.getElementById('stato-caricamento');

inputFile.addEventListener('change', function(evento) {
    const fileSelezionato = evento.target.files[0];
    
    if (fileSelezionato) {
        const lettoreFile = new FileReader();
        
        // Questa funzione scatta quando il file è stato letto con successo
        lettoreFile.onload = function(e) {
            const testoJson = e.target.result;
            
            // Converte la stringa di testo in un oggetto Javascript
            const datiConvertiti = JSON.parse(testoJson);
            
            // Salviamo i dati nelle variabili globali
            elencoPercorsi = datiConvertiti.percorsi;
            elencoProfessioni = datiConvertiti.professioni;
            
            testoStato.innerText = "File caricato con successo! Dati pronti.";
            testoStato.style.color = "#10b981"; // Cambia il testo in verde
            
            // Inizializziamo subito le funzioni base con i nuovi dati
            mostraPercorsi(elencoPercorsi);
            mostraProfessioni(elencoProfessioni);
            popolaSelezioniConfronto();
            creaGraficoStipendi();
        };
        
        // Avvia la lettura del file sotto forma di testo
        lettoreFile.readAsText(fileSelezionato);
    }
});


//Creazione e ordinamento schede

function mostraPercorsi(arrayDaMostrare) {
    const griglia = document.getElementById('griglia-percorsi');
    griglia.innerHTML = ""; // Svuota la griglia prima di riempirla
    
    // Ciclo for per creare le "card"
    for (let i = 0; i < arrayDaMostrare.length; i++) {
        const p = arrayDaMostrare[i];
        
        griglia.innerHTML += `
            <div class="card">
                <span class="badge">${p.area}</span>
                <h3>${p.nome}</h3>
                <p><strong>Durata:</strong> ${p.durata}</p>
                <p>${p.descrizione}</p>
            </div>
        `;
    }
}

// Funzione unica che gestisce contemporaneamente il filtro testo e il filtro area
function applicaFiltriPercorsi() {
    const testoCercato = document.getElementById('cerca-percorso').value.toLowerCase();
    const areaSelezionata = document.getElementById('filtro-area').value;
    
    const percorsiFiltrati = [];
    
    for (let i = 0; i < elencoPercorsi.length; i++) {
        const p = elencoPercorsi[i];
        
        // Controllo se il nome contiene il testo cercato
        const controllaTesto = p.nome.toLowerCase().includes(testoCercato);
        // Controllo se l'area corrisponde oppure se è selezionato "tutte"
        const controllaArea = (areaSelezionata === "tutte" || p.area === areaSelezionata);
        
        // Se entrambi i controlli sono veri, il percorso viene salvato
        if (controllaTesto && controllaArea) {
            percorsiFiltrati.push(p);
        }
    }
    
    mostraPercorsi(percorsiFiltrati);
}

document.getElementById('cerca-percorso').addEventListener('input', applicaFiltriPercorsi);
document.getElementById('filtro-area').addEventListener('change', applicaFiltriPercorsi);

// Gestione dell'ordinamento A-Z / Z-A
document.getElementById('btn-ordina-percorsi').addEventListener('click', function() {
    if (ordineInvertito === false) {
        // Ordina in modo alfabetico A-Z
        elencoPercorsi.sort((a, b) => a.nome.localeCompare(b.nome));
        ordineInvertito = true;
    } else {
        // Ordina in modo alfabetico Z-A
        elencoPercorsi.sort((a, b) => b.nome.localeCompare(a.nome));
        ordineInvertito = false;
    }
    applicaFiltriPercorsi(); // Mostra i risultati ordinati mantenendo i filtri attivi
});