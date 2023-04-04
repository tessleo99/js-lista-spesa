let numberElementShoppingListString = prompt ("Inserisci il numero di elementi della tua lista della spesa:");

while (isNaN(numberElementShoppingListString)){
    console.log("Errore: inserisci un numero!");
    numberElementShoppingListString = prompt ("Reinserisci il numero di elementi della tua lista della spesa:");
}

let numberElementShoppingList = parseInt(numberElementShoppingListString);

let shoppingList = [];

for (i = 0; i < numberElementShoppingList; i++){
    let elementShoppingList = prompt ("Inserisci l'articolo che devi acquistare:");
    console.log(elementShoppingList);
}