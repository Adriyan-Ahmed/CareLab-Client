// -------------------------------- //
// -------- Imported Items -------- //
// -------------------------------- //

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Contexts/Authentication/Authentication";
import { useContext } from "react";
import { toast } from "react-toastify";





const Navbar = () => {


    const { User, LogOutAccount } = useContext(AuthContext);


    const Links = [
        <NavLink className={({ isActive }) => isActive ? ` bg-[#1BD15D] bg-opacity-10 lg:bg-transparent py-2.5 px-5 text-[#1BD15D] font-bold text-sm md:text-base rounded lg:rounded-none` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="/" >HOME</NavLink>,
        <NavLink className={({ isActive }) => isActive ? ` bg-[#1BD15D] bg-opacity-10 lg:bg-transparent py-2.5 px-5 text-[#1BD15D] font-bold text-sm md:text-base rounded lg:rounded-none` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="/services" >SERVICES</NavLink>,
    ]



    return (
        <>
            <section className="">
                <div className="container mx-auto">
                    <div className="navbar py-3 md:py-4 lg:py-6">
                        <div className="navbar-start space-x-3">
                            <Link className=" hidden xl:flex">
                                <div className="flex items-center gap-3">
                                    <img className=" h-8" src="https://i.ibb.co/yNwX2Qj/Care-Lab-Logo-removebg-preview.png" alt="LOGO" />
                                    <h1 className=" text-sm md:text-base lg:text-lg xl:text-xl font-bold">CareLab</h1>
                                </div>
                            </Link>
                            <div className="dropdown xl:hidden ">
                                <label tabIndex={0} className="btn btn-ghost btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>

                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200  shadow-md rounded-md w-52 z-10 gap-3">
                                    <Link className="">
                                        <div className="flex items-center justify-center gap-3">
                                            <img className=" h-8" src="https://i.ibb.co/yNwX2Qj/Care-Lab-Logo-removebg-preview.png" alt="LOGO" />
                                            <h1 className=" text-xl md:text-xl lg:text-lg xl:text-xl font-bold">CareLab</h1>
                                        </div>
                                    </Link>
                                    {
                                        Links.map((Link, i) => <li key={i}>{Link}</li>)
                                    }
                                    {
                                        User && <li><NavLink className={({ isActive }) => isActive ? ` bg-[#F01543] bg-opacity-10 lg:bg-transparent py-2.5 px-5 text-[#F01543] lg:border-b-2 lg:border-[#F01543] font-bold text-sm md:text-base rounded lg:rounded-none` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="dashboard/profile" >DASHBOARD</NavLink></li>
                                    }
                                </ul>
                            </div>
                            <div className="hidden xl:flex">
                                <nav className="flex items-center gap-3">
                                    {
                                        Links.map((Link, i) => <span key={i}>{Link}</span>)
                                    }
                                    {
                                        User && <li><NavLink className={({ isActive }) => isActive ? ` bg-[#F01543] bg-opacity-10 lg:bg-transparent py-2.5 px-5 text-[#F01543] lg:border-b-2 lg:border-[#F01543] font-bold text-sm md:text-base rounded lg:rounded-none` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="dashboard/profile" >DASHBOARD</NavLink></li>
                                    }
                                </nav>
                            </div>
                        </div>
                        <div className="navbar-end gap-2">

                            {
                                User ? <>
                                    <div className="dropdown dropdown-end">
                                        <abbr title={User.displayName}>
                                            <label tabIndex={0} className="btn btn-ghost btn-square avatar">
                                                <div className="w-10 rounded-lg">
                                                    <img src={User?.photoURL} />
                                                </div>
                                            </label>
                                        </abbr>
                                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
                                            <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded">{User.displayName}</li>
                                            <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded">
                                                <Link className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </Link>
                                            </li>
                                            <li onClick={() => LogOutAccount().then(res => toast.success('Log Out Successful !! 👌'))} className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm btn-ghost rounded"><Link>Logout</Link></li>
                                        </ul>
                                    </div>
                                    <button onClick={() => LogOutAccount().then(res => toast.success('Log Out Successful !! 👌'))} className="px-5 py-3 md:py-3.5 text-xs md:text-base lg:text-lg font-semibold border-2 bg-[#1BD15D] text-white hover:bg-transparent rounded btn-1 hover:text-[#1BD15D] border-[#1BD15D] duration-500 ">LOGOUT</button>
                                </>
                                    : 
                                <Link to='/login'>
                                        <button className="px-8 py-3.5 text-sm md:text-base lg:text-lg text-[#1BD15D] hover:bg-[#1BD15D] hover:text-white font-bold border-2 rounded border-[#1BD15D] duration-500 ">JOIN US</button>
                                </Link>
                            }

                        </div>
                    </div>
                </div >
            </section>
        </>
    );
};

export default Navbar;