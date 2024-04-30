import createDivResult from "./modules/createDivResult.js";

const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const numberInputs = document.querySelectorAll("input[type='number']");
    const base = parseFloat(numberInputs[0].value);
    const altura = parseFloat(numberInputs[1].value);
    const lados = parseFloat(numberInputs[2].value);

    const area = `A área é equivalente à ${((base * altura) / 2).toFixed(2)}cm e seu perímetro é de ${(base + (lados * 2)).toFixed(2)}cm.`;

    createDivResult(form, area);
})