const p1 = {
    score: 0,
    button: document.querySelector('#pointP1'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#pointP2'),
    display: document.querySelector('#p2Display')
}

const scoreboard = document.querySelector('#scoreboard');
const scoreSelect = document.querySelector('#scoreLimit');
let maxScore = parseInt(document.querySelector('#scoreLimit option:checked').value);

// buttons
// let pointP1 = document.querySelector('#pointP1');
// let pointP2 = document.querySelector('#pointP2');
let resetButton = document.querySelector('#resetButton');

// score reader spans
// let p1Display = document.querySelector('#p1Display');
// let p2Display = document.querySelector('#p2Display');


// let scoreP1 = 0;
// let scoreP2 = 0;
function updateScores(player, opponent) {
    if (player.score < maxScore) {
        player.score++;
        // checks on click if player won.
        if (player.score === maxScore) {
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
        }
        player.display.textContent = `${player.score}`;
    }
}

scoreSelect.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    reset();
})

// p1 button logic
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

// p2 button logic
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
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



