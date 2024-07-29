// script.js

// Lista de artículos simulados
const articles = [
    { title: "Historia de JavaScript", content: "JavaScript es un lenguaje de programación que permite a los desarrolladores crear contenido interactivo en la web." },
    { title: "HTML", content: "HTML es el lenguaje de marcado estándar para documentos diseñados para ser mostrados en un navegador web." },
    { title: "CSS", content: "CSS es un lenguaje de hojas de estilo usado para describir la presentación de un documento escrito en HTML." },
    { title: "Algoritmos", content: "Un algoritmo es una secuencia de pasos para realizar una tarea o resolver un problema." },
    { title: "Desarrollo Web", content: "El desarrollo web es el trabajo involucrado en la creación de un sitio web para Internet." }
];

// Función para mostrar artículos
function displayArticles(articles) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Limpiar el contenido actual

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';
        articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        contentDiv.appendChild(articleDiv);
    });
}

// Inicialmente mostramos todos los artículos
displayArticles(articles);

// Función de búsqueda
document.getElementById('search-button').addEventListener('click', function() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchText) || 
        article.content.toLowerCase().includes(searchText)
    );
    displayArticles(filteredArticles);
});

// Opcional: búsqueda en tiempo real
document.getElementById('search-input').addEventListener('input', function() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchText) || 
        article.content.toLowerCase().includes(searchText)
    );
    displayArticles(filteredArticles);
});
