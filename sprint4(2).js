import express from "express"
const app = express()
const PORT = 3000

    console.log(`Servidor rodando em http://localhost:${PORT}`)



//2.X
import { mkdir, writeFile, readFile } from 'node:fs/promises';

async function salvarHistorico() {
    const lista = [
        { id: 1, usuário: "Fabricio", texto: "Olá mundo"},
        { id: 2, usuário: "Carlos", texto: "Bom dia a todos!"}
    ]
    await mkdir(new URL("./data/", import.meta.url), { recursive: true });
    const caminhoArquivo = new URL("./data/mensagens-teste.json", import.meta.url);
    await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");
}

await salvarHistorico();

//---------------------------------------------------------------------------------------//

async function LerDadosSeguros(data){
    try {
        const conteudo = await readFile(data, "utf8")
        return JSON.parse(conteudo)
    } catch(erro) {
        if (erro.code === "ENOENT") {
            return []
        }
        throw erro
    }
}

const dados = await LerDadosSeguros(new URL("./data/arquivo-fantasma.json", import.meta.url));
console.log("Resultado com arquivo ausente:", dados);

import {LerMensagens} from "./store.js";
console.log("Mensagens atuais:", await LerMensagens());
