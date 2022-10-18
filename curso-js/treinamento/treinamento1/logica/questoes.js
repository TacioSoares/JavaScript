
var q1 = document.querySelector('#um')
var q2 = document.querySelector('#dois')
var q3 = document.querySelector('#tres')
var q4 = document.querySelector('#quatro')
var q5 = document.querySelector('#cinco') 


var questao = [document.querySelector('#quest01'), document.querySelector('#quest02'), document.querySelector('#quest03'), document.querySelector('#quest04'), document.querySelector('#quest05')]

function embaralha() {
    var c = (questao.length - 1)
    for (c; c>0 ; c--) {
        var i = Math.floor(Math.random() * (c+1))
        [questao[c-1], questao[i]] = [questao[i], questao[c-1]]
    }
}

