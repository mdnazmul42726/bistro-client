import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

const Dashboard = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const { user } = useContext(AuthContext);
    console.log(user?.email);

    useEffect(() => {
        axios.get(`http://localhost:5000/user/admin/${user?.email}`, { headers: { authorization: `${localStorage.getItem('access-token')}` } }).then(res => setIsAdmin(res.data)).catch(err => console.log(err))
    }, []);

    return (
        <div className="w-full flex">
            <div className="w-60 min-h-screen bg-slate-400 p-10">
                {isAdmin ? <>
                    <div className="bg-red-300 w-full p-2 rounded-md mb-3">
                        <NavLink to={"/dashboard"}>Admin Home</NavLink>
                    </div>
                    <div className="bg-red-300 w-full p-2 rounded-md mb-3">
                        <NavLink to={"/dashboard/add-items"}>Add items</NavLink>
                    </div>
                    <div className="bg-red-300 w-full p-2 rounded-md mb-3">
                        <NavLink to={"/dashboard/manage-booking"}>Manage Booking</NavLink>
                    </div>
                    <div className="bg-red-300 w-full p-2 rounded-md mb-3">
                        <NavLink to={"/dashboard/users"}>Users</NavLink>
                    </div>
                </> : <>
                    <div className="bg-red-300 w-full p-2 rounded-md mb-3">
                        <NavLink to={"/dashboard"}>User Home</NavLink>
                    </div>
                    <div className="bg-red-300 w-full p-2 rounded-md mb-3">
                        <NavLink to={"/dashboard/revision"}>Revision</NavLink>
                    </div>
                    <div className="bg-red-300 w-full p-2 rounded-md mb-3">
                        <NavLink to={"/dashboard/cart"}>My Cart</NavLink>
                    </div>
                    <div className="bg-red-300 w-full p-2 rounded-md mb-3">
                        <NavLink to={"/dashboard/review"}>Add review</NavLink>
                    </div>
                    <div className="bg-red-300 w-full p-2 rounded-md mb-3">
                        <NavLink to={"/dashboard/booking"}>My booking</NavLink>
                    </div>
                </>}
            </div>
            <div className="flex-1 p-20">
                <p>{user?.email}</p>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;