import Butao from './Butao'


const Formulario = ({formData, aoDigitado, aoEnviar, Erros}) => {




  return (
    <section className='bg-violet-900/85 m-4 p-7 rounded-md md:w-fit flex flex-col items-center
     border-x-black'>
        <h2 className='text-2xl border-b text-center font-bold mb-4'>O Que vamos Comprar ?</h2>
        <form onSubmit={aoEnviar} className='p-4'>
            <label htmlFor="nome" className='mb-4'>Produto</label>
            <input onChange={aoDigitado} className='block mb-4 bg-white rounded-md p-1 md:w-full text-black'  
            value={formData.nome} type="text" id='nome' name='nome' placeholder='produto' />
            {Erros.nome && <p className='text-red-500' text-sm md-3> {Erros.nome} </p>}
            <label htmlFor="quantidade" className='mb-4'>Quantidade</label>
            <input onChange={aoDigitado} value={formData.quantidade} className='block mb-4 bg-white rounded-md p-1 md:w-full text-black' type="number" name='quantidade' placeholder='quantidade' />
            {Erros.nome && <p className='text-red-500' text-sm md-3> {Erros.quantidade} </p>}
            <Butao cor={'green'} >Adicionar</Butao>
        </form>
    </section>
  )
}

export default Formulario