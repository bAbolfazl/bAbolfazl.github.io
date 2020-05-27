var totalQuestions = 8;
var currentQuestion = 0;
var $progressbar = $("#progressbar");

let bet = 1000;
const betCont = document.querySelector('#betCont')

$("#next").on("click", function () {
    if (currentQuestion >= totalQuestions) { return; }
    currentQuestion++;
    $progressbar.css("width", Math.round(100 * currentQuestion / totalQuestions) + "%");

    bet = (currentQuestion + 1) * 1000
    // alert(bet)
    betCont.innerHTML = bet
});

$("#prev").on("click", function () {
    if (currentQuestion > totalQuestions || currentQuestion <= 0) { return; }
    currentQuestion--;
    $progressbar.css("width", Math.round(100 * currentQuestion / totalQuestions) + "%");

    bet = (currentQuestion + 1) * 1000
    // alert(bet)
    betCont.innerHTML = bet
}); 