import React from 'react'
import ItemLista from './ItemLista'

const Lista = ({lista, aoDeletar}) => {
  return (
    <section className='bg-purple-600/85 w-full rounded-md md:w-95 p-4 '>
        <ul>
          {lista.map((produto) => {
            return <ItemLista id={produto.id} nome={produto.nome} preco={produto.preco} quantidade={produto.quantidade} onDelete={aoDeletar} />

        })}
        </ul>
    </section>
  )
}

export default Lista