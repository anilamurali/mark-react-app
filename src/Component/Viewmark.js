import React from 'react'
import Nav from './Nav'

const Viewmark = () => {
    var viewmark=[
        {
            "name":"anila",
            "admno":"MZC19MCA004",
            "cgpa":"7.9"
        }
    ]
  return (
    <div>
        <Nav/>
        <div>
        
        <div class="container">
    <div class="row ">
        <div class="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-striped table-primary">
                <thead>
                  <tr>
                    <th scope="col">NAME</th>
                    <th scope="col">ADMISSION NUMBER</th>
                    <th scope="col">CGPA</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        viewmark.map((value,key)=>{
                       return <tr>
                             <td>{value.name}</td>
                             <td>{value.admno}</td>
                             <td>{value.cgpa}</td>
                            
                             
                        </tr>
                        })}
                </tbody>
              </table>
        </div>
    </div>
</div>
    </div>
    </div>
  )
}

export default Viewmark