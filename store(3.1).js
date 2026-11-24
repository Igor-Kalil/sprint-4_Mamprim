import  { mkdir, readFile, writeFile } from "node:fs/promises"

const ARQUIVO = new URL ("./data/mensagens.json", import.meta.url)

export async function LerMensagens() {
    try {
        const conteudo = await readFile(ARQUIVO, "utf8")
        const dados = JSON.parse(conteudo)
        return  Array.isArray(dados) ? dados: []
    } catch(erro) {
        if (erro.code === "ENOENT") {
            return []
        } 
        throw erro
    }
}

export async function  salvarMensagens(mensagens) {
    await mkdir(new URL("./data/", import.meta.url), { recursive: true });
    await writeFile(ARQUIVO, JSON.stringify(mensagens, null, 2), "utf8");
}