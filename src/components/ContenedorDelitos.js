import React,{useEffect, useState} from 'react'
import listadelitos from './data/delitos';
import { FormNuevoDelito } from './FormNuevoDelito';

export const ContenedorDelitos = ({expediente}) => {
    const getDelitosByExpedientesId = (expedientes_id) =>{
        return listadelitos.find( ( delito ) => delito.expedientes_id === expedientes_id ).delitos
    }
    const delitos= getDelitosByExpedientesId(expediente.id);
    const [listafiltrada, setListafiltrada] = useState([]);
    console.log(listafiltrada);
    useEffect(() => {
        setListafiltrada([...delitos]);
    }, [delitos])

    const agregarDelito = (e)=>{
        setListafiltrada([...listafiltrada,e]);
    }

    return (
        <>

            <div className="col border px-md-4 py-md-4 mx-2 bordered-radius-7">
                <FormNuevoDelito agregarDelito = {agregarDelito} />
                <h5>Listado de delitos en la carpeta {expediente.numero}</h5>
                <div className="d-grid gap-2 border px-md-4 py-md-4 bordered-radius-7">
                    
                    { listafiltrada.length >0 ?
                        listafiltrada.map(data=>{
                            const {ofeindis_id,titulo} = data;
                            return (<div key={ofeindis_id} className="p-2 bg-light border bordered-radius-5">Delito {titulo}</div>)
                        })
                        :''
                    }
                    
                </div>
            </div>

        </>
    )
}
