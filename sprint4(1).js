import express from "express"
const app = express()
const PORT = 3000

    console.log(`Servidor rodando em http://localhost:${PORT}`)



//1.X

const historicoMensagens = [
    {id:1, nome:"Leonardo", texto:"Bom dia"},
    {id:2, nome:"Ygor", texto: "Boa tarde"}
];

const conteudoSalvar =
JSON.stringify(historicoMensagens, null, 2)

console.log(conteudoSalvar)
console.log("Tipo da variável:", typeof conteudoSalvar);
//-------------------------------------------------------------------------------------------------------------------------------------//

const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';
const jsonQuebrado = '[{ id: 10, quebrado: sim ';

const valido = JSON.parse(jsonValido)
console.log(valido[0].texto)

try {
    const final = JSON.parse(jsonQuebrado);
    console.log(final)
} catch (error) {
    console.error("Alerta: JSON corrompido! Detalhes:", error.message);
}

