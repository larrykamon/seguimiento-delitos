import React,{useState} from 'react';
import expedientes from './data/expedientes'

export const ContenedorCarpetas = ({setearid}) => {

    const [numero] = useState(expedientes);

    return (
        <>
                
            <div className="col-5 border px-md-4 py-md-4 mx-2 bordered-radius-7">
                <h4>Listado de carpetas</h4>
                <div className="d-grid gap-2">
                    
                    {   
                        numero.map(data=>{
                            const {id,numero} = data;
                            return (
                                <div key={id} className="p-2 bg-light border bordered-radius-5">
                                    Carpeta: <label className="fw-bold">{numero}</label> 
                                    <button className="btn btn-outline-secondary float-end" type="button" onClick={()=>setearid(data)}>Actualizar ></button>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>

        </>
    )
}
