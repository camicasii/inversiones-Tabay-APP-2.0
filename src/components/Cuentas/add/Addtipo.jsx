import React,{useRef,useState,useContext,useEffect} from 'react'
import AddTranferencia from './AddTranferencia';
import AddContex from './addContex';

export default function Addtipo({setTpago,Tpago}) {  
    const tPago =useRef(false)
useEffect(()=>setTpago(false),[])
    return (
        <div class="form-group">  
  <label htmlFor="Tpago">Tipo de pago</label>
  <select class="form-control form-control-sm" id="Tpago" onChangeCapture={()=>setTpago(Boolean(tPago.current.value))} ref={tPago}>  
  <option defaultValue  value=""> efectivo</option>
  <option value={true}>transferencia</option>
</select>  
{Tpago?<AddTranferencia/>:null}
  </div>
    )
}
