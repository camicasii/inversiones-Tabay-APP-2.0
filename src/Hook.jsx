import React,{useEffect,useState} from 'react'
import { useMutation,useQuery, } from 'graphql-hooks'


export const Query = {ID:"ID",
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
    CUENTA:"CUENTA"}

const edita=`
mutation  ($file: Upload!) {
  editCuenta(id:24,input:
    {
      DESCIPCION:"Jhonattan"
    },file:$file) 
}`


export const useCuentas=(arg)=>{        
     let Cuentas_=`
  {
    cuentas{
		${Object.keys(arg)}
  }
  }
`
console.log(Cuentas_);

    const{ loading, error, data } = useQuery(Cuentas_)    
    return { loading, error, data };

}
const Hook= ()=> {
    
    const {loading,data,error} = useCuentas()
    if(!loading)
    console.log(data);  
    
    return (
        <div>
            <h2>Pruevas hooks</h2>
    
        </div>
    )
    
}





export default  Hook