import Contact from "../models/Contact.js";
import { bst } from "./dependencies.js";

let btn = document.getElementById("add-btn");
let btn2 = document.getElementById("search-btn");
let btn3 = document.getElementById("min-btn");
let btn4 = document.getElementById("max-btn");
let btn5 = document.getElementById("impresion-btn");

btn.addEventListener("click", () => {
    let addLibro = document.getElementById("add").value;
    let contacto = new Contact(addLibro);
    let data = bst.add(contacto);
    console.log(data);
    if (data) {
        Swal.fire("Registro exitoso");
    } else {
        Swal.fire("Registro no exitoso");
    }
});

btn2.addEventListener("click", () => {
    let searchLibro = document.getElementById("search").value;
    if (bst.search(searchLibro)) {
        Swal.fire("El libro se encuentra en la lista");
    } else {
        Swal.fire("El libro no se encuentra en la lista");
    }
});

btn3.addEventListener("click", () => {
    let data = bst.min();
    if (data) {
        Swal.fire(`El libro con menor letra es:  ${data.add}`);
    } else {
        Swal.fire("No hay libros en la lista");
    }
});

btn4.addEventListener("click", () => {
    let data = bst.max();
    if (data) {
        Swal.fire(`el libro con mayor letra es: ${data.add}`);
    } else {
        Swal.fire("No hay libros en la lista");
    }
});

btn5.addEventListener("click", () => {
    let players = document.getElementById("div");
    players.innerHTML = "";
         bst.impresion((data) => {
        let playerItem = document.createElement("div");
        playerItem.textContent = `${data.add}`;
        players.appendChild(playerItem);
    });
})