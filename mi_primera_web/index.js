document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.navegacion nav ul li a');

    // Función para cambiar la clase activa según la sección visible
    const changeActiveNav = () => {
        let currentIndex = sections.length;

        // Comprobar qué sección está visible
        while (--currentIndex && window.scrollY + 50 < sections[currentIndex].offsetTop) { }

        // Remover la clase 'active' de todos los enlaces
        navLinks.forEach((link) => link.classList.remove('active'));

        // Añadir la clase 'active' al enlace correspondiente
        navLinks[currentIndex].classList.add('active');
    };

    // Llamar a la función al hacer scroll
    window.addEventListener('scroll', changeActiveNav);

    // Llamar a la función al cargar la página para que se ajuste correctamente
    changeActiveNav();
});
