const noturno = document.querySelector("#modo-noturno");;
const body = document.querySelector("body");

noturno.addEventListener('click', ()=> {
    const modo = noturno.checked ? "dark" : "light";
    body.setAttribute("data-bs-theme", modo);
})