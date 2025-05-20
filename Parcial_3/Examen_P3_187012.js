document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btncalcular').addEventListener('click', calcularTotal);
});

function calcularTotal() {
    
    const horasInput = document.getElementById('horas');
    const tipoSelect = document.getElementById('tipo');
    const resultadoParrafo = document.getElementById('calculo');
    
    
    if (!horasInput.value || isNaN(horasInput.value)) {
        resultadoParrafo.textContent = "Por favor ingresa un número válido de horas";
        resultadoParrafo.style.color = "#d32f2f";
        return;
    }
    
    const horas = parseFloat(horasInput.value);
    
    
    let tarifa;
    let tipoVehiculo;
    
    switch(tipoSelect.value) {
        case 'value1':
            tarifa = 20.00;
            tipoVehiculo = "Auto chico";
            break;
        case 'value2':
            tarifa = 30.00;
            tipoVehiculo = "Camioneta";
            break;
        case 'value3':
            tarifa = 40.00;
            tipoVehiculo = "Camión";
            break;
        default:
            tarifa = 0;
            tipoVehiculo = "Desconocido";
    }
    
    const total = horas * tarifa;
    
    resultadoParrafo.innerHTML = `
        <strong>Recibo de pago</strong><br>
        Tipo: ${tipoVehiculo}<br>
        Horas: ${horas.toFixed(2)}<br>
        Tarifa por hora: $${tarifa.toFixed(2)} MXN<br>
        <span style="font-size: 1.2em; color: #6a1b9a;">Total a pagar: $${total.toFixed(2)} MXN</span>
    `;
    resultadoParrafo.style.color = "#000";
}