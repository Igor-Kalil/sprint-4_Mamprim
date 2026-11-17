import express from "express"
const app = express()
const PORT = 3000

    console.log(`Servidor rodando em http://localhost:${PORT}`)



//2.X

import { mkdir, writeFile } from "node:fs/promises";

async function salvarHistorico [{
    id: 1, nome: "Fabricio", texto:"Boa noite",
    id: 2, nome: "Kalil", texto: "Até amanhã"
}]

await mkdir(new URL("./data/", import.meta.url), { recursive: true });

const caminhoArquivo = new URL("./data/mensagens-teste.json", import.meta.url);

await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");

console.log(salvarHistorico)

