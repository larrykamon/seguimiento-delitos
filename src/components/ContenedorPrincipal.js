import React from 'react'
import { ContenedorCarpetas } from './ContenedorCarpetas'
import { ContenedorDelitos } from './ContenedorDelitos'

export const ContenedorPrincipal = () => {
    console.log('Contenedor principal');

    return (
        <div className="container">

            <div className="row px-md-1 py-md-3 my-4 bordered-radius-2">
                <ContenedorCarpetas/>
                <ContenedorDelitos/>
            </div>
            
        </div>
    )
}
