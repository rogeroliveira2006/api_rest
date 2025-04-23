// Função para buscar dados da API JSONPlaceholder
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const app = document.getElementById('app');
        app.innerHTML = data.map(post => `<div><h2>${post.title}</h2><p>${post.body}</p></div>`).join('');
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

// Chamada da função ao carregar o script
fetchData();
