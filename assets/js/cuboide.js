import createDivResult from "./modules/createDivResult.js";
const form = document.querySelector("form");
window.onresize = () => location.reload();

form.addEventListener("submit", e => {
    e.preventDefault();

    const numberInputs = document.querySelectorAll("input[type='number']");
    const comprimento = parseFloat(numberInputs[0].value);
    const largura = parseFloat(numberInputs[1].value);
    const altura = parseFloat(numberInputs[2].value);

    const area = `A área é equivalente à ${(2 * ((comprimento * largura) + (comprimento * altura) + (largura * altura))).toFixed(2)}cm e seu volume é de ${(comprimento * largura * altura).toFixed(2)}cm.`;

    createDivResult(form, area);
})