import createDivResult from "./modules/createDivResult.js";
const form = document.querySelector("form");
window.onresize = () => location.reload();

form.addEventListener("submit", e => {
    e.preventDefault();

    const numberInputs = document.querySelectorAll("input[type='number']");
    const comprimento = parseFloat(numberInputs[0].value);
    const largura = parseFloat(numberInputs[1].value);

    const area = `A área é equivalente à ${(largura * comprimento).toFixed(2)}cm e seu perímetro é de ${(2 * (largura * comprimento)).toFixed(2)}cm.`;

    createDivResult(form, area);
})