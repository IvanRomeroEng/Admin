import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-10'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Paciente</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añadir pacientes y {''}
        <span className='font-bold color text-indigo-600 '>Administrar</span>
      </p>

      <form className= 'bg-white shadow-md rounded-lg py-10 px-5'>
        <div>
          <label htmlFor="nombrePaciente" className='block '>Nombre del Paciente
          </label>
          <input 
          id='nombrePaciente'
          type="text"
          placeholder='Nombre del Paciente'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
      </form>
    </div>
  )
}

export default Form