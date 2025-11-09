
    let numeroActual = '';
    let numeroAnterior = '';
    let operacion = null;

    const pantalla = document.getElementById('pantalla');

    function agregarNumero(num) {
        numeroActual += num;
        pantalla.value = numeroActual;
    }

    function seleccionarOperacion(op) {
        if (numeroActual === '') return;
        if (numeroAnterior !== '') calcularResultado();
        operacion = op;
        numeroAnterior = numeroActual;
        numeroActual = '';
    }

    function calcularResultado() {
        let resultado;
        const anterior = parseFloat(numeroAnterior);
        const actual = parseFloat(numeroActual);
        if (isNaN(anterior) || isNaN(actual)) return;

        switch (operacion) {
            case '+': resultado = anterior + actual; break;
            case '-': resultado = anterior - actual; break;
            case '*': resultado = anterior * actual; break;
            case '/': resultado = actual === 0 ? 'Error' : anterior / actual; break;
            case '%': resultado = anterior === 0 ? 'Error': anterior / 100; break;
            default: return;
        }

        pantalla.value = resultado;
        numeroActual = resultado.toString();
        numeroAnterior = '';
        operacion = null;
    }

    function limpiar() {
        numeroActual = '';
        numeroAnterior = '';
        operacion = null;
        pantalla.value = '';
    }
