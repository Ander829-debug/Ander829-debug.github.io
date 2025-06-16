document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar los elementos del DOM
    const categoryFilter = document.getElementById('category-filter');
    const courseCards = document.querySelectorAll('.course-card');

    // Función que aplica el filtro de categoría
    const applyCategoryFilter = () => {
        const selectedCategory = categoryFilter.value;

        courseCards.forEach(card => {
            const cardCategory = card.dataset.category;

            // Comprobar si la tarjeta coincide con la categoría seleccionada
            // ESTA ES LA LÍNEA CORREGIDA:
            const categoryMatch = selectedCategory === 'all' || cardCategory === selectedCategory;

            // Mostrar la tarjeta solo si coincide con el filtro
            if (categoryMatch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Añadir el 'escuchador' de eventos al control del filtro
    categoryFilter.addEventListener('change', applyCategoryFilter);

    // Opcional: Aplicar el filtro una vez al cargar la página para asegurar consistencia
    applyCategoryFilter();
});