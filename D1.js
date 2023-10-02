/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("I principali DataType in JavaScript sono: le STRINGHE, BOOLEANI, I NUMERI, NULL E UNDEFINED, OGGETTO. Una STRINGA in JavaScript è un contenitore. E dentro questo contenitore inseriremo qualcosa, tipo il tuo nome, che pero deve essere circodato dalle doppie virgolette o singole. Il NUMERO in Javascript e una quantita che vogliamo dare ad un preciso contenitore e, puo essere qualsiasi numero anche numeri con la virgola, da non confondere con la stringa. Il NULL è diverso dal numro 0 o dalla stringa vuota. Infatti, questi appartengono ai tipi numero e stringa, mentre null è unico. Il tipo di dato UNDEFINED e' un valore che non esiste. Anche questo tipo di dato contiene un solo valore: undefined. Quando compare sullo schermo significa che non e stato iniziato e gli si viene assegnato nessun valore, nemmeno null. I BOOLEANI hanno come variabili True (che significa Vero) e False (che significa falso) e si usa quando devi controllare con i contenitori, per esempio usiamo Marco e Federico come contenitori, se dicono il Vero o il Falso.  ")
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name = "Rafael"
console.log (name);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=12;
let num2=20;
let num3=num1+num2;
console.log(num3);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let X = 12

console.log(X);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Casapao"
console.log(name); //D1.js:48 Uncaught TypeError: Assignment to constant variable.//
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = name - 4;
console.log("Sottrazione: ",num4 );
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1;
name1 = "john"
var name2;
name2 = "John"

console.log("name1 e name2 sono uguali: ", name1 === name2);