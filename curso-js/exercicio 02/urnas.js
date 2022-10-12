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
// Contabilização dos votos

while (encerrar() == false) {
    if (confirma() == 'lula') {
        lula += 1
    } else if (confirma() == 'bolsonaro') {
        bolsonaro += 1
    } else {
        nulo += 1
    }
} 

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

// Limpando a tela 

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
        var digito1 = Number(window.document.querySelector('#campo1').value)
        var digito2 = Number(window.document.querySelector('#campo2').value)
        if (digito1 == 1 && digito2 == 3) {
            return 'lula'
        } else if (digito1 == 2 && digito2 == 2) {
            return 'bolsonaro'
        } else {
            return 'nulo'
        }
    }
    total += 1
}  

// Encerrando a seção

function encerrar() {
    res.innerHTML = `O total de votos foram ${total} <br><br> O candidato Bolsonaro recebeu ${bolsonaro} votos. <br><br> O candidato Lula recebeu ${lula} votos. <br><br> Foram ${nulo} votos brancos ou nulos.`
}
