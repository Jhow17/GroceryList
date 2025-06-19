import React from 'react'

const Butao = ({children, cor}) => {
  const fundo = {
    'green' : 'bg-green-400',
    'purple' : 'bg-indigo-800'
  }
  return (
    <button className={`${fundo[cor]} flex justify-center pl-2 pr-2 py-2 rounded-md text-center font-bold w-full md:w-fit md:p-2`}>{children}</button>
  )
}

export default Butao