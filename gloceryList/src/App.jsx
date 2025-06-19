import './App.css'
import Formulario from './components/Formulario'
import Lista from './components/Lista'
import { useState } from 'react'
import api from './services/api.js'
function App() {
    const [Erros, setErros] = useState({}) 
    const [formData, setData] = useState({
    nome: '',
    quantidade: ''
  })
  const produtos = [
    {
  "nome": "Milho",
  "quantidade": 3,
  "preco": 2.50
},
{
  "nome": "Milho",
  "quantidade": 3,
  "preco": 2.50
},
{
  "nome": "Milho",
  "quantidade": 3,
  "preco": 2.50
},
{
  "nome": "Milho",
  "quantidade": 3,
  "preco": 2.50
}
  ] 
  


  const aoDigitado = (event) =>{
    
    // atalho para pegar as propriendades do objeto usando desestruturaçao
    const {name, value} = event.target
    // segundo o chat é mais seguro passar uma funçao em vez do objeto logo de cara
    setData(prevState => ({
      // pelo o que eu entendi ...prevState isso é para copiar os estados dos elemento que nao estao sendo modificados
      ...prevState,
      // name vai pegar o name do input que o chama
      [name] : value
      
    }
  ) ) 
    console.log(formData.name)

  }

    const aoEnviar  = (e) =>{
      e.preventDefault()
      const novosErros = {}
      if (!formData.nome || formData.nome.trim() === ''){
        novosErros.nome = 'O nome do item é obrigatório.'

     
      }
      if (!formData.quantidade || formData.quantidade === 0){
        novosErros.quantidade = 'A quantidade do item é obrigatório.'
        

      }else if (isNaN(formData.quantidade) || Number(formData.quantidade) <= 0){
        novosErros.quantidade = 'A quantidade deve ser um número maior que zero.'
      }

      setErros(novosErros)
      if (Object.keys(novosErros).length === 0){
        console.log('Formulario valido, mandandos dados', formData)
        setErros({})
      }
      else{
        alert('Por Favor preencha todos os campos corretamente')
      }
    
  }
      function delCompras(){
        console.log('Deletei')

  }

  return (
    
    <>
    <div className='bg-linear-to-b from-indigo-700 to-purple-500 p-4 w-full min-h-screen text-white flex flex-col items-center justify-center'>
      <h1 className='font-bold text-3xl'>Lista de Compras</h1>
      <Formulario
        formData={formData}
        aoDigitado={aoDigitado}
        aoEnviar={aoEnviar}
        Erros={Erros}/>
        
        
      <Lista lista={produtos} aoDeletar={delCompras}/>


    </div>
      
    </>
  )
}

export default App
