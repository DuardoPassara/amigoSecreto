
let amigos = [];

function agregarAmigo() {
    let listaAmigos = document.getElementById('amigo').value;

    if (listaAmigos === '' ) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (amigos.includes(listaAmigos)) {
        return;
    }
    if (!isNaN(listaAmigos)) {
        alert("No se permiten números.");
        return;
    }

    amigos.push(listaAmigos);
    document.getElementById('amigo').value = "";
    mostrarAmigos();
    console.log(amigos);
    return;
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    //innerhtml limpia la lista
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i];             
        lista.appendChild(li);         
    }
    return;
}

function sortearAmigo() {
    let amigoSorteo = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[amigoSorteo];
    
    document.getElementById('resultado').innerHTML = "El amigo secreto sorteado es: " + `${amigoSecreto}`;
    if (amigos.length === 0 || amigos.length <= 1) {
        alert("Ingrese nombres a la lista!");
    }
    return;
}

