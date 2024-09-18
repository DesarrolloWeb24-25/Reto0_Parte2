import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/videojuego/'
const EditVideojuego = () => {
    const [nombre, setNombre] = useState('')
    const [genero, setGenero] = useState('')
    const [nota, setNota] = useState('')
    const [fecha_salida, setFechaSalida] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            genero: genero,
            nota: nota,
            fecha_salida: fecha_salida
        })
        navigate('/')
    }
    useEffect( () =>{
        const getVideojuegoById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre)
            setGenero(response.data.genero)
            setNota(response.data.nota)
            setFechaSalida(response.data.fecha_salida)
        }
        getVideojuegoById()
    }, [])
    return (
        <div>
            <h2>Editar videojuego</h2>
            <form onSubmit={update}>
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
                <button type='submit' className='btn btn-success'>Actualizar</button>
            </form>
        </div>
    )
}
export default EditVideojuego