import React,{useState,useRef,useEffect} from 'react'
import Addtipo from './Addtipo'
import AddContex from './addContex';


export default function AddCuenta({concepto,conceptoString}) {
  const fecha=useRef(null)
  const description=useRef(null)
  const monto=useRef(null)
  const [fecha_,setFecha]=useState(false)
  const [description_,setDescription]=useState(false)
  const [monto_,setMonto]=useState(false)
  const [Tpago,setTpago]=useState(false)
  const [sendData,setSendData]=useState(false)
  const [transferenciaData,setTransferenciaData]=useState(false)
  
  
  const datos=(data)=>setTransferenciaData(data)



  const onChange=(e)=>{
    e.preventDefault()   
    if(!Tpago)
    { setSendData({input:{
      ID_USERS:"1",    
      DESCIPCION:description_,
      DEBE:concepto?0:monto_,
      HABER:concepto?monto_:0,
      TIPO_PAGO:"0",
      CONCEPTO:conceptoString
    }})}    
    else{
       setSendData({
        input:{
          ID_USERS:"1",    
          DESCIPCION:description_,
      DEBE:concepto?0:monto_,
      HABER:concepto?monto_:0,
      TIPO_PAGO:"0",
      CONCEPTO:conceptoString
        },
        file:transferenciaData.file
      
      })

    }
    
  }
  
    const onSubmit=async(e)=>{
      e.preventDefault()
      console.log(sendData);
      
    
     
      
      //console.log(transferenciaData);      



    }
    return (
        <div className="card">       
            <AddContex.Provider value={datos}>
            <div className="body">
            <form onSubmit={onSubmit} onChange={onChange}>
  <div class="form-row">  

</div>
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="Fecha">Fecha</label>
      <input type="date" class="form-control" id="Fecha" ref={fecha} onChange={()=>setFecha(fecha.current.value)}/>
    </div>    
    <div class="form-group col-md-6">
      <label for="DESCRIPCION">DESCRIPCION</label>
      <input type="text" class="form-control" id="DESCRIPCION" ref={description} onChange={()=>setDescription(description.current.value)}/>
    </div>
  </div>
  <Addtipo setTpago={setTpago} Tpago={Tpago}/>
  <div class="form-group">
    <label for="monto">monto</label>
    <input type="text" class="form-control" id="monto" placeholder="agregar monto" ref={monto} onChange={()=>setMonto(monto.current.value)}/>
  </div>
   <button type="submit" class="btn btn-primary">Sign in</button>
</form>

            </div>
  </AddContex.Provider>
        </div>


    )
}
/*
 ID:"ID",
    ID_USERS:"ID_USERS",
    FECHA:"FECHA",
    DESCIPCION:"DESCIPCION",
    DEBE:"DEBE",
    HABER:"HABER",
    TIPO_PAGO:"TIPO_PAGO",
    BANCO:"BANCO",
    REF:"REF",
    URL:"URL",
    CONCEPTO:"CONCEPTO",
    CUENTA:"CUENTA"
    */
