import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Paciente</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añadir pacientes y {''}
        <span className='font-bold color text-indigo-600 '>Administrar</span>
      </p>

      <form className= 'bg-white shadow-md rounded-lg py-10 px-5'>
        <div>
          <label className='block '>Nombre Mascotas</label>
          <input 
          type="text"
          placeholder='Nombre del Paciente' 
          />
        </div>
      </form>
    </div>
  )
}

export default Form