# Cativa Backend

Este é o backend para o teste técnico do projeto Cativa, que inclui um programa de fidelidade e cadastro de agências de turismo.

## Configuração

Para rodar o projeto, siga os passos abaixo:

1. Clone o repositório:

    ```sh
    git clone https://github.com/angelobarilari/cativa-backend.git
    cd cativa-backend
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Configuração das variáveis de ambiente:

   Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias no arquivo `.env`. Caso você não sete as variáveis do nodemailer o código NÃO funcionará corretamente, portanto você deve preencher ou comentar a seção de código que faz o envio do email após o cadastro no banco.

4. Agora você pode iniciar o servidor de desenvolvimento.

    ```sh
    npm run start
     ```

## Contribuição

Se você quiser contribuir com o projeto, sinta-se à vontade para fazer um fork do repositório, criar uma nova branch, fazer suas alterações e enviar um pull request.
