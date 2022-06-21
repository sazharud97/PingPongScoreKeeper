const scoreboard = document.querySelector('#scoreboard');
const scoreSelect = document.querySelector('#scoreLimit');
let maxScore = parseInt(document.querySelector('#scoreLimit option:checked').value);

// buttons
let pointP1 = document.querySelector('#pointP1');
let pointP2 = document.querySelector('#pointP2');
let resetButton = document.querySelector('#resetButton');

// score reader spans
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');


let scoreP1 = 0;
let scoreP2 = 0;

scoreSelect.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    reset();
})

// p1 button logic
pointP1.addEventListener('click', function () {
    if (scoreP1 < maxScore) {
        scoreP1++;
        // checks on click if player won.
        if (scoreP1 === maxScore) {
            pointP1.disabled = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
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
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = `${scoreP2}`;
    }
})

// As advertised, resets everything back to square one
resetButton.addEventListener('click', reset)

function reset() {
    scoreP1 = 0;
    scoreP2 = 0;
    p2Display.textContent = `${scoreP2}`;
    p1Display.textContent = `${scoreP1}`;
    pointP1.disabled = false;
    pointP2.disabled = false;
    // removes classes so that they can be re-added on subsequent games
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');

}



