const scoreboard = document.querySelector('#scoreboard');
const scoreSelect = document.querySelector('#scoreLimit');
var maxScore = parseInt(document.querySelector('#scoreLimit option:checked').value);
var pointP1 = document.querySelector('#pointP1');
var pointP2 = document.querySelector('#pointP2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');

let scoreP1 = 0;
let scoreP2 = 0;
let five = 5;

scoreSelect.addEventListener('change', function () {
    maxScore = parseInt(document.querySelector('#scoreLimit option:checked').value);
})

// if (scoreP1 !== maxScore || scoreP2 !== maxScore) {
pointP1.addEventListener('click', function () {
    if (scoreP1 < maxScore) {
        scoreP1++;
        p1Display.textContent = `${scoreP1}`;
    }
    else {
        pointP1.disabled = true;
    }

})
pointP2.addEventListener('click', function () {
    if (scoreP2 < maxScore) {
        scoreP2++;
        p2Display.textContent = `${scoreP2}`;
    }
    else {
        pointP2.disabled = true;
    }
})
//}

