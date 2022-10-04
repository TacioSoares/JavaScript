function contar () {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos.')
    } else {
        res.innerHTML = 'Contando...<br><br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        var c = i
        if (p == 0) {
            res.innerHTML ='Impossível contar'
        } else
        if (i < f) {
            while (c <= f) {
                res.innerHTML += `${c}... `
                c = c + p
            }    
        } else {
            while (c >= f) {
                res.innerHTML += `${c}... `
                c = c - p
            } 
        }
    } res.innerHTML += '<br><br><strong>Fim da contagem!</strong>'
}