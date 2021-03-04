import React,{useState} from 'react'
import { FormNuevoDelito } from './FormNuevoDelito';

export const ContenedorDelitos = () => {
    console.log('Contenedor delitos');
    const [delito, setDelito] = useState(['homicidio','robo']);

    const agregarDelito = (e)=>{
        setDelito([...delito,e]);
    }

    return (
        <>

            <div className="col border px-md-4 py-md-4 mx-2 bordered-radius-7">
                <FormNuevoDelito agregarDelito = {agregarDelito} />
                <h5>Listado de delitos</h5>
                <div className="d-grid gap-2 border px-md-4 py-md-4 bordered-radius-7">
                    
                    { 
                        delito.map(data=>
                            <div key={data} className="p-2 bg-light border bordered-radius-5">Delito {data}</div>
                        )
                    }
                    
                </div>
            </div>

        </>
    )
}
