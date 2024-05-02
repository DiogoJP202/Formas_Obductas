import createDivResult from "./modules/createDivResult.js";
const form = document.querySelector("form");
window.onresize = () => location.reload();

form.addEventListener("submit", e => {
    e.preventDefault();

    const numberInputs = document.querySelectorAll("input[type='number']");
    const areaFace = parseFloat(numberInputs[0].value);
    const aresta = parseFloat(numberInputs[1].value);

    const area = `A área é equivalente à ${(areaFace * 6).toFixed(2)}cm e seu volume é de ${(aresta ** 3).toFixed(2)}cm.`;

    createDivResult(form, area);
})