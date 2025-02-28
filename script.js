AOS.init();

// Seleciona todos os itens da galeria
const galleryItems = document.querySelectorAll('.gallery-item');

// Adiciona um evento de hover a cada item
galleryItems.forEach(item => {
    const imageTitle = item.querySelector('.image-title');

    item.addEventListener('mouseenter', () => {
        imageTitle.style.bottom = '0'; // Exibe o título
    });

    item.addEventListener('mouseleave', () => {
        imageTitle.style.bottom = '-100%'; // Esconde o título
    });
});