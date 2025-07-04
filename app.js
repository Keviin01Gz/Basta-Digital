const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split('');
const categorias = ["Nombre", "Animal", "Comida", "Ciudad", "Objeto"];
let jugadores = [];
let letraActual = '';

function addPlayer() {
    const nombre = document.getElementById('newPlayer').value.trim();
    if (nombre) {
        jugadores.push(nombre);
        updatePlayerList();
        document.getElementById('newPlayer').value = '';
    }
}

function updatePlayerList() {
    const list = document.getElementById('playersList');
    list.innerHTML = '';
    jugadores.forEach((j, i) => {
        const p = document.createElement('p');
        p.textContent = (i + 1) + ". " + j;
        list.appendChild(p);
    });
}

function startGame() {
    if (jugadores.length === 0) {
        alert("Agrega al menos un jugador.");
        return;
    }
    document.getElementById('setup').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    letraActual = letras[Math.floor(Math.random() * letras.length)];
    document.getElementById('letter').innerText = letraActual;

    const formsContainer = document.getElementById('playerForms');
    formsContainer.innerHTML = '';
    jugadores.forEach(nombre => {
        const form = document.createElement('div');
        form.className = 'player-form';
        form.innerHTML = `<h3>${nombre}</h3>`;
        categorias.forEach(cat => {
            const input = document.createElement('input');
            input.name = cat;
            input.placeholder = cat;
            form.appendChild(input);
        });
        formsContainer.appendChild(form);
    });
}

function stopGame() {
    const resultDiv = document.getElementById('resultsList');
    resultDiv.innerHTML = '';
    const forms = document.querySelectorAll('.player-form');
    forms.forEach((form, i) => {
        const inputs = form.querySelectorAll('input');
        const div = document.createElement('div');
        div.innerHTML = `<h4>${jugadores[i]}</h4>`;
        inputs.forEach(input => {
            const p = document.createElement('p');
            p.textContent = input.placeholder + ": " + (input.value || '-');
            div.appendChild(p);
        });
        resultDiv.appendChild(div);
    });
    document.getElementById('game').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}

function resetGame() {
    document.getElementById('setup').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.getElementById('game').style.display = 'none';
}