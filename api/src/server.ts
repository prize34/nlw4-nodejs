import express from 'express'

const app = express()

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */

// 1 param => Rota
// 2 param => request, response

// GET http://localhost:3333/
app.get("/", (request, response) => {
    return response.json("Hello word! - NLW04")
})

app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Running!"))