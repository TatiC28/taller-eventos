function mostrarMensaje() {
    alert('Hola!');
}


document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#btnHola');

    button.addEventListener('click', mostrarMensaje);

});
