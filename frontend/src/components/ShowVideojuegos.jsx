import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowVideojuegos = () => {
    const [videojuegos, setVideojuegos] = useState([])
    useEffect(() => {
        getAllVideojuegos()
    }, [])
    
    const getAllVideojuegos = async () => {       
        const response = await axios.get(`${endpoint}/videojuego`)
        setVideojuegos(response.data)
    }
    
    const deleteVideojuego = async (id) => {
        await axios.delete(`${endpoint}/videojuego/${id}`)
        getAllVideojuegos()
    }

    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Genero</th>
                        <th>Nota</th>
                        <th>Fecha de salida</th>
                    </tr>
                </thead>
                <tbody>
                    {videojuegos.map((videojuego) => (
                        <tr key={videojuego.id}>
                            <td>{videojuego.nombre}</td>
                            <td>{videojuego.genero}</td>
                            <td>{videojuego.nota}</td>
                            <td>{videojuego.fecha_salida}</td>
                            <td>
                                <Link to={`/edit/${videojuego.id}`} className='btn btn-info'>Editar</Link>
                                <button onClick={() => deleteVideojuego(videojuego.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowVideojuegos