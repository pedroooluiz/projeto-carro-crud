const express = require('express')
const router = express.Router()

let listaTarefas = [
    {
        id: 1, 
        nomeTarefa: "Limpar a casa",
    },
    {
        id: 2, 
        nomeTarefa: "Fazer trabalho",
    }
]


// READ -> Buscar todos os produtos
router.get('/tarefas', (req, res) => {
    res.status(200).json(listaTarefas)
})

// READ -> Busca de produto especifico
router.get('/tarefas/:id', (req, res) => {
    res.json(req.tarefa)
})

// CREATE -> Cadastro de um produto
router.post('/tarefas', (req, res) => {
    const dados = req.body

    const tarefa = {
        id: Math.round(Math.random() * 1000),
        nomeTarefa: dados.nomeTarefa
    }

    listaTarefas.push(tarefa)

    res.status(201).json(
        {
            mensagem: "tarefa cadastrada com sucesso!",
            tarefa
        }
    )
})

// UPDATE -> Alterar um produto
router.put('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)
    
    const alterarTarefa = {
        id: id,
        nomeTarefa: novosDados.nomeTarefa
    }

    listaTarefas[index] = alterarTarefa

    res.status(200).json(
        {
            mensagem: "Tarefa alterada com sucesso!",
            alterarTarefa
        }
    )
})

/* 
// DELETE -> Excluir produto
router.delete('/carros/:id', validarCarro, (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(carro => carro.id == id)
    listaCarros.splice(index, 1)
    res.status(200).json({ mensagem: "Carro excluido sucesso!" })
})
*/


module.exports = router