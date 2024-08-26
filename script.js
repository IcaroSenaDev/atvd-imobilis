function calcularArea() {
    // obtem os valores
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    
    // confere os valores
    if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
        alert("Por favor, insira valores válidos e maiores que zero.");
        return;
    }

    // calcular a area
    const area = largura * comprimento;
    
    // mostra o resultado
    document.getElementById('resultadoArea').textContent = `A área do terreno é ${area} metros quadrados.`;
}
