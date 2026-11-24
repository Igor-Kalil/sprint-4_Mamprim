import { lerMensagens, salvarMensagens } from "./store.js";
import express from "express";
const app = express();
const PORT = 3000

import { LerMensagens, salvarMensagens } from "./store.js";

function Listarmensagem() { return mensagens; }

const mensagens = [
    { id: 1, usuario: 'Ana', texto: 'Bom dia!' },
    { id: 2, usuario: 'Pedro', texto: 'Olá!' },
    { id: 3, usuario: 'Maria', texto: 'Tudo bem?' },
    { id: 4, usuario: 'Lucas', texto: 'Como vai?' },
    { id: 5, usuario: 'Carla', texto: 'Até logo!' },
];


app.get("/mensagens", async (req, res) => {
    res.json(Listarmensagem())
    try {
        res.json(await LerMensagens());
    } catch(erro) {
        res.status(500).json({ erro: "Erro na leitura" });
    }
});

app.get("/exemplo-salvar", async (req, res) => {
  try {
    const lista = await LerMensagens();
    lista.push({ id: Date.now(), usuario: "Aluno", texto: "Mensagem gravada no disco!" });
    await salvarMensagens(lista);
    res.json({ gravado: true, total: lista.length });
  } catch (erro) {
    res.status(500).json({ erro: "Falha ao gravar" });
  }
})

app.listen(PORT, "0.0.0.0", () => console.log(`Servidor em http://localhost:${PORT}`));
