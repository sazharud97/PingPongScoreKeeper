const scoreboard = document.querySelector('#scoreboard');
const scoreSelect = document.querySelector('#scoreLimit');
const pointP1 = document.querySelector('#pointP1');
const pointP2 = document.querySelector('#pointP2');
const scoreP1 = 0;
const scoreP2 = 0;

if (scoreP1 < maxScore && scoreP2 < maxScore) {
    pointP1.addEventListener('click', function () {
        scoreP1++;
    })
    pointP2.addEventListener('click', function () {
        scoreP2++;
    })
}