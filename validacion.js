document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuNav = document.querySelector('.menu__nav');
    const menuList = document.querySelector('.menu__list');

    // Función para abrir/cerrar el menú al hacer clic en el icono de menú
    menuToggle.addEventListener('click', function() {
        // Toggle para mostrar/ocultar la lista completa al hacer clic en el icono de menú
        menuNav.classList.toggle('open');

        if (menuNav.classList.contains('open')) {
            // Si el menú está abierto, crear una lista desplegable en una sola columna
            menuList.style.display = 'block'; // Mostrar la lista
            menuList.style.flexDirection = 'column'; // Establecer dirección de columna
            menuList.style.alignItems = 'flex-start'; // Alinear elementos al inicio

            // Ajustar el tamaño de la lista para mostrar 7 filas
            menuList.style.height = 'auto'; // Reiniciar altura
            menuList.style.maxHeight = 'calc(100vh - 100px)'; // Limitar altura a 7 filas
            menuList.style.overflowY = 'auto'; // Habilitar desplazamiento vertical si es necesario
        } else {
            // Si el menú está cerrado, ocultar la lista
            menuList.style.display = 'none';
        }
    });

    // Función para gestionar la visualización del menú y el icono basado en el ancho de la pantalla
    function toggleMenuDisplay() {
        if (window.matchMedia("(max-width: 900px)").matches) {
            // Pantalla de 900px o menos: ocultar menú completo y mostrar solo el icono
            menuNav.style.display = 'none';
            menuToggle.style.display = 'flex'; // Mostrar icono de menú
        } else {
            // Pantalla mayor a 900px: mostrar menú completo y ocultar el icono
            menuNav.style.display = 'flex';
            menuToggle.style.display = 'none'; // Ocultar icono de menú
        }
    }

    // Ejecutar la función al cargar la página y cada vez que cambie el tamaño de la pantalla
    toggleMenuDisplay(); // Ejecutar al cargar la página

    window.addEventListener('resize', toggleMenuDisplay); // Ejecutar al cambiar el tamaño de la pantalla
});
