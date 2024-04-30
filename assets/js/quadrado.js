import createDivResult from "./modules/createDivResult.js";

const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const numberInput = parseFloat(document.querySelector("input[type='number']").value);
    const area = `A área é equivalente à ${(numberInput ** 2).toFixed(2)}cm e seu perímetro é de ${(numberInput * 4).toFixed(2)}cm.`;

    createDivResult(form, area);
})