import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors';



const app = express()
const prisma = new PrismaClient()
const port = 3000

app.use(express.json())
app.use(cors())

// Atualizar um item
app.put('/itens/:id', async (req, res) => {
  const itemAtualizado = await prisma.compra.update({
    where: {
      id: req.params.id
    },
    data: {
      nome: req.body.nome,
      quantidade: req.body.quantidade,
      preco: req.body.preco
    }
  })
  res.json(itemAtualizado)
})

// Criar um novo item
app.post('/itens', async (req, res) => {
  const price = 0
  const novaCompra = await prisma.compra.create({

    data: {
      nome: req.body.nome,
      quantidade: req.body.quantidade,
      preco: price
    }
  })
  res.status(201).json(novaCompra)
})

// Listar todos os itens
app.get('/itens', async (req, res) => {
  let itens = []
  if (req.params){
    itens = await prisma.compra.findMany({
      where: {
        nome : req.query.nome
      }})
    

  }
  else{
     itens = await prisma.compra.findMany()
  }
  
  res.json(itens)
})

app.delete('/itens/:id', async(req, res) =>{
    await prisma.compra.delete({
      where: {
        id : req.params.id
      },
    })
     res.status(200).json({message: 'Usuario deletado'})
})

app.listen(port, '192.168.0.18', () => {
  console.log(`Servidor rodando na porta ${port}`)
})

