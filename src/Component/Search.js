import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
    const [data,setData]=useState([{"cgpa":"","name":""}])
    const [admno,setAdmno]=useState("")
const callSearch=()=>{
    const valueRead={"admno":admno}
    console.log(valueRead)
    axios.post("http://localhost:4500/api/search",valueRead).then(
        (response)=>{
        console.log(response.data)
        setData(response.data)
    })
    

}
const deleteCallApi=(id)=>{
const data={"_id":id}
console.log(data)
axios.post("http://localhost:4500/api/delete",data).then(
    (response)=>{
    if(response.data.status=="success"){
        alert("Successfully deleted")

    }
    else{
        alert("error in deletion")

    }
})
}

    
  return (
    <div>
        <Nav/>

        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-2">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Addmission Number</label>
                    <input onChange={(e)=>{setAdmno(e.target.value)}} type="text" class="form-control"/>
                </div>

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={callSearch} class="btn btn-success">SEARCH</button>
                </div>
            </div>
            {
                data.map((value,key)=>{
                    return <div className='row g-2'>
                    <div className='col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12'>
                        name:<br/>
                        
                        <input className='form-control' value={value.name}/>
                        cgpa:<br/>
                        <input className='form-control' value={value.cgpa}/>
                        
                    
                       <button onClick={ ()=>{deleteCallApi(value._id)}} className='btn btn-danger'>DELETE</button>
                    
                    
            
                    </div>
                    
                </div>
                })
            }
            
            
        </div>
    </div>
</div></div>
  )
}

export default Search