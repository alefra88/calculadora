let numeroActual = '';
    let numeroAnterior = '';
    let operacion = null;

    const pantalla = document.getElementById('pantalla'); 

    function agregarNumero(num) {
        if (num === '.' && numeroActual.includes('.')) return;
        
        numeroActual += num;
        pantalla.value = numeroActual;
    }

    function seleccionarOperacion(op) {
        if (numeroActual === '' && numeroAnterior !== '') {
            operacion = op;
            return;
        }

        if (numeroActual === '') return;
        
        if (numeroAnterior !== '') calcularResultado();
        
        operacion = op;
        numeroAnterior = numeroActual;
        numeroActual = '';
    }

    function aplicarPorcentaje() {
        if (numeroActual === '') return;

        const actual = parseFloat(numeroActual);
        let resultadoParcial;

        if (numeroAnterior !== '' && operacion !== null) {
            const anterior = parseFloat(numeroAnterior);

            const porcentajeValor = anterior * (actual / 100);

            if (operacion === '+' || operacion === '-') {
                numeroActual = porcentajeValor.toString();
            } else {
                numeroActual = (actual / 100).toString();
            }  
        } else {
            resultadoParcial = actual / 100;
            numeroActual = resultadoParcial.toString();
        }
        pantalla.value = numeroActual;
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
    