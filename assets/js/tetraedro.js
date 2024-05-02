import createDivResult from "./modules/createDivResult.js";
const form = document.querySelector("form");
window.onresize = () => location.reload();

form.addEventListener("submit", e => {
    e.preventDefault();

    const numberInputs = document.querySelectorAll("input[type='number']");
    const comprimento = parseFloat(numberInputs[0].value);
    const areaT = Math.sqrt(3) * (comprimento ** 2) * 4;

    const area = `A área é equivalente à ${(areaT).toFixed(2)}cm e seu volume é de ${((areaT * Math.sqrt(2)) / 12).toFixed(2)}cm.`;

    createDivResult(form, area);
})