//CHIEDIAMO ALL'UTENTE QUANTI ELEMENTI CI SONO NELLA LISTA
let numberElementShoppingListString = prompt ("Inserisci il numero di elementi della tua lista della spesa:");

//CONTROLLIAMO CHE L'UTENTE INSERISCA UN NUMERO E NON UNA PAROLA
while (isNaN(numberElementShoppingListString)){
    console.log("Errore: inserisci un numero!");
    numberElementShoppingListString = prompt ("Reinserisci il numero di elementi della tua lista della spesa:");
}

//TRASFORIAMO LA STRINGA DEL PROMPT IN UN NUMERO
let numberElementShoppingList = parseInt(numberElementShoppingListString);
//DICHIARO UN ARRAY VUOTO PER INSERIRE GLI ELEMENTI DELLA LISTA
let shoppingList = [];

//CREO UN CICLO FOR PER CHIEDERE ALL'UTENTE GLI ELEMENTI, STAMPARLI E INSERIRLI NELL'ARRAY 
/* for (i = 0; i < numberElementShoppingList; i++){
    let elementShoppingList = prompt ("Inserisci il " + (i+1) + " articolo che vuoi acquistare: ");
    console.log(elementShoppingList);
    shoppingList.push(elementShoppingList);
} 
console.log(shoppingList);
*/
//TRASFORMO IL CICLO FOR IN UN WHILE

//DICHIARO IL CONTATORE PER IL CICLO WHILE
let counter = 0;

//APRO IL CICLO WHILE 
while(counter < numberElementShoppingList){
    let elementShoppingList = prompt ("Inserisci il " + (counter+1) + " articolo che vuoi acquistare: ");
    console.log(elementShoppingList);
    shoppingList.push(elementShoppingList);
    counter++;
}
console.log(shoppingList);