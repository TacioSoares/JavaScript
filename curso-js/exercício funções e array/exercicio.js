
let num = window.document.querySelector('#num')
let lista = window.document.querySelector('#campo')
let res = window.document.querySelector('#res')
let val = []



function adicionar() {
    if (Number(num.value) > 100 || Number(num.value) <= 0) {
        window.alert('Adicione um número entre 1 e 100')
    } else if (val.indexOf(Number(num.value)) != -1)  {
        window.alert('Número já adicionado')
    } else {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${Number(num.value)} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    num.value =''
    num.focus()
}

function analisar() {
    if (val.length == 0) {
        window.alert('É necessário adicionar valores')
    } else {
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0
        for (let pos in val) {
            soma += val[pos]
            if (val[pos] > maior)
                maior = val[pos]
            if (val [pos] < menor)
                menor = val[pos]    
        }
        media = (soma)/(tot)
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números adicionados</p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os números informados foi ${soma}.</p>`
        res.innerHTML += `<p>A média dos números informados foi ${media}.</p>`
    }
}
