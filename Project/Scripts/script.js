var count = 0;
var targetID = "ticket-content";
var nameAtt = "alt"; 

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

//Función que imprime en el ticket
const printArticles = id => {
    let newArt = document.getElementById(id).getAttribute(nameAtt);
    let target = document.getElementById(targetID);
    let lines = target.children;
    let units = 1;

    if(lines.length == 0) {
        target.innerHTML = printHTML(newArt, units);
    } else {
        let found = false;

        for (const line of lines) {
           let art = line.children[0].innerHTML;
           if (art == newArt) {
                let num = Number(line.children[1].innerHTML);
                num++;
                line.children[1].innerHTML = num;
                found = true;
           }
        }

        if(found == false) {
            appendHTML(target, newArt, units);
        }
    }
}

//Función que inserta HTML específico
const printHTML = (article, amount) => {
    return `<div class="bill-items row">
        <div class="col">${article}</div>
        <div class="col">${amount}</div>
    </div>`
}

//Función que añade HTML a la lista
const appendHTML = (target, article, amount) => {
    target.appendChild(document.createElement("div"));
    target.lastChild.setAttribute("class", "bill-items row");
    target.lastChild.innerHTML = `
        <div class="col">${article}</div>
        <div class="col">${amount}</div>
    `
}

const printGeneralCount = count => {
    document.getElementById("notifier").innerHTML = `
    <div class="circle">
        <div class="circle-text">${count}</div>
    </div>
    `
}