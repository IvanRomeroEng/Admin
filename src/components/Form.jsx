import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-10'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Paciente</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añadir pacientes y {''}
        <span className='font-bold color text-indigo-600 '>Administrar</span>
      </p>

      <form className= 'bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor="nombrePaciente" className='block '>Nombre del Paciente
          </label>
          <input 
          id='nombrePaciente'
          type="text"
          placeholder='Nombre del Paciente'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="familiar" className='block '>Nombre de Familiar 
          </label>
          <input 
          id='familiar'
          type="text"
          placeholder='Nombre de Familiar para emergencias'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="CelularPaciente" className='block '>Numero de celular 
          </label>
          <input 
          id='celularPaciente'
          type="number"
          placeholder='Numero de celular del paciente'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="CelularFamiliar" className='block '>Numero de emergencia 
          </label>
          <input 
          id='celularFamiliar'
          type="number"
          placeholder='Numero de celular de algun familiar'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block '>Email 
          </label>
          <input 
          id='email'
          type="email"
          placeholder='Email contacto'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="date" className='block '>Fecha de cita 
          </label>
          <input 
          id='date'
          type="date"
          placeholder='Fecha de cita'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="date" className='block '>Sintomas 
          </label>
        <textarea 
        id=""
        placeholder='Describe los Sintomas'
        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
        rows='4'
        />
        </div>
        <input 
        type="submit"
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'
        value="agregar paciente"
         />
      </form>
    </div>
  )
}

export default Form