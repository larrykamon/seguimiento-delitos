import React,{useEffect, useState} from 'react'
//import listadelitos from './data/delitos';
import { FormNuevoDelito } from './FormNuevoDelito';
import { GetDelitos } from './data/GetDelitos';

export const ContenedorDelitos = ({expediente}) => {

    const [listafiltrada, setListafiltrada] = useState([]);
    const [loading, setLoading] = useState(true)

    const asyncCall = async () => {
        console.log('calling');
        setLoading(true);
        const result = await GetDelitos(expediente.id);
        const res = await result.json();
        setListafiltrada(res);
        console.log(res);
        setLoading(false);
    }
    
    useEffect(() => {
        asyncCall()
    }, [expediente])

    const agregarDelito = (e)=>{
        setListafiltrada([...listafiltrada,e]);
    }

    const removeDelito =(idelito)=>{
        setListafiltrada(listafiltrada.filter( deli => deli.id !== idelito ));
    }

    return (
        <>

            <div className="col border px-md-4 py-md-4 mx-2 bordered-radius-7">
                { <FormNuevoDelito agregarDelito = {agregarDelito} /> }
                <h5>Listado de delitos en la carpeta {expediente.nombre}</h5>
                {loading?'cargando':''}
                <div className="d-grid gap-2 border px-md-4 py-md-4 bordered-radius-7">
                    
                    {
                        listafiltrada.length > 0 && !loading?
                        listafiltrada.map(data=>{
                            const {id,delitos_id,delitoreal} = data;
                            return (<div key={id} className="p-2 bg-light border bordered-radius-5">delitos_id {delitos_id} delito {delitoreal}<button onClick={()=>removeDelito(id)}>eliminar</button></div>)
                        })
                        :
                        ''
                    }
                    
                </div>
            </div>

        </>
    )
}
