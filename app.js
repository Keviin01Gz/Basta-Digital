const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split('');
const categorias = ["Nombre", "Animal", "Comida", "Ciudad", "Objeto"];
let letraActual = '';
let jugador = '';

function startGame() {
    jugador = document.getElementById('playerName').value || 'Jugador 1';
    document.getElementById('setup').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    letraActual = letras[Math.floor(Math.random() * letras.length)];
    document.getElementById('letter').innerText = letraActual;

    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '';
    categorias.forEach(cat => {
        const label = document.createElement('label');
        label.textContent = cat + ':';
        const input = document.createElement('input');
        input.name = cat;
        categoriesDiv.appendChild(label);
        categoriesDiv.appendChild(input);
        categoriesDiv.appendChild(document.createElement('br'));
    });
}

function stopGame() {
    const formData = new FormData(document.getElementById('bastaForm'));
    const resultList = document.getElementById('resultsList');
    resultList.innerHTML = '';
    for (let [key, value] of formData.entries()) {
        const li = document.createElement('li');
        li.textContent = key + ": " + value;
        resultList.appendChild(li);
    }
    document.getElementById('game').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}