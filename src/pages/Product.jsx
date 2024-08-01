import React, { useEffect, useState } from 'react'
import '../assets/product.css'
import profile from "../assets/images/profile.png"
import { useLocation } from 'react-router-dom'

function Product() {

    const location = useLocation()
    const value = location.state.val
    const userDetails = location.state.det
    const user_id = location.state.id

    const[userValue,setUserValues] = useState({});

    useEffect (() => {
        {userDetails && Object.entries(userDetails).map(([key, val]) => {
            if(key === user_id){
                setUserValues(val)
            }
        }
    )}

    },[])

    console.log(userValue,'this is userValue')

  return (
    <div className='right'>
        <div className="head">
                <b>{userValue.fname || "Unknown"}</b>
                <img className='profile' width={'55px'} src={profile} alt="pic" />
        </div>

        <div className='victim'>
            <div style={{display:'flex',flexDirection:'row'}}>
                <p style={{fontSize:'25px',marginTop:'10px'}}><strong>Vijay</strong></p>
            </div>
            <div className='address'>
                <div className='dist'> {userValue.address  || "NA"}</div>
                {/* <div>ANNA SALAI , WEST THAMBARAM , 24TH </div> */}
            </div>
        </div>

        <table className='t2'>
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                </tr>
                </thead>
            <tbody>
              

                 {value.data && Object.entries(value.data).map(([key, val],index) => ( 
                        <tr key={key}>
                           
                            <td>{index + 1}</td>
                            <td>{key}</td>
                            <td>{val}</td>
                            
                        </tr>
                ))} 

                </tbody>
        </table>

    </div>
  )
}

export default Product