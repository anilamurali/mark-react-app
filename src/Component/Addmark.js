import React, { useState } from 'react'
import Nav from './Nav'

const Addmark = () => {
    var [name,setName]=useState("")
    var [admno,setAdmno]=useState("")
    var [cgpa,setCgpa]=useState("")
    const setData=()=>{
        var data={"name":name,"admno":admno,"cgpa":cgpa}
        console.log(data)
    }

  return (
    <div>
        <Nav/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Addmission Number</label>
                    <input onChange={(e)=>{setAdmno(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">CGPA</label>
                    <input onChange={(e)=>{setCgpa(e.target.value)}} type="text" class="form-control"/>
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addmark