export default function createCube(position){
    const body = document.querySelector("body");
    let cubo = document.createElement("div");
    cubo.classList.add("cubo");
    cubo.style.left = `${position}px`;
    body.appendChild(cubo);
    return position =+ 52;
}