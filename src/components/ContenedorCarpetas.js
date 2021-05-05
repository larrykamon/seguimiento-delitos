import React,{useState,useEffect} from 'react';
//import expedientes from './data/expedientes'
import { GetExpedientes } from './data/GetExpedientes';

export const ContenedorCarpetas = ({setearid}) => {

    //const [numero] = useState(expedientes);
    const [carp, setCarp] = useState(null);
    const asyncCall = async () => {
        console.log('calling');
        const result = await GetExpedientes();
        const res = await result.json();
        setCarp(res);
    }

    useEffect(() => {
        asyncCall();
    }, [])
    

    return (
        <>
                
            <div className="col-5 border px-md-4 py-md-4 mx-2 bordered-radius-7">
                <h4>Listado de carpetas</h4>
                <div className="d-grid gap-2">
                    
                    {  carp !=null?
                        carp.map(data=>{
                            const {id,numagen,anioagen} = data;
                            return (
                                <div key={id} className="p-2 bg-light border bordered-radius-5">
                                    Carpeta: <label className="fw-bold">{numagen}/{anioagen}</label> 
                                    <button className="btn btn-outline-secondary float-end" type="button" onClick={()=>setearid(data)}>Actualizar</button>
                                </div>
                            )
                        })
                        :''
                    }
                    
                </div>
            </div>

        </>
    )
}
