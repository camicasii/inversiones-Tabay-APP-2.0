import React,{useRef} from 'react';
import  {gql} from 'apollo-boost';
import { useQuery,useMutation,useApolloClient, } from '@apollo/react-hooks';
import Axios from 'axios';

const GET_DOGS = gql`
  {
    cuentas {
    ID
  }
  }`
  const UPLOAD=gql`
    mutation($file: MyUpload!) {
      singleUpload2(file:$file)
    }
  `  
const UPLOAD_3=gql`
  mutation($file: Upload!) {
    singleUpload(image:$file)

  }
`
const UPLOAD_4=gql`
  mutation($file: Upload!) {
    singleUpload(file:$file)

  }
`

export default function(props) {
    //const { loading, error, data } = useQuery(GET_DOGS);
    const [singleUpload] = useMutation(UPLOAD_3)    
    const ff = useRef()
    const upload = useRef()
    //if (loading) return <p>Loading...</p>;
    //if (error) return <p>Error :(</p>;
    //if (!loading) console.log(data);
    const onSummib = async (e) =>{
      e.preventDefault()
      
      
      console.log(ff.current.files);      
      
      const [file]=ff.current.files
      
      const form_ =new FormData()
      form_.append("value",file)
      

      console.log(form_);
      
      const a =await (await singleUpload({variables:{file:form_}})).data
      console.log(ff);
    }
    const onChange=async (e)=>{
      e.preventDefault()      
      const [file] = upload.current.files
      console.log(file);
      let formData = new FormData();
      formData.append('upload',file);
      Axios.post("/upload",formData,
      {
        headers:{'Content-Type': 'multipart/form-data'}
      }).then(res=>console.log(res)).catch(res=>console.log("fallo")      )


      
    }
      return<>
      <input type="file" ref={upload}  onChange={onChange}></input>
      <hr></hr>
        <form encType="multipart/form-data"   action="/upload/" method="POST">
        <input type="file"  name="upload"></input>
        <button type="submit">Hola</button>
        </form>
       <form onSubmit={onSummib} encType="multipart/form-data"  >
        <label>Input file</label>
        <input type="file" ref={ff} name="upload" ></input>
        <button type="submit">upload</button>
      </form>
      </>

}


