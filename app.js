const scoreboard = document.querySelector('#scoreboard');
const scoreSelect = document.querySelector('#scoreLimit');
var maxScore = parseInt(document.querySelector('#scoreLimit option:checked').value);
var pointP1 = document.querySelector('#pointP1');
var pointP2 = document.querySelector('#pointP2');
var scoreP1 = 0;
var scoreP2 = 0;

scoreSelect.addEventListener('change', function () {
    maxScore = parseInt(document.querySelector('#scoreLimit option:checked').value);
})

if (scoreP1 < maxScore && scoreP2 < maxScore) {
    pointP1.addEventListener('click', function () {
        scoreP1++;
        scoreboard.innerText = `${scoreP1} to ${scoreP2}`;
    })
    pointP2.addEventListener('click', function () {
        scoreP2++;
        scoreboard.innerText = `${scoreP1} to ${scoreP2}`;
    })
}

