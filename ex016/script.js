let = a = []
function adicionar() {
    let num = window.document.getElementById('txtn')
    let analise = window.document.getElementById('anl')

    if (num.value.length == '') {
        window.alert('Preecha o campo para adicionar valores!')
    }
    else if (num.value > 100) {
        window.alert('Número inválido!')
    }
    else {
        let n = Number(num.value)
        
        if (n >= 0 && n <= 100) {
           
            let pos = a.indexOf(n)
            if (pos == -1 ) {
                a.push(n)
                let i = document.createElement('option')
                i.text = `Número ${n} adicionado.`
                i.value = `${analise}`
                analise.appendChild(i)

            }
            else {
                window.alert('Valor já adicionado!')
            }

        }
    }
}

function finalizar() {
    
}