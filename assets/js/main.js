/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while 
*/

/* Global Variables */

let shoppingList = ["Pane", "Acqua", "Uova", "Olio"]

let intemCounter = 0;

console.log("Ecco la lista della spesa", shoppingList);

/* METHOD 1 - getElementById and Template Literal */

const shoppingListNode = document.getElementById("shoppingListNode");

while (intemCounter < shoppingList.length) {

    const listElement = `<li>${shoppingList[intemCounter]}</li>`;

    shoppingListNode.insertAdjacentHTML("beforeend", listElement);

    intemCounter++

}

/* METHOD 2 - querySelector */

const shoppingListNode2 = document.querySelector("ul")

console.log("shoppiong list node 2 = ", shoppingListNode2);

while (intemCounter < shoppingList.length) {

    const listElement2 = document.createElement("li");

    listElement2.innerText = shoppingList[intemCounter];

    console.log("list Element 2 with text = ", listElement2);

    shoppingListNode2.insertAdjacentElement("beforeend", listElement2)

    intemCounter++

}

