
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('#msg')   
    var nasc = (window.document.querySelector('#idade').value)
    var sexo = window.document.getElementsByName('sexo')
    if (nasc.length < 4 || nasc > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var idade = Number(ano-nasc) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade == 0 && idade < 2) {
                // Bebê 
                img.setAttribute('src', 'imagens/bebemenino.png')
            } else if (idade == 2 && idade < 13) {
                // criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade == 13 && idade < 18) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescentehomem.png')
            } else if (idade == 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else if (idade == 50 && idade < 60) {
                //senhor
                img.setAttribute('src', 'imagens/senhor.png')
            } else if (idade >= 60) {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            genero = 'mulher'
            if (idade == 0 && idade < 2) {
                // Bebê 
                img.setAttribute('src', 'imagens/bebemenina.png')
            } else if (idade == 2 && idade < 13) {
                // criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade == 13 && idade < 18) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescentemulher.png')
            } else if (idade == 18 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta.png')
            } else if (idade == 50 && idade < 60) {
                //senhor
                img.setAttribute('src', 'imagens/senhora.png')
            } else if (idade >= 60) {
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}    