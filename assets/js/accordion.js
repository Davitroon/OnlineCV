document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    // Cerrar los demás (si quieres comportamiento tipo Bootstrap)
    document.querySelectorAll('.accordion-content').forEach(otherContent => {
      if (otherContent !== content) {
        otherContent.style.maxHeight = null;
      }
    });

    // Alternar el actual
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // cerrar
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // abrir
    }
  });
});