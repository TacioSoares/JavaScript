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


// Mostrando candidato na tela 

function digitando(n) {
    if (campo2.innerHTML != '' ) {
        return window.alert('Agora você precisa confirmar ou corrigir')
    } else if (campo1.innerHTML == '') {
        dig1 = n
        campo1.innerHTML = dig1
    } else {
        dig2 = n
        campo2.innerHTML = dig2 
    }
    if (dig1 != null && dig2 !=null) {
        if (dig1 == 2 && dig2 ==2) {
            candidato.innerHTML ='Presidente: Bolsonaro<br><br>'
            candidato.innerHTML +='Vice: Braga Netto<br><br>'
            candidato.innerHTML +='Partido: PL'
            fotocandidato.style.display = 'block'
            fotocandidato.style.padding = '0px'
            var img = document.createElement('img')
            img.setAttribute('id' , 'foto')
            img.setAttribute('src' , 'imagens/bozo.jpg')
            fotocandidato.appendChild(img)
        } else if (dig1 == 1 && dig2 ==3) {
            candidato.innerHTML ='Presidente: Lula<br><br>'
            candidato.innerHTML +='Vice: Geraldo Alckmin<br><br>'
            candidato.innerHTML +='Partido: PT'
            fotocandidato.style.display = 'block'
            fotocandidato.style.padding = '0px'
            var img = document.createElement('img')
            img.setAttribute('id' , 'foto')
            img.setAttribute('src' , 'imagens/lula.jpeg')
            fotocandidato.appendChild(img) 
        } else if (dig2 != 3 || dig2 != 2) {
            candidato.innerHTML ='Nulo'
        }
    }     
}

// corrigindo voto 

function corrige() {
    dig1 = null
    dig2 = null
    campo1.innerHTML = ''
    campo2.innerHTML = ''
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
            roubo()
        } else if (dig1 == 2 && dig2 == 2) {
            bolsonaro += 1
            roubo()
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

// Fraudando a seção

function roubo() {
    var golpe = document.querySelector('#fraude').value
    if (golpe == 1) {
        if (total % 3 == 2) {
            lula += 1
            bolsonaro -= 1
        }    
    } else if (golpe == 3) {
        if (total % 3 == 2) {
            bolsonaro += 1
            lula -= 1
        }
    } 
}  
// Encerrando a seção

function encerrar() {
    if (total > 0) {
        res.style.display = 'block'
        res.innerHTML = `O total de votos foram ${total} <br><br> O candidato Bolsonaro recebeu ${bolsonaro} votos. <br><br> O candidato Lula recebeu ${lula} votos. <br><br> Foram ${nulo} votos brancos ou nulos.<br><br>`
        res.style.padding ='10px'
        if (lula > bolsonaro) {
            var vencedor = 'O vencedor dessa seção foi o <strong>Lula</strong>.'
            document.body.style.backgroundImage = 'linear-gradient(to right, darkred, red'
        } else if (bolsonaro > lula) {
            var vencedor = 'O vencedor dessa seção foi o <strong>Bolsonaro</strong>.'
            document.body.style.backgroundImage = 'linear-gradient(to right, rgb(153, 153, 3), rgba(255, 255, 0, 0.822)'
        } else {
            var vencedor = 'Nessa seção houve um <strong>empate</strong>.'
            document.body.style.backgroundImage = 'linear-gradient(to right, black, gray)'
        }
        res.innerHTML += `${vencedor}`
    } res.scrollIntoView()   
}

