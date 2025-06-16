function showSection(id) {
  // Oculta todas las secciones
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('active');
  });
  
  // Muestra solo la sección con el id correspondiente
  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}