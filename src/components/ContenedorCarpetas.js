import React,{useState} from 'react';

export const ContenedorCarpetas = () => {
    console.log('Contenedor carpetas');
    const [numero, setNumero] = useState([1,2,3,4,5,6,7]);
    return (
        <>
                
            <div className="col-5 border px-md-4 py-md-4 mx-2 bordered-radius-7">
                <h4>Listado de carpetas</h4>
                <div className="d-grid gap-2">
                    {   
                        numero.map(data=>
                            <div key={data} className="p-2 bg-light border bordered-radius-5">
                                Carpeta: <label className="fw-bold">{data}/FEDAI/2020</label> 
                                <button className="btn btn-outline-secondary float-end" type="button">Actualizar ></button>
                            </div>
                        )
                    }
                    
                </div>

            </div>                        
            
        </>
    )
}
