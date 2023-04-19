import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { UsernameContext } from '../App'
import { useContext } from 'react'

const NavBar = () => {
    const { username } = useContext(UsernameContext)
    const [navBar, SetNavBar] = useState(false)
    return (
        <div>
            <div className='flex justify-between bg-gray-200 p-4 fixed z-40 w-screen lg:hidden'>
                <div>
                    <FontAwesomeIcon icon={faBars} size='md' onClick={() => { SetNavBar(!navBar) }} />
                </div>
                <div>
                    <h3 className='font-bold text-xs md:text-sm'>Welcome {username}</h3>
                </div>
            </div >
            <div className='lg:hidden z-50 bg-white'>
                {navBar && <div className='flex justify-end lg:hidden bg-white w-screen fixed z-50'>
                    < FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }
                    } size='xl' className='flex justify-end p-8 text-3xl z-30' onClick={() => { SetNavBar(!navBar) }} />
                </div>}
                {navBar && <div className='w-screen h-screen flex flex-col justify-center items-center text-xl md:text-3xl gap-12 font-bold lg:hidden z-10 fixed bg-white' >
                    <Link to='/' onClick={() => { SetNavBar(!navBar) }} className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Home</Link>
                    <Link to='/account' onClick={() => { SetNavBar(!navBar) }} className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Account</Link>
                    <Link to='/' onClick={() => { SetNavBar(!navBar) }} className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Phones & Devices</Link>
                    <Link to='/' onClick={() => { SetNavBar(!navBar) }} className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Internet</Link>
                    <Link to='/' onClick={() => { SetNavBar(!navBar) }} className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Deals</Link>
                </div>}
            </div>
            <div className='lg:w-screen lg:h-auto lg:flex lg:flex-row lg:text-sm lg:gap-12 lg:font-bold lg:z-10
                                lg:py-6 lg:justify-normal lg:items-center lg:pl-12 lg:bg-gray-100 sm:hidden md:hidden lg:fixed'>
                <Link to='/' className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Home</Link>
                <Link to='/account' className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Account</Link>
                <Link to='/' className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Phones & Devices</Link>
                <Link to='/' className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Internet</Link>
                <Link to='/' className='hover:bg-gray-300  hover:rounded-md transition-all duration-500 px-4 py-2'>Deals</Link>
                <h3 className='hidden lg:block font-bold text-xs md:text-sm absolute right-8'>Welcome {username}</h3>
            </div>
        </div >
    );
}

export default NavBar