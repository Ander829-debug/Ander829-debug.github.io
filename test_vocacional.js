document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('vocational-test');
  const resultDiv = document.getElementById('test-result');

  // Definimos los perfiles y sus descripciones
  const profiles = {
    realista: {
      title: 'El Realista / El Hacedor',
      description: 'Eres una persona práctica, con los pies en la tierra. Disfrutas trabajando con tus manos, herramientas y máquinas. Prefieres soluciones concretas y resultados tangibles.',
      careers: ['Ingeniería Mecánica', 'Electricidad', 'Carpintería', 'Agricultura', 'Chef', 'Ingeniería Civil']
    },
    investigador: {
      title: 'El Investigador / El Pensador',
      description: 'Te impulsa la curiosidad. Disfrutas analizando información, resolviendo problemas complejos y entendiendo cómo funcionan las cosas. Valoras la lógica, la precisión y el conocimiento.',
      careers: ['Desarrollo de Software', 'Medicina', 'Biología', 'Química', 'Análisis de Datos', 'Investigación Científica']
    },
    artista: {
      title: 'El Artista / El Creador',
      description: 'Tienes una gran imaginación y te expresas de formas originales. Disfrutas de la creatividad, la estética y el trabajo no estructurado. Valoras la belleza y la autoexpresión.',
      careers: ['Diseño Gráfico', 'Arquitectura', 'Música', 'Escritura', 'Artes Plásticas', 'Fotografía']
    },
    social: {
      title: 'El Social / El Ayudador',
      description: 'Eres empático y te sientes energizado al interactuar y ayudar a los demás. Disfrutas enseñando, aconsejando y colaborando en equipo. Valoras la cooperación y el bienestar común.',
      careers: ['Enfermería', 'Psicología', 'Docencia', 'Trabajo Social', 'Recursos Humanos', 'Fisioterapia']
    },
    emprendedor: {
      title: 'El Emprendedor / El Persuasivo',
      description: 'Eres ambicioso, enérgico y te sientes cómodo liderando, persuadiendo y tomando decisiones. Disfrutas de los desafíos, la competencia y de iniciar nuevos proyectos.',
      careers: ['Administración de Empresas', 'Marketing', 'Ventas', 'Derecho', 'Gerencia de Proyectos', 'Relaciones Públicas']
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const scores = {
      realista: 0,
      investigador: 0,
      artista: 0,
      social: 0,
      emprendedor: 0
    };

    const formData = new FormData(form);
    
    // Contamos los puntos para cada categoría
    for (let [key, value] of formData.entries()) {
      scores[value]++;
    }

    // Encontramos la categoría con el puntaje más alto
    let highestScore = 0;
    let finalProfile = '';

    for (let profile in scores) {
      if (scores[profile] > highestScore) {
        highestScore = scores[profile];
        finalProfile = profile;
      }
    }

    // Generamos y mostramos el resultado
    const result = profiles[finalProfile];
    resultDiv.innerHTML = `
      <h3>Tu perfil es: ${result.title}</h3>
      <p>${result.description}</p>
      <h4>Carreras sugeridas para ti:</h4>
      <ul>
        ${result.careers.map(career => `<li>${career}</li>`).join('')}
      </ul>
    `;
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
  });
});