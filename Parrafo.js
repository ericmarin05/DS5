// Selecciona el campo de entrada y el div para mostrar el texto invertido
const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

// Añade un evento para detectar cambios en el campo de entrada
inputField.addEventListener('input', function() {
    // Obtiene el texto actual del campo
    const currentText = inputField.value;

    // Invierte el texto
    const reversedText = currentText.split('').reverse().join('');

    // Actualiza el contenido del div con el texto invertido
    output.textContent = reversedText;
});
