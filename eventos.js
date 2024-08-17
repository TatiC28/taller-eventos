function mostrarMensaje(e) {
    e.stopPropagation();
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#btnHola');

    button.addEventListener('click', mostrarMensaje);
});
