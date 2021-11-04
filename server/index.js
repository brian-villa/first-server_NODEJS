const http = require('http')
const fs = require("fs")

const server = http.createServer(function(request, response) {

    if (request.url === '/') {
        
        fs.readFile('../clients/index.html', function (error, content) {
            
            response.end(content) //resposta ao servidor como string
        })
    }

    if(request.url === '/teste') {
        response.end("ok, FUNCIONOU!!!")
    }





}) // esse HTTP vai retornar um OBJeto E dentro do objeto tem métodos. Os parametros request e response são usados nesta funçao de callback: O request é o que esta vindo na requisição e o RESPONSE é a resposta à esta requisição

server.listen(8080) // server estará escutando a porta 8080 sempre para rodar o servidor e com NPM START

console.log("servidor executando na porta 8080")













/*  PAUSAR A EXECUÇÃO DO SERVIDOR CTRL + C NO TERMINAL*/