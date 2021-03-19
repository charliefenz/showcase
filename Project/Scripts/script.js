var count = 0;
var targetID = "ticket-content";
var nameAtt = "alt";
var itemIterator = 0;
var target = document.getElementById(targetID);
var lines = target.children; 


//Objetos para el showcase
    class Article {
        constructor(name, price, image) {
            this.name = name;
            this.price = price;
            this.image = image;
        }
    }

    const banana = new Article("banana", 1.25,"Images/bananas.png");
    const cherry = new Article("cereza", 1.00, "Images/cherries.png");
    const tomato = new Article("tomate", 1.50, "Images/tomato.png");
    const onion = new Article("cebolla", 2.00, "Images/onion.png");
    const apple = new Article("manzana", 0.75, "Images/apple.png");

    const arrArticles = [banana, cherry, tomato, onion, apple];

//Función que inserta los objetos en el showcase. Le pasamos el id de la balda y los articles que queremos colocar
const printShowcase = (id, item1, item2, item3, item4) => {
    let printTarget = document.getElementById(id);
    printTarget.innerHTML = `
    <div id="div-it${itemIterator + 1}" class="items col-3">
        <img src="${item1.image}" alt="${item1.name}" width="100%" height="100%" id="it${itemIterator + 1}" draggable="true" ondragstart="drag(event)">
    </div>
    <div id="div-it${itemIterator + 2}" class="items col-3">
        <img src="${item2.image}" alt="${item2.name}" id="it${itemIterator + 2}" draggable="true" ondragstart="drag(event)">
    </div>
    <div id="div-it${itemIterator + 3}" class="items col-3">
        <img src="${item3.image}" alt="${item3.name}" id="it${itemIterator + 3}" draggable="true" ondragstart="drag(event)">
    </div>
    <div id="div-it${itemIterator + 4}" class="items col-3">
        <img src="${item4.image}" alt="${item4.name}" id="it${itemIterator + 4}" draggable="true" ondragstart="drag(event)">
    </div>
    `
    itemIterator = itemIterator + 4;
}

//Impresión de las baldas
printShowcase("balda1", banana, apple, apple, cherry);
printShowcase("balda2", tomato, apple, tomato, onion);
printShowcase("balda3", onion, cherry, apple, banana);


//Secuencia Drag&Drop
    const drag = ev => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const allowDrop = ev => {
        ev.preventDefault();
    }

    const drop = ev => {
        ev.preventDefault();
        let id = ev.dataTransfer.getData("text");
        printArticles(id);
        count++;
        printGeneralCount(count);
        document.getElementById(id).remove();
    }

//Función que imprime los elementos en el ticket y actualiza el total
const printArticles = id => {
    let newArt = document.getElementById(id).getAttribute(nameAtt);
    let newArtPrice = getPrice(newArt);
    let units = 1;

    //primera impresion
    if(lines.length == 0) {
        target.innerHTML = printHTML(newArt, units, newArtPrice);
        printTotal();
    } else {
        let found = false;
        //revision de los artículos ya impresos para no repetir
        for (const line of lines) {
           let art = line.children[0].innerHTML;
           //Si ya existe el artículo se aumenta en unidad
           if (art == newArt) {
                let num = Number(line.children[1].innerHTML);
                num++;
                let lineTotal = num * newArtPrice;
                line.children[1].innerHTML = num;
                line.children[2].innerHTML = `${lineTotal.toFixed(2)} €`;
                printTotal();
                found = true;
           }
        }

        //Si no se econtró ningún artículo repetido se imprime uno nuevo
        if(found == false) {
            appendHTML(target, newArt, units, newArtPrice);
            printTotal();
        }
    }
}

//Función que obtiene el precio del array de objetos a partir de un nombre
const getPrice = (artName) => {
    for (const article of arrArticles) {
        if(artName == article.name){
            return article.price;
        }
    }
}

//Función que imprime el número de drag&drops exitosos
const printGeneralCount = count => {
    document.getElementById("notifier").innerHTML = `
    <div class="circle">
        <div class="circle-text">${count}</div>
    </div>
    `
}

//Función que inserta HTML específico
const printHTML = (article, amount, price) => {
    return `<div class="bill-items row">
        <div class="col">${article}</div>
        <div class="col">${amount}</div>
        <div class="col">${price.toFixed(2)} €</div>
    </div>`
}

//Función que añade HTML a la lista
const appendHTML = (target, article, amount, price) => {
    target.appendChild(document.createElement("div"));
    target.lastChild.setAttribute("class", "bill-items row");
    target.lastChild.innerHTML = `
        <div class="col">${article}</div>
        <div class="col">${amount}</div>
        <div class="col">${price.toFixed(2)} €</div>
    `
}

//Función que imprime el total
const printTotal = () => {
    let total = 0;
    for (const line of lines) {
        let price = getPrice(line.children[0].innerHTML);
        let subtotal = price * Number(line.children[1].innerHTML);
        total += subtotal;
    }
    document.getElementById("total").innerHTML = `${total.toFixed(2)} €`;
}