document.addEventListener("DOMContentLoaded", () => {
  // Define la función de cálculo de porcentaje
  function calculatePercentage() {
    const percentage = parseFloat(document.getElementById('percentage').value);
    const total = parseFloat(document.getElementById('total').value);
    let result = (percentage / 100) * total;
    result = result % 1 === 0 ? result : result.toFixed(2);
    document.getElementById('result').textContent = result;
  }

  // Añade un event listener al botón después de que se haya insertado en el DOM
  document.getElementById('calculate-btn').addEventListener('click', calculatePercentage);
});
