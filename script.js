const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    // Alterna la clase 'light-mode' en el body
    document.body.classList.toggle('light-mode');
    
    // Cambia el texto del botón según el modo activo
    if (document.body.classList.contains('light-mode')) {
        toggleBtn.textContent = '🌙 Modo Oscuro';
    } else {
        toggleBtn.textContent = '☀️ Modo Claro';
    }
});