import { Link } from 'lucide-react';
import '../assets/dashboard.css'
import profile from "../assets/images/profile.png"
import { useState , useEffect } from 'react'

function Dashboard() {

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
    

    console.log(dashData)

  return (
        <>
        <div className='right'>
            <div className="head">
                <b>Deepa</b>
                <img className='profile' width={'55px'} src={profile} alt="pic" />
            </div>

            <div className='donate'>
                <div>
                <h1><b>All Donation Requests</b></h1>
                <h4 style={{color:'green'}}>Active Members</h4>
                </div>

                <div>
                    <input type="text" id="inputField" placeholder='Search' style={{padding:'3px', paddingLeft:'5px',marginLeft:'500px',width:'250px'}}/>
                </div>

                <div>
                    <select id="dropdown" style={{padding:'3px', marginLeft: '30px', border: '1px solid silver',width:'150px'}}>
                        <option value="" disabled selected hidden>Filter</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Madurai">Madurai</option>
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
                        // <a href='#'>
                        <tr key={key}>
                            
                            <td> <a href='/leftside/product'>
                                {userDetails[val.userID] ? userDetails[val.userID].fname : "Unknown"} </a>
                            </td>
                            <td>23</td>
                            <td>{userDetails[val.userID] ? userDetails[val.userID].address : "Unknown"}</td>
                            <td>{formatted(val.createdAt)}</td>
                            <td><div className="status">{val.status}</div></td>
                            
                        </tr>
                ))}


                    </tbody>
                </table>
        </div>
        </>
    )
}

export default Dashboard
