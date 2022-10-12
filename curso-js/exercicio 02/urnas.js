var campo1 = window.document.querySelector('#campo1')
var campo2 = window.document.querySelector('#campo2')
var fotocandidato = window.document.querySelector('#fotopolitico')
var candidato = window.document.querySelector('#politico') 
var dig1 = null
var dig2 = null
var lula = 0
var bolsonaro = 0
var nulo = 0
var total = 0
var res = window.document.querySelector('#res')
var tela = window.document.querySelector('#tela')
// Contabilização dos votos
 

// Mostrando candidato na tela 

function digitando(n) {
    if (campo2.innerHTML != '' ) {
        return window.alert('Agora você precisa confirmar ou corrigir')
    } else if (campo1.innerHTML == '') {
        dig1 = n
        campo1.innerHTML = dig1
        campo1.style.padding ='14px 9.5px'
    } else {
        dig2 = n
        campo2.innerHTML = dig2
        campo2.style.padding = '14px 9.5px' 
    }
    if (dig1 != null && dig2 !=null) {
        if (dig1 == 2 && dig2 ==2) {
            candidato.innerHTML ='Presidente: Bolsonaro<br><br>'
            candidato.innerHTML +='Vice: Braga Netto<br><br>'
            candidato.innerHTML +='Partido: PL'
            fotocandidato.style.display = 'block'
            var img = document.createElement('img')
            img.setAttribute('id' , 'foto')
            img.setAttribute('src' , 'imagens/bozo.jpg')
            fotocandidato.appendChild(img)
        } else if (dig1 == 1 && dig2 ==3) {
            candidato.innerHTML ='Presidente: Lula<br><br>'
            candidato.innerHTML +='Vice: Geraldo Alckmin<br><br>'
            candidato.innerHTML +='Partido: PT'
            fotocandidato.style.display = 'block'
            var img = document.createElement('img')
            img.setAttribute('id' , 'foto')
            img.setAttribute('src' , 'imagens/lula.jpeg')
            fotocandidato.appendChild(img) 
        } else if (dig2 != 3 || dig2 != 2) {
            candidato.innerHTML ='Nulo'
            candidato.style.padding = '20px'
        }
    }     
}

// corrigindo voto 

function corrige() {
    dig1 = null
    dig2 = null
    campo1.innerHTML = ''
    campo1.style.padding = '14px'
    campo2.innerHTML = ''
    campo2.style.padding = '14px'
    candidato.innerHTML = ''
    img = window.document.getElementById('foto')
    img.parentNode.removeChild(img)
}

// confirmando o voto

function confirma() {
    if (campo1.innerHTML == '' || campo2.innerHTML == '') {
        window.alert('Você ainda não votou!')
    } else {
        if (dig1 == 1 && dig2 == 3) {
            lula += 1
        } else if (dig1 == 2 && dig2 == 2) {
            bolsonaro += 1
        } else {
            nulo += 1
        }
        total += 1
        tela.style.display = 'block'
        setTimeout(function(){
            tela.style.display ='none'
            corrige()
        },1500)
    }
}  

// votando em branco

function branco() {
    nulo += 1
    total += 1
    tela.style.display = 'block'
    setTimeout(function(){
        tela.style.display ='none'
        corrige()
    },1500)
}
// Encerrando a seção
function encerrar() {
    if (total > 0) {
        res.innerHTML = `O total de votos foram ${total} <br><br> O candidato Bolsonaro recebeu ${bolsonaro} votos. <br><br> O candidato Lula recebeu ${lula} votos. <br><br> Foram ${nulo} votos brancos ou nulos.`
        res.style.padding ='15px'
    }   
}

