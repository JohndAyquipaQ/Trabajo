// Evento para mostrar/ocultar el panel derecho al hacer clic en el icono de tres puntos
document.querySelector('.bi-three-dots-vertical').addEventListener('click', function() {
    document.querySelector('.m-derecho').classList.toggle('active');
});

// Añadir evento para cada elemento de lista clickeable
document.querySelectorAll('.list_item--click').forEach(listItem => {
    listItem.addEventListener('click', () => {
        listItem.querySelector('.list_button--click').classList.toggle('arrow');

        let height = 0;
        let menu = listItem.querySelector('.list__show');
        if (menu.clientHeight === 0) {
            height = menu.scrollHeight;
        } else {
            height = 0; // Si ya está abierto, cierra el menú
        }

        menu.style.height = height + "px";
    });
});

// Evento para cambiar el sidebar y el header al cambiar el toggle del menú
document.getElementById('menu-toggle').addEventListener('change', function() {
    document.getElementById('sidebar').classList.toggle('visible', this.checked);
    document.getElementById('header').classList.toggle('reduced-left', this.checked);
});
