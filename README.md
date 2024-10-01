DICIONÁRIO PRIBERAM
-------------------
O dicionário priberam não tem uma API para ser consumida, então criei uma consulta do signifado de qualquer palavra da língua portuguesa e extrai o resultado
fazendo uma varredura na TAG da página para enviar para minha página HTML.

Código HTML, CSS e JavaScript que cria uma aplicação simples para consultar o significado de uma palavra no dicionário Priberam e exibir o resultado em 
uma TEXTAREA. O usuário pode digitar a palavra desejada em um campo de entrada.

Explicação do Código:
---------------------
HTML:
Um campo de entrada (input) para que o usuário digite a palavra.
Um botão que, quando clicado, inicia a consulta.
Uma TEXTAREA para exibir o significado da palavra.

CSS:
Estiliza os elementos para uma melhor apresentação.

JavaScript:
Adiciona um evento de clique ao botão.
Faz uma solicitação fetch para o URL do dicionário Priberam com a palavra inserida.
Utiliza DOMParser para analisar a resposta HTML e extrair o significado.
Exibe o resultado na TEXTAREA.

Observações:
Certifique-se de que seu navegador permite solicitações CORS, pois algumas configurações podem bloquear requisições de diferentes origens.
O código pode precisar de ajustes dependendo da estrutura HTML do site do dicionário no momento da execução.

Para resolver o problema de CORS usei no javascript a api.allorigins.win na url juntamento com o link do do priberam.
