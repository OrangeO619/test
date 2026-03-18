"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const url = 'https://api.thecatapi.com/v1/images/search';
const button = document.querySelector('button');
const tableBody = document.querySelector('#table-body');
class Cat {
    id;
    url;
    height;
    width;
    constructor(id, url, height, width) {
        this.id = id;
        this.url = url;
        this.height = height;
        this.width = width;
    }
}
class WebDisplay {
    static addData(data) {
        const cat = new Cat(data.id, data.url, data.height, data.width);
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${cat.id}</td>
            <td><img src="${cat.url}" /></td>
            <td>${cat.height.toString()}</td>
            <td>${cat.width.toString()}</td>
            <td>${cat.url}</td>
            <td><a href="#">X</a></td>
        `;
        tableBody?.appendChild(tableRow);
    }
    static deleteData(deleteButton) {
        const td = deleteButton.parentElement;
        const tr = td.parentElement;
        tr.remove();
    }
}
async function getJSON(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
async function getData() {
    try {
        const json = await getJSON(url);
        const data = json[0];
        WebDisplay.addData(data);
    }
    catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
        }
        else {
            message = String(error);
        }
        console.log(error);
    }
}
button?.addEventListener('click', getData);
tableBody?.addEventListener('click', (ev) => {
    WebDisplay.deleteData(ev.target);
});
//# sourceMappingURL=script.js.map