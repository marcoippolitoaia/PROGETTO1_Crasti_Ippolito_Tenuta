# PROGETTO1_Crasti_Ippolito_Tenuta
Web app per l'orientamento che aiuta gli studenti e i lavoratori a trovare il proprio percorso ideale 

-----

# OrientaData

*OrientaData* è una web app interattiva creata per aiutare studenti e lavoratori a scegliere il proprio futuro. Permette di esplorare percorsi di studio, professioni e competenze attraverso strumenti di ricerca, confronto e un quiz di orientamento personalizzato.

# Progettazione del sito web
Abbiamo progettato l'interfaccia utente (UI/UX) su Figma. Puoi vedere i mockup direttamente a questo link:
* ➡️ [Visualizza il progetto su Figma](https://www.figma.com/design/pZWILZO4aKbSHmKXasGyvv/Untitled?node-id=0-1&t=VTGCFU7R7OsqtM20-1)

## Come Avviare il Progetto Localmente
Per ragioni di sicurezza del browser legate al caricamento del file dataset.json tramite Fetch API, è necessario avviare il sito utilizzando un server locale.
1. Clonare la repository: git clone <url-repo>
2. Aprire la cartella su *VS Code*.
3. Avviare il progetto utilizzando l'estensione *Live Server* (cliccando su "Go Live" in basso a destra).

-----

## Funzionalità del Sito

Il sito è diviso in *6 sezioni* principali:

### 1. Dashboard (Statistiche)
* Mostra i numeri chiave del sito (totale percorsi, professioni e competenze).
* Contiene grafici interattivi che mostrano la distribuzione dei settori, gli stipendi medi, le competenze più cercate e la crescita del mercato.

### 2. Percorsi di Studio
* Elenco di *15 percorsi* formativi (Università e ITS Academy).
* Filtri per area disciplinare e tipologia; ordinamento per nome, durata o difficoltà.
* Ogni percorso mostra una scheda dettagliata con le competenze che si acquisiscono e gli sbocchi sul lavoro.

### 3. Professioni
* Elenco di *15 professioni* del mercato attuale.
* Filtri per settore e livello di richiesta; ordinamento per nome, stipendio o crescita prevista.
* Ogni professione mostra lo stipendio medio, la domanda di mercato, le competenze richieste e gli studi consigliati.

### 4. Competenze
* Elenco di *10 competenze* chiave.
* Filtri per categoria (Tecnica, Trasversale, Gestionale, Relazionale).
* Mostra quanto ogni competenza è richiesta oggi nel mondo del lavoro.

### 5. Confronta
* Permette di mettere a confronto, fianco a fianco, due percorsi o due professioni.
* Evidenzia in automatico i dati migliori e mostra le cose in comune e le differenze.

### 6. Orientamento (Quiz)
* Un test interattivo con 10 domande sugli interessi dell'utente.
* Un algoritmo analizza le risposte e suggerisce i percorsi e i lavori più adatti, mostrando una percentuale di compatibilità.

-----

## Tecnologie Utilizzate

* **HTML5:** Per definire la struttura e l'ossatura delle pagine.
* **CSS3:** Per creare il design responsive, le animazioni e la gestione dei temi grafici.
* **JavaScript:** Per gestire la logica del sito, i filtri di ricerca, il quiz e il caricamento dei dati.
* **Chart.js 4.x:** Una libreria JavaScript esterna usata per generare i grafici interattivi.
* **Google Fonts (Inter):** Servizio per il font "Inter", scelto perché è moderno, pulito e molto facile da leggere su qualsiasi schermo.

-----

## Struttura dei File

L'organizzazione del progetto è suddivisa con il seguente ordine:

├── dataset.json        # Il file con tutti i dati del sito
├── index.html          # L'unica pagina principale dell'applicazione
├── README.md           # Relazione principale del progetto
├── script.js           # Tutta la logica di funzionamento in JavaScript
├── style.css           # File di stile, layout e grafica responsive
└── sviluppo.md         # Diario di sviluppo del gruppo