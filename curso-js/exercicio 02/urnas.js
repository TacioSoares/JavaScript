var campo1 = window.document.querySelector('#campo1')
var campo2 = window.document.querySelector('#campo2')
var fotocandidato = window.document.querySelector('#fotopolitico')
var candidato = window.document.querySelector('#politico')   
function digitando(n) {
    if (campo2.innerHTML != '' ) {
        return window.alert('Agora você precisa confirmar ou corrigir')
    }
    if (campo1.innerHTML == '') {
        dig1 = n
        campo1.innerHTML = dig1
        campo1.style.padding ='14px 9.5px'
    } else {
        dig2 = n
        campo2.innerHTML = dig2
        campo2.style.padding = '14px 9.5px' 
    }
    if (dig1 == 2 && dig2 ==2) {
        candidato.innerHTML ='Presidente: Bolsonaro<br><br>'
        candidato.innerHTML +='Vice: Braga Netto<br><br>'
        candidato.innerHTML +='Partido: PL'
        var img = document.createElement('img')
        img.setAttribute('src' , 'imagens/bozo.jpg')
        fotocandidato.appendChild(img)
    } else if (dig1 == 1 && dig2 ==3) {
        candidato.innerHTML ='Presidente: Lula<br><br>'
        candidato.innerHTML +='Vice: Geraldo Alckmin<br><br>'
        candidato.innerHTML +='Partido: PT'
        var img = document.createElement('img')
        img.setAttribute('src' , 'imagens/lula.jpeg')
        fotocandidato.appendChild(img)
    } else if (dig2 != 2 || dig2 != 3) {
        candidato.innerHTML ='Nulo<br>'
        fotocandidato.style.padding = '100px'
    }
}