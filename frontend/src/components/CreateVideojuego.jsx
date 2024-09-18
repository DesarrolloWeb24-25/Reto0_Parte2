import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/videojuego'
const CreateVideojuego = () => {
    const [nombre, setNombre] = useState('')
    const [genero, setGenero] = useState('')
    const [nota, setNota] = useState('')
    const [fecha_salida, setFechaSalida] = useState('')
    const navigate = useNavigate()
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {nombre: nombre, genero: genero, nota: nota, fecha_salida: fecha_salida})
        navigate('/')
    }

    return (
        <div>
            <h2>Crear un nuevo videojuego</h2>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Genero</label>
                    <input
                        value={genero}
                        onChange={ (e)=> setGenero(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Nota</label>
                    <input
                        value={nota}
                        onChange={ (e)=> setNota(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Fecha de salida</label>
                    <input
                        value={fecha_salida}
                        onChange={ (e)=> setFechaSalida(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-success'>Guardar</button>
            </form>
        </div>
    )
}

export default CreateVideojuego