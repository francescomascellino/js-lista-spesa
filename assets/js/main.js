/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while 
*/

/* Global Variables */

let shoppingList = ["Pane", "Acqua", "Uova", "Olio"];

let intemCounter = 0;

console.log("Ecco la lista della spesa", shoppingList);

/* METHOD 1 - getElementById and Template Literal */

const shoppingListNode = document.getElementById("shoppingListNode");

console.log("Shopping List Node (method 1) = ", shoppingListNode);

while (intemCounter < shoppingList.length) {

    const listElement = `<li>${shoppingList[intemCounter]}</li>`;

    shoppingListNode.insertAdjacentHTML("beforeend", listElement);

    intemCounter++

}

//Resetto la variabile
intemCounter = 0;

/* METHOD 2 - querySelector and append() */

const shoppingListNode2 = document.querySelector("ul");

console.log("shoppiong list node (Method 2) = ", shoppingListNode2);

do {

    const listElement2 = document.createElement("li");

    listElement2.innerText = shoppingList[intemCounter];

    console.log("list Element (Method 2) with text = ", listElement2);

    shoppingListNode2.append(listElement2);

    intemCounter++

} while (intemCounter < shoppingList.length)