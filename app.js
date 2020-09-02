//https://github.com/Lazaro-Barros/atividade-5-web-II

const express=require('express')
const app=express()
const conversaoModel=require('./models/conversaoModel')


app.get('/alunos/todos',(req,res)=>{
    let alunos=[
        {"nome":"aluno1","idade":15},
        {"nome":"aluno2","idade":16},
        {"nome":"aluno1","idade":17}
    ]
    res.json(alunos)
})

app.get('/moeda/:valor_real',conversaoModel.converterValor)

app.listen(3000)