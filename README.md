# Repositório React Sports - Teste técnico Front-end Trade

Projeto criado utilizando React, Javascript e Docker

## Uso

Você pode rodar o projeto utilizando apenas o npm normalmente ou via docker

### Via npm...

Entre no diretório do projeto e execute

### `npm install`

### `npm start`

Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação rodando no browser.

### Via docker...

Caso seja o primeiro uso, crie a imagem a partir do dockerfile fornecido

### `docker build -t img-projecto-trade-react .`

Caso o container já tenha sido criado mas estiver parado:

### `docker start container-projeto-trade-react`

Acesse o terminal do container em execução:

### `docker exec -it container-projeto-trade-react sh`

Caso seja o primeiro acesso ao container, instale as dependências:

### `npm i`

Rode a aplicação no terminal do container

### `npm start`

Acesse a aplicação pelo endereço mostrado

## Testes

Para rodar os testes, execute:

### `npm test`



## Bonus

