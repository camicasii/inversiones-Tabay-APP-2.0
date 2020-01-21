import React,{useRef} from 'react';
import  {gql} from 'apollo-boost';
import { createReadStream } from 'fs';
//import { useQuery,useMutation,useApolloClient } from '@apollo/react-hooks';
import Axios from 'axios';
import { useMutation,useQuery } from 'graphql-hooks'
const UPLOAD_3=`
  mutation ($file: Upload!) {
    singleUpload(file:$file)
  }
`
const edita=`
mutation  ($file: Upload!) {
  editCuenta(id:24,input:
    {
      DESCIPCION:"Jhonattan"
    },file:$file) 
}

  `
const Cuentas_=`
  {
   cuentas{
     ID
   }
  }
`

export default function(props) {
    //const { loading, error, data } = useQuery(GET_DOGS);
    const [singleUpload] = useMutation(edita)        
    const ff = useRef()
    const upload = useRef(null)
    //if (loading) return <p>Loading...</p>;

    
    
  
    const onChange=async (e)=>{
      e.preventDefault()            
      const [file] = upload.current.files
      console.log(file);
      await singleUpload({variables:{file}})
      return
     
      /*Axios.post("/upload",formData,
      {body:{
        id:18
      },
        headers:{'Content-Type': 'multipart/form-data'}
      }).then(res=>console.log(res)).catch(res=>console.log("fallo"))*/
    }
    const onSubmi=async (e)=>{    
      e.preventDefault()            
      const [file] = upload.current.files
      
      const data =await singleUpload({variables:{file}})
      console.log(data);
      
    }
      return<>
      <form onSubmit={onSubmi} encType="multipart/form-data" ref={ff}>
      <input type="file" ref={upload}  ></input>      
      <button type="submit">sdafasdf</button>
      </form>
      </>

}


/***
 * 
 * 
 * 

async (e)=>{
      e.preventDefault()      
      const [file] = upload.current.files
      console.log(file);
      let formData = new FormData();
      formData.append('upload',file);  
      const file2 ={
        Location:{filename: "String!",
        mimetype: "String!",
        encoding: "String!"},
        Path:"Fasdfsadfsadfsadfasd"
      }
      try{
      await singleUpload({variables:{file:formData}})    
    }
    catch{
console.log(Error);

      }
      Axios.post("/upload",formData,
      {body:{
        id:18
      },
        headers:{'Content-Type': 'multipart/form-data'}
      }).then(res=>console.log(res)).catch(res=>console.log("fallo"))
    }
    e.preventDefault()      
     const [file] = upload.current.files
     console.log(file);
     let formData = new FormData();
     formData.append('upload',file);  
     const file2 ={
       Location:{filename: "String!",
       mimetype: "String!",
       encoding: "String!"},
       Path:"Fasdfsadfsadfsadfasd"
     }
     try{
     await singleUpload({variables:{file:formData}})    
   }
   catch{
console.log(Error);

     }
     Axios.post("/upload",formData,
     {body:{
       id:18
     },
       headers:{'Content-Type': 'multipart/form-data'}
     }).then(res=>console.log(res)).catch(res=>console.log("fallo"))
   }


 */