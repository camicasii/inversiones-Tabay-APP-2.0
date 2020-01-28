import React,{useRef,useEffect,useState,useContext} from 'react'
import AddCapture from './AddCapture'
import AddContex from './addContex';

export default function AddTranferencia() {
    const upload = useRef(false)    
    const banco = useRef(false)    
    const refTranferencia = useRef(false)

    const [markUpload, setMarkUpload]=useState(false)    
    const [fileUpload, setFileUpload]=useState(false)        
    const [banco_, setBanco_]=useState(0) 
    const [ref_, setRef_]=useState(null) 
    const data =useContext(AddContex)
            
    useEffect(()=>{
      if(!markUpload)
      setFileUpload(false)
      data({
        BANCO:banco_,
        REF:ref_,
        file:fileUpload
      })
    },[markUpload,fileUpload,ref_,banco_])    
    return (
        <div>
            <div class="form-row">
            <label htmlFor="Banco">Banco</label>
    <select class="form-control form-control-sm" id="Banco" ref={banco} onChange={()=>setBanco_(banco.current.value)}>  
  <option   value="0">BDV-ahorro</option>
  <option value="1">BDV-corriente</option>
</select>  
    <div class="form-group col-md-6">
      <label for="ref">ref</label>
      <input type="text" class="form-control" id="ref" ref={refTranferencia} onChange={()=>setRef_(refTranferencia.current.value)}/>
    </div>        
    <div class="form-check">
  <input class="form-check-input" type="checkbox" id="defaultCheck1" ref={upload} onChange={()=>setMarkUpload(upload.current.checked)}/>
  <label class="form-check-label" for="defaultCheck1">
    add capture
  </label>
</div>
{markUpload?<AddCapture setFileUpload={setFileUpload}/>:null}
  </div>
        </div>
    )
}
