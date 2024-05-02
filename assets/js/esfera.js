import createDivResult from "./modules/createDivResult.js";
const form = document.querySelector("form");
window.onresize = () => location.reload();

form.addEventListener("submit", e => {
    e.preventDefault();

    const numberInput = parseFloat(document.querySelector("input[type='number']").value);

    const area = `A área é equivalente à ${(4 * (Math.PI * (numberInput ** 2))).toFixed(2)}cm e seu volume é de ${((4 * (Math.PI * (numberInput ** 3))) / 3).toFixed(2)}cm.`;

    createDivResult(form, area);
})