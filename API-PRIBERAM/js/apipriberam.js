document.getElementById('searchButton').addEventListener('click', async () => {
    const word = document.getElementById('wordInput').value.trim();
    if (!word) {
        alert('Por favor, digite uma palavra.');
        return;
    }

    const url = `https://api.allorigins.win/get?url=${encodeURIComponent('https://dicionario.priberam.org/' + word)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const text = data.contents;

        // Extrair o significado usando DOMParser
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        
        // Usar a classe correta no site PRIBERAM para capturar o significado correto.
        const meaningElement = doc.querySelector('.dp-definicao');
		//const meaningElement = doc.querySelector('.def');


        if (meaningElement) {
            document.getElementById('resultArea').value = meaningElement.innerText;
        } else {
            document.getElementById('resultArea').value = 'Significado não encontrado.';
        }
    } catch (error) {
        console.error('Erro ao buscar a palavra:', error);
        document.getElementById('resultArea').value = 'Erro ao buscar o significado.';
    }
});
