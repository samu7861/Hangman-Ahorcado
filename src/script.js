//llamado de elementos html
const wordContainer = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const usedLettersElement = document.getElementById('usedLetters');

//asignación de parámetros del canva
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width  = 0;
ctx.canvas.height = 0;

//ariables de juego
let selectedWord
let usedLetters
let mistakes
let hits

//vector de dibujo
const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

//función crear poste
const drawHangMan = () => {
    ctx.canvas.width  = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#800000';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
};

//función pintar palabra
const drawWord = () => {
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        letterElement.classList.add('letter');
        letterElement.classList.add('hidden');
        wordContainer.appendChild(letterElement);
    });
};

//función palabra aleatoria
const selectRandomWord = () => {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    selectedWord = word.split('');
};


//función inicio de juego y llamado de evento
const startGame = () => {
    usedLetters = []
    mistakes = 0
    hits = 0
    wordContainer.innerHTML = ''
    usedLettersElement.innerHTML = ''
    startButton.style.display = 'none'
    drawHangMan()
    selectRandomWord()
    drawWord()
    document.addEventListener('keydown', letterEvent)
};

startButton.addEventListener('click', startGame)


