var count = 0;

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

const printArticles = id => {
    let art = document.getElementById(id).getAttribute("alt");
    let target = document.getElementById("ticket-content");
    
    //desarrollar el contador que se imprime
    target.innerHTML += `
    <div class="bill-items row">
        <div class="col">${art}</div>
        <div class="col">Unidades</div>
    </div>
    `
}

const printGeneralCount = count => {
    document.getElementById("notifier").innerHTML = `
    <div class="circle">
        <div class="circle-text">${count}</div>
    </div>
    `
}