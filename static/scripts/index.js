const botao = document.querySelector('.botao');

        // Variável para armazenar o número de cliques
        let clicks = 0;

        // Função para atualizar o contador de cliques na página
        function updateClicksCounter() {
            const counterElement = document.getElementById("clickCounter");
            counterElement.textContent = `Cliques: ${clicks}`;
        }

        // Função para lidar com cliques no botão
        function handleClick() {
            clicks++;
            updateClicksCounter();
            sendClicksToAPI();
        }

        // Função para enviar dados de cliques para a API
        function sendClicksToAPI() {
            const apiUrl = "http://localhost:80/clicks"; // Certifique-se de que a URL está correta
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ clicks: clicks })
            })
            .then(response => {
                if (!response.ok) {
                    console.error("Erro ao enviar cliques para a API.");
                }
            })
            .catch(error => {
                console.error("Erro na requisição:", error);
            });
        }

        // Adicionar um ouvinte de eventos para o botão de clique
        const clickButton = document.getElementById("clickButton");
        clickButton.addEventListener("click", handleClick);

        // Inicializar o contador de cliques na página
        updateClicksCounter();