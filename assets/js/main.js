/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while 
*/

let shoppingList = ["Pane", "Acqua", "Uova", "Olio"]

let intemCounter = 0;

console.log("Ecco la lista della spesa", shoppingList);

const shoppingListNode = document.getElementById("shoppingListNode");

while (intemCounter < shoppingList.length) {

    const listElement = `<li>${shoppingList[intemCounter]}</li>`;

    shoppingListNode.insertAdjacentHTML("beforeend", listElement);

    intemCounter++

}