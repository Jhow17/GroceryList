import React from 'react'
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import Butao from './Butao';

const ItemLista = ({ nome, preco, onDelete, quantidade, id}) => {
  return (
    <li className='p-4 bg-purple-900 text-white mb-5 rounded-md '>

        <div className='grid  grid-cols-1 sm:grid-cols-2 '>
            <div>
                <h5 className='text-2xl font-bold  md:text-3xl'>{nome}</h5>
                <h3 className='text-xl font-medium md:text-2xl'>R$ {preco}</h3>
                
            </div>

            <div className='flex justify-around items-center gap-1'>
                <button  size={'10'} cor={'purple'} onClick={() => onDelete(id)}> <BsFillTrash3Fill/> </button>
                <Butao cor={'purple'}> <FaPencilAlt/> </Butao>
                <p>{quantidade} x</p>
            </div>


        </div>

    </li>
    
  )
}

export default ItemLista