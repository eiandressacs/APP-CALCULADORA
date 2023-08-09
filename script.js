function calcular(tipo, valor) {
    if (tipo === 'acao') {

        if (valor === 'c') {
            //limpar o visor (id resultado)
            document.getElementById('resultado').value = ''
        }
        /*se o valor for qualquel um destes, ira concatenar os
        numeros  com um tipo abaixo*/
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            var valorCampo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valorCampo
        }

    } else if (tipo === 'valor') {
        /*var valorCampo = document.getElementById('resultado').value
        document.getElementById('resultado').value = valorCampo + valor*/
        document.getElementById('resultado').value += valor
    }
}
