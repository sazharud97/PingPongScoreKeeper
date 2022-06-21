const scoreboard = document.querySelector('#scoreboard');
const scoreSelect = document.querySelector('#scoreLimit');
var maxScore = parseInt(document.querySelector('#scoreLimit option:checked').value);

// buttons
var pointP1 = document.querySelector('#pointP1');
var pointP2 = document.querySelector('#pointP2');
var resetButton = document.querySelector('#resetButton');

// score reader spans
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');


let scoreP1 = 0;
let scoreP2 = 0;

scoreSelect.addEventListener('change', function () {
    maxScore = parseInt(document.querySelector('#scoreLimit option:checked').value);
})

// p1 button logic
pointP1.addEventListener('click', function () {
    if (scoreP1 < maxScore) {
        scoreP1++;
        // checks on click if player won.
        if (scoreP1 === maxScore) {
            pointP1.disabled = true;
            p1Display.style.color = 'green';
            p2Display.style.color = 'red';
        }
        p1Display.textContent = `${scoreP1}`;
    }
})

// p2 button logic
pointP2.addEventListener('click', function () {
    if (scoreP2 < maxScore) {
        scoreP2++;
        // checks on click if player won.
        if (scoreP2 === maxScore) {
            pointP2.disabled = true;
            p2Display.style.color = 'green';
            p1Display.style.color = 'red';
        }
        p2Display.textContent = `${scoreP2}`;
    }
})

// As advertised, resets everything back to square one
resetButton.addEventListener('click', function () {
    scoreP1 = 0;
    scoreP2 = 0;
    p2Display.textContent = `${scoreP2}`;
    p1Display.textContent = `${scoreP1}`;
    pointP1.disabled = false;
    pointP2.disabled = false;
    p2Display.style.color = 'black';
    p1Display.style.color = 'black';
})



