import React,{useRef,useEffect} from 'react'

export default function AddTranferencia() {
    const upload = useRef(false)    
    let hola=true
    useEffect(()=>{
        console.log(upload);
    },[upload.current])
    const onchange=()=>{
        console.log(upload.current.checked);
        
        hola =!hola
        
    }
    return (
        <div>
            <div class="form-row">
            <label htmlFor="Banco">Banco</label>
    <select class="form-control form-control-sm" id="Banco">  
  <option defaultValue  value="0">BDV-ahorro</option>
  <option value="1">BDV-corriente</option>
</select>  
    <div class="form-group col-md-6">
      <label for="Fecha">ref</label>
      <input type="text" class="form-control" id="Fecha"/>
    </div>        
    <div class="form-check">
  <input class="form-check-input" type="checkbox" id="defaultCheck1" ref={upload} onChange={onchange}/>
  <label class="form-check-label" for="defaultCheck1">
    add capture
  </label>
</div>
{
    hola ?<h2>hola</h2>: <h2>chao</h2>
}
  </div>
        </div>
    )
}
