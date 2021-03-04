import React,{useState} from 'react'

export const FormNuevoDelito = ({agregarDelito}) => {
    console.log('form delito');
    const [delito, setDelito] = useState('');

    const handleInputChange =(e)=>{
        setDelito(e.target.value);
    }
    
    const addDelito =(e) =>{
        e.preventDefault();
        agregarDelito(delito);
        setDelito('');
    }
    return (
        <div className="col-12 border px-md-4 py-md-4 bordered-radius-7">
            <h6>Escriba el delito</h6>
            <form className="form">
                <div className="form-group">
                    <input type="text" name="algo" autoComplete="off" value={delito} onChange={handleInputChange} className="form-control"/>                    
                    <button type="submit" className="btn btn-dark my-2" onClick={addDelito}>Agregar <i className="bi-caret-down"></i></button>
                </div>
                
            </form>
        </div>    
    )
}
