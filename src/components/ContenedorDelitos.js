import React,{useEffect, useState} from 'react'
import listadelitos from './data/delitos';
import { FormNuevoDelito } from './FormNuevoDelito';

export const ContenedorDelitos = ({expediente}) => {
    console.log('Contenedor delitos', expediente.id);
    const [listafiltrada, setListafiltrada] = useState([...listadelitos.find(element => element.expedientes_id == expediente.id).delitos])
    console.log(listafiltrada);
    const agregarDelito = (e)=>{
        setListafiltrada([...listafiltrada,e]);
    }

    return (
        <>

            <div className="col border px-md-4 py-md-4 mx-2 bordered-radius-7">
                <FormNuevoDelito agregarDelito = {agregarDelito} />
                <h5>Listado de delitos de {expediente.numero}</h5>
                <div className="d-grid gap-2 border px-md-4 py-md-4 bordered-radius-7">
                    
                    { 
                        listafiltrada.map(data=>{
                            const {ofeindis_id,titulo} = data;
                            return (<div key={ofeindis_id} className="p-2 bg-light border bordered-radius-5">Delito {titulo}</div>)
                        })
                                                
                    }
                    
                </div>
            </div>

        </>
    )
}
