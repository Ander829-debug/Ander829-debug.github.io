document.addEventListener('DOMContentLoaded', () => {
    const jobSummaries = document.querySelectorAll('.job-summary');

    jobSummaries.forEach(summary => {
        summary.addEventListener('click', () => {
            // El elemento 'padre' de .job-summary es .job-card
            const card = summary.parentElement;
            
            // Alternamos la clase 'active' en la tarjeta principal
            card.classList.toggle('active');
            
            // Cambiamos la flecha para indicar el estado
            const arrow = summary.querySelector('.job-arrow');
            if (card.classList.contains('active')) {
                arrow.textContent = '▲'; // Flecha hacia arriba
            } else {
                arrow.textContent = '▼'; // Flecha hacia abajo
            }
        });
    });
});