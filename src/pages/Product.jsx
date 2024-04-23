import React from 'react'
import '../assets/product.css'
import profile from "../assets/images/profile.png"

function Product() {
  return (
    <div className='right'>
        <div className="head">
                <b>Deepak Prakash</b>
                <img className='profile' width={'55px'} src={profile} alt="pic" />
        </div>

        <div className='victim'>
            <div style={{display:'flex',flexDirection:'row'}}>
                <p style={{fontSize:'25px',marginTop:'10px'}}><strong>Deepak</strong></p>
            </div>
            <div className='address'>
                <div className='dist'> CHENNAI</div>
                <div>ANNA SALAI , WEST THAMBARAM , 24TH </div>
            </div>
        </div>

        <table className='t2'>
                <tr>
                    <th>S.NO</th>
                    <th>Category</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Food</td>
                    <td>Rice</td>
                    <td>14</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Medicine</td>
                    <td>Fever Tablets</td>
                    <td>14</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>clothes</td>
                    <td>sweater</td>
                    <td>14</td>
                </tr>
        </table>

    </div>
  )
}

export default Product