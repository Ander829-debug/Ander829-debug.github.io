document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar los elementos del DOM
    const categoryFilter = document.getElementById('category-filter');
    const priceFilters = document.querySelectorAll('input[name="price-filter"]');
    const courseCards = document.querySelectorAll('.course-card');

    // Función que aplica los filtros
    const applyFilters = () => {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = document.querySelector('input[name="price-filter"]:checked').value;

        // Recorrer cada tarjeta de curso para decidir si se muestra o se oculta
        courseCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardPrice = parseFloat(card.dataset.price);

            // Comprobar si la tarjeta coincide con la categoría seleccionada
            const categoryMatch = selectedCategory === 'all' || cardCategory === selectedCategory;

            // Comprobar si la tarjeta coincide con el precio seleccionado
            let priceMatch = false;
            if (selectedPrice === 'all') {
                priceMatch = true;
            } else if (selectedPrice === 'free' && cardPrice === 0) {
                priceMatch = true;
            } else if (selectedPrice === 'paid' && cardPrice > 0) {
                priceMatch = true;
            }

            // Mostrar la tarjeta solo si coincide con AMBOS filtros
            if (categoryMatch && priceMatch) {
                card.style.display = 'flex'; // Usamos 'flex' porque las tarjetas son flex-items
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Añadir 'escuchadores' de eventos a los controles de filtro
    categoryFilter.addEventListener('change', applyFilters);
    priceFilters.forEach(radio => {
        radio.addEventListener('change', applyFilters);
    });
});