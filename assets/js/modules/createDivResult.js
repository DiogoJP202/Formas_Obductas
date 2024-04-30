export default (element, content) => {
    if (document.querySelector("form > div")) {
        let divs = document.querySelector("form > div");
        divs.remove();
    }
    
    const div = document.createElement("div");
    div.innerHTML = content;
    div.classList.add("resultado");
    return element.appendChild(div);
}