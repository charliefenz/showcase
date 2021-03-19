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
    let newArt = document.getElementById(id).getAttribute("alt");
    let target = document.getElementById("ticket-content");
    let lines = target.children;
    let units = 1;

    if(lines.length == 0) {
        target.innerHTML += `
        <div class="bill-items row">
            <div class="col">${newArt}</div>
            <div class="col">${units}</div>
        </div>
        `
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
            target.appendChild(document.createElement("div"));
                target.lastChild.setAttribute("class", "bill-items row");
                target.lastChild.innerHTML = `
                    <div class="col">${newArt}</div>
                    <div class="col">${units}</div>
               `
        }
    }
}

const printGeneralCount = count => {
    document.getElementById("notifier").innerHTML = `
    <div class="circle">
        <div class="circle-text">${count}</div>
    </div>
    `
}