import express from "express"
const app = express()
const PORT = 3000



//1.1
function saudacaoAssincrona(nome) {
    return new Promise((resolve) => {
        setTimeout(() =>{resolve(`Olá, ${nome}! Bem-vindo ao Mensageiro Local.`);}, 2000);
    });
}

saudacaoAssincrona('Kalil'). then((resposta) => console.log(resposta))

//1.2

function obterMensagemPorId(id){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if  (id <= 0)
            return reject(new Error("ID inválido: deve ser maior que zero"));
            else
            resolve({ id: id, texto: "Mensagem do laboratório" });
        }, 1000);
    });
}

//2.1

app.get ("/", (req, res) => {
    saudacaoAssincrona ("Fabricio").then((mensagem) => {
        res.send(mensagem)
    })
});

//2.2

app.get("/mensagem-invalida-then", (req, res) => { 
    obterMensagemPorId(-5).then((msg) => { res.json(msg); }).catch((erro) => { res.status(500).json({ erro: erro.message }); });
});

//3.1

app.get ("/saudacao-async", async (req, res) => {
    try {
        const mensagem = await saudacaoAssincrona("Aluno do Futuro");
        res.send (mensagem)
    } catch (erro) {
        res.status(500).json({erro: "Falha na saudação"})
    }
})

//3.2

app.get("/mensagem-erro-async", async (req, res) => {
    try {
        const msg = await obterMensagemPorId(-10);
        res.json(msg)
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

//-------------------------------------------------------------------//
    console.log(`Servidor rodando em http://localhost:${porta}`)

