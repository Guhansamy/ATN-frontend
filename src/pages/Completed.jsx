import React from 'react'
import '../assets/dashboard.css'
import profile from "../assets/images/profile.png"
import { useState , useEffect } from 'react'
import { green } from '@mui/material/colors';

function Completed() {

    const [dashData , setDashData] = useState([]);
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        const fetch_data = async () => {
            try {
                const url = "http://localhost:8000/user/allRequests";
                const response = await fetch(url);
                const dashContainer = await response.json();
                setDashData(dashContainer); 
                console.log(dashData)
            } 
            catch (error) {
                console.error("Error fetching data:");
                console.log(error);
            }
        };

        fetch_data();
    }, []);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                if (dashData.data && dashData.data.length > 0) {
                    const userIds = await dashData.data.map(item => item.userID);
                    const userDetPro = await userIds.map(userId => {
                        return fetch("http://localhost:8000/user/allUsers", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ userID: userId }),
                        })
                            .then(response => response.json())
                            .then(data => ({ [userId]: data }));
                    });
                    const userDetRes = await Promise.all(userDetPro);
                    const userDetObj = userDetRes.reduce((acc, curr) => {
                        return { ...acc, ...curr };
                    }, {});
                    setUserDetails(userDetObj);
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
        fetchUserDetails();
    }, [dashData]);

    const formatted = (createdAt) => {
        const date = new Date(createdAt);
        const formattedDate = date.toISOString().split('T')[0];
        return formattedDate;
    }
    let c=124;


  return (
    <div className='right'>
            <div className="head">
                <b>Deepak Prakash</b>
                <img className='profile' width={'55px'} src={profile} alt="pic" />
            </div>

            <div className='donate'>
                <div>
                <h1 style={{'color':'green'}}><b>Completed Requests</b></h1>
                </div>

                <div>
                    {/* <input type="text" id="inputField" placeholder='Search' style={{padding:'3px', paddingLeft:'5px',marginLeft:'500px',width:'250px'}}/> */}
                </div>

                <div style={{'marginLeft':'60%'}}>
                    <select id="dropdown" style={{padding:'3px', marginLeft: '30px', border: '1px solid silver',width:'150px'}}>
                        <option value="" disabled selected hidden>Filter</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Salem">Salem</option>
                        <option value="Tirunelveli">Tirunelveli</option>
                        <option value="Tiruchirappalli">Tiruchirappalli</option>
                        <option value="Erode">Erode</option>
                        <option value="Vellore">Vellore</option>
                        <option value="Tiruppur">Tiruppur</option>
                        <option value="Thoothukudi">Thoothukudi</option>
                        <option value="Thanjavur">Thanjavur</option>
                        <option value="Kanyakumari">Kanyakumari</option>
                        <option value="Dindigul">Dindigul</option>
                        <option value="Ramanathapuram">Ramanathapuram</option>
                        <option value="Virudhunagar">Virudhunagar</option>
                        <option value="Karur">Karur</option>
                        <option value="Namakkal">Namakkal</option>
                        <option value="Sivaganga">Sivaganga</option>
                        <option value="Cuddalore">Cuddalore</option>
                        <option value="Nagapattinam">Nagapattinam</option>
                        <option value="Tiruvarur">Tiruvarur</option>
                        <option value="Theni">Theni</option>
                        <option value="Pudukkottai">Pudukkottai</option>
                        <option value="Krishnagiri">Krishnagiri</option>
                        <option value="Ariyalur">Ariyalur</option>
                        <option value="The Nilgiris">The Nilgiris</option>
                        <option value="Perambalur">Perambalur</option>
                        <option value="Tiruvallur">Tiruvallur</option>
                        <option value="Tiruvannamalai">Tiruvannamalai</option>
                        <option value="Kancheepuram">Kancheepuram</option>
                        <option value="Tirupathur">Tirupathur</option>
                        <option value="Ranipet">Ranipet</option>
                        <option value="Tenkasi">Tenkasi</option>
                        <option value="Viluppuram">Viluppuram</option>
                        <option value="Nagercoil">Nagercoil</option>
                        <option value="Hosur">Hosur</option>
                        <option value="Ambur">Ambur</option>
                        <option value="Arakkonam">Arakkonam</option>
                        <option value="Sankarankovil">Sankarankovil</option>
                        <option value="Karaikudi">Karaikudi</option>
                        <option value="Neyveli">Neyveli</option>
                        <option value="Udhagamandalam">Udhagamandalam</option>
                        <option value="Thiruthani">Thiruthani</option>
                        <option value="Aruppukkottai">Aruppukkottai</option>
                        <option value="Mayiladuthurai">Mayiladuthurai</option>
                        <option value="Salem district">Salem district</option>
                        <option value="Vaniyambadi">Vaniyambadi</option>
                        <option value="Pallavaram">Pallavaram</option>
                        <option value="Gudiyatham">Gudiyatham</option>
                        <option value="Kanchipuram district">Kanchipuram district</option>
                        <option value="Mettupalayam">Mettupalayam</option>
                        <option value="Sivagangai">Sivagangai</option>
                        <option value="Karaikal district">Karaikal district</option>
                        <option value="Thiruvarur district">Thiruvarur district</option>
                        <option value="Perundurai">Perundurai</option>
                        <option value="Ponneri">Ponneri</option>
                        <option value="Avadi">Avadi</option>
                        <option value="Tirupattur">Tirupattur</option>
                        <option value="Ulundurpettai">Ulundurpettai</option>
                        <option value="Thiruvallur district">Thiruvallur district</option>
                        <option value="Kumbakonam">Kumbakonam</option>
                        <option value="Thiruvannamalai district">Thiruvannamalai district</option>
                        <option value="Vriddhachalam">Vriddhachalam</option>
                        <option value="Villupuram district">Villupuram district</option>
                        <option value="Thiruporur">Thiruporur</option>
                        <option value="Kallakurichi district">Kallakurichi district</option>
                        <option value="Tindivanam">Tindivan</option>

                    </select>
                </div>
            </div>            

            <table className="t1">
                     <thead>
                         <tr>
                             <th>Person Name</th>
                             <th>No.of items Required</th>
                             <th>Address</th>
                             <th>Date</th>
                             <th>Status</th>
                         </tr>
                     </thead>
                    <tbody>
                    
                         {console.log(dashData)}
                    {dashData.data && Object.entries(dashData.data).map(([key, val]) => ( 
                        val.status === "Completed" && (
                        <tr key={key}>
                            <td><a href='http://localhost:5173/leftside/product'> {userDetails[val.userID] ? userDetails[val.userID].fname : "Unknown"}</a></td>
                            <td>{c-=7}</td>
                            <td>{userDetails[val.userID] ? userDetails[val.userID].address : "Unknown"}</td>
                            <td>{formatted(val.createdAt)}</td>
                            <td><div className="status">{val.status}</div></td>
                        </tr>
                        )
                ))}


                    </tbody>
                </table>
        </div>
  )
}

export default Completed