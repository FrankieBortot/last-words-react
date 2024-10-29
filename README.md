Struttura del Contenuto

Content è un array di sezioni


solo la prima sezione contiene:

THEME
- Light, per identificare i capitoli più chiari (da gennaio a giugno) che hanno tema light
- Dark, per identificare i capitoli più scuri (da settembre a dicembre) che hanno tema dark
- Black, per identificare i capitoli più significativi (luglio e agosto) che hanno tema total black

TYPE
- meta: contiene per lo più metadati sul capitolo in questione che non verranno renderizzati
- intro: l'header dell'intera pagina, contiene il titolo (capitolo, mese)
- narration: contiene un testo narrativo (tipo quelli nei finali)
- e-mail: sezione che contiene una email
- live-talk: sezione che contiene una conversazione dal vivo
- text-messages: sezione che contiene una conversazione su app messaggistica

ID
Indica l'id della sezione, da usare per renderizzare le sezioni al click sul button e proseguire nella lettura

ISVISIBLE
- true, per le sezioni che saranno di default visibili nel capitolo (tipicamente: l'header introduttivo, la prima sezione di dialogo)
- false, per le sezioni che saranno renderizzate man mano che si progredisce nel capitolo cliccando sulle rispettive azioni

TITLE
Titolo della sezione, riporta nella maggior parte dei casi la data corrispondente

