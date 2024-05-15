import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function EmployeeHeader() {
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext)
    const { user } = useContext(AuthContext)

    const handleLogout = async () => {
        logout()
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Logged Out",
            showConfirmButton: false,
            timer: 2000
        });
        navigate('/');
        window.location.reload()
    }

    return (
        <div className="navbar bg-[#e0f2fa] p-4">
            <div className="navbar-start">
                <Link to='/'>
                    <div className='flex w-full items-center justify-start gap-4'>
                        <img src={logo} />
                        <h1 className=' text-3xl'>VaxCentral</h1>
                    </div>
                </Link>
            </div>
            <div className='navbar-end pr-5'>
                <button className='btn btn-sm btn-primary ' onClick={handleLogout}> Logout </button>
            </div>
        </div>
    )
}

export default EmployeeHeader