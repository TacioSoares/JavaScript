/*
var q1 = document.querySelector('#um')
var q2 = document.querySelector('#dois')
var q3 = document.querySelector('#tres')
var q4 = document.querySelector('#quatro')
var q5 = document.querySelector('#cinco') 
*/

var questao = [1,2,3,4,5]
var c = (questao.length - 1)

function embaralha(lista) {

    for(c = (lista.length - 1); c > 0; c--) {
        i = Math.floor(Math.random() * c)
        vx = lista.splice(i,1)
        questao.push(vx[0])
    }
}