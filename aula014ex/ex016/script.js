function verificar() {
    var inicio = window.document.getElementById('ini')
    var final = window.document.getElementById('fim')
    var pulo = window.document.getElementById('passo')
    var result = window.document.getElementById('result')
    
    var i = Number(inicio.value)
    var f = Number(final.value)
    var p = Number(pulo.value)

    while (i <= f) {
        result.innerHTML = `Contando: ${i}`
        i += p
   
    }
    
}