import React,{useRef} from 'react'
import AddTranferencia from './AddTranferencia';

export default function Addtipo() {
    const tPago =useRef(null)
    
    const onChange=()=>{

    if(tPago.current!=null)
    console.log(tPago.current.value);    
    }        
    return (
        <div class="form-group">  
  <label htmlFor="Tpago">Tipo de pago</label>
  <select class="form-control form-control-sm" id="Tpago" onChange={onChange} ref={tPago}>  
  <option defaultValue  value="0"> efectivo</option>
  <option value="1">transferencia</option>
</select>  
<AddTranferencia/>
  </div>
    )
}
