function contar() {
    var inicio = Number(window.document.querySelector('#inicio').value)
    var fim = Number(window.document.getElementById('fim').value)
    var passo = Number(window.document.getElementById('passo').value)
    if (inicio.length == 0) {
        window.alert('Preencha o campo Início')
    } else if (fim.length == 0) {
        window.alert('Preencha o campo Fim')
    } 
}