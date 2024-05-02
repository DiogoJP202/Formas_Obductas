import cubo from "./modules/chuva.js";
import randomTime from "./modules/randonTime.js"
let position = 0;
window.onresize = () => location.reload();

for(let contador = 0; parseInt(window.innerWidth / 50) > contador; contador++){
    setTimeout(() => {
        position += cubo(position)
    }, randomTime(contador));
}