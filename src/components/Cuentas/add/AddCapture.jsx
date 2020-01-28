import React,{useRef} from 'react'
export default function AddCapture({setFileUpload}) {
    const upload = useRef(null)        
    return (
        <input type="file" ref={upload} onChange={()=>{
            const [file] = upload.current.files
            return setFileUpload(file)
        }}/>
    )
}
