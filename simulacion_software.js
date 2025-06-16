document.addEventListener('DOMContentLoaded', () => {
  const listaCodigo = document.getElementById('codigo-desordenado');
  const verificarBtn = document.getElementById('verificarBtn');
  const resultadoDiv = document.getElementById('resultadoSimulacion');

  let bloqueArrastrado = null;

  // Añadir eventos de arrastrar y soltar a cada bloque de código
  listaCodigo.querySelectorAll('.codigo-bloque').forEach(bloque => {
    bloque.addEventListener('dragstart', () => {
      bloqueArrastrado = bloque;
      setTimeout(() => {
        bloque.classList.add('arrastrando');
      }, 0);
    });

    bloque.addEventListener('dragend', () => {
      bloque.classList.remove('arrastrando');
      bloqueArrastrado = null;
    });
  });

  // Evento para saber sobre qué elemento se está soltando
  listaCodigo.addEventListener('dragover', (e) => {
    e.preventDefault();
    const despuesDeElemento = obtenerElementoDebajo(listaCodigo, e.clientY);
    if (despuesDeElemento == null) {
      listaCodigo.appendChild(bloqueArrastrado);
    } else {
      listaCodigo.insertBefore(bloqueArrastrado, despuesDeElemento);
    }
  });

  function obtenerElementoDebajo(contenedor, y) {
    const elementosArrastrables = [...contenedor.querySelectorAll('.codigo-bloque:not(.arrastrando)')];

    return elementosArrastrables.reduce((masCercano, hijo) => {
      const caja = hijo.getBoundingClientRect();
      const offset = y - caja.top - caja.height / 2;
      if (offset < 0 && offset > masCercano.offset) {
        return { offset: offset, element: hijo };
      } else {
        return masCercano;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  // Lógica para verificar el resultado
  verificarBtn.addEventListener('click', () => {
    const bloquesActuales = [...listaCodigo.querySelectorAll('.codigo-bloque')];
    let esCorrecto = true;

    // Comprobamos si el orden de los bloques es el correcto
    for (let i = 0; i < bloquesActuales.length; i++) {
      const bloque = bloquesActuales[i];
      const ordenCorrecto = parseInt(bloque.dataset.order);
      // Si el orden del bloque (data-order) no coincide con su posición actual (i+1)
      if (ordenCorrecto !== i + 1) {
        esCorrecto = false;
        break; // Si uno está mal, ya no seguimos comprobando
      }
    }

    // Mostramos el resultado al usuario
    if (esCorrecto) {
      resultadoDiv.innerHTML = '<h3>¡Felicidades!</h3><p>¡El algoritmo es correcto! La máquina funcionará perfectamente. Has demostrado tener una excelente lógica de programación.</p>';
      resultadoDiv.className = 'resultado exito';
    } else {
      resultadoDiv.innerHTML = '<h3>Inténtalo de Nuevo</h3><p>El orden no es el correcto. Revisa los pasos lógicos. Un programa debe seguir una secuencia precisa para funcionar.</p>';
      resultadoDiv.className = 'resultado error';
    }
  });
});