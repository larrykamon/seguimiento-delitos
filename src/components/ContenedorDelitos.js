import React,{useEffect, useState} from 'react'
//import listadelitos from './data/delitos';
import { FormNuevoDelito } from './FormNuevoDelito';
import { GetDelitos } from './data/GetDelitos';

export const ContenedorDelitos = ({expediente}) => {
    /*const getDelitosByExpedientesId = (expedientes_id) =>{
        return listadelitos.find( ( delito ) => delito.expedientes_id === expedientes_id ).delitos
    }
    const delitos= getDelitosByExpedientesId(expediente.id);



    */
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
        // expected output: "resolved"
    }
    
    useEffect(() => {
        asyncCall()
    }, [expediente])

    /*const agregarDelito = (e)=>{
        setListafiltrada([...listafiltrada,e]);
    }*/


    return (
        <>

            <div className="col border px-md-4 py-md-4 mx-2 bordered-radius-7">
                {/* <FormNuevoDelito agregarDelito = {agregarDelito} /> */}
                <h5>Listado de delitos en la carpeta {expediente.numagen}</h5>
                {loading?'cargando':''}
                <div className="d-grid gap-2 border px-md-4 py-md-4 bordered-radius-7">
                    
                    {/* listafiltrada.length >0 ?
                        listafiltrada.map(data=>{
                            const {ofeindis_id,titulo} = data;
                            return (<div key={ofeindis_id} className="p-2 bg-light border bordered-radius-5">Delito {titulo}</div>)
                        })
                        :''
                    */}

                    {
                        listafiltrada.length > 0 && !loading?
                        listafiltrada.map(data=>{
                            const {id,delitos_id,delitoreal} = data;
                            return (<div key={id} className="p-2 bg-light border bordered-radius-5">delitos_id {delitos_id} delito {delitoreal}</div>)
                        })
                        :
                        ''
                    }
                    
                </div>
            </div>

        </>
    )
}
