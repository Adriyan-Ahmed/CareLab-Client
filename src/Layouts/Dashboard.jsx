import { Link, NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { IoIosSearch, IoMdAdd } from "react-icons/io";
import { IoLogOutOutline, IoHomeOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
// import { AuthContext } from "../../Contexts/Authentication/Authentication";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {

    const [isClose, setIsClose] = useState(window.innerWidth < 768 ? true : false);

    // const { User, LogOutAccount } = useContext(AuthContext);


    const Links = [
        <NavLink className={({ isActive }) => isActive ? ` bg-[#1BD15D] bg-opacity-10 py-2.5 px-4 text-[#1BD15D] font-semibold text-sm md:text-base rounded w-full ${isClose ? '' : 'flex items-center gap-2'} ` : `bg-transparent py-2.5 px-4 font-semibold text-gray-600 text-sm md:text-base  rounded w-full ${isClose ? '' : 'flex items-center gap-2'} `} to="profile" ><CgProfile className="text-2xl"></CgProfile><span className={` duration-700 whitespace-nowrap ${isClose ? ' scale-0 opacity-0 w-0 op pointer-events-none' : ''}`}>PROFILE</span></NavLink>,
        <NavLink className={({ isActive }) => isActive ? ` bg-[#1BD15D] bg-opacity-10 py-2.5 px-4 text-[#1BD15D] font-semibold text-sm md:text-base rounded w-full ${isClose ? '' : 'flex items-center gap-2'} ` : `bg-transparent py-2.5 px-4 font-semibold text-gray-600 text-sm md:text-base  rounded w-full ${isClose ? '' : 'flex items-center gap-2'} `} to="cart" ><MdAddShoppingCart className="text-2xl"></MdAddShoppingCart><span className={` duration-700 whitespace-nowrap ${isClose ? ' scale-0 opacity-0 w-0 op pointer-events-none' : ''}`}>CART</span></NavLink>,
        <NavLink className={({ isActive }) => isActive ? ` bg-[#1BD15D] bg-opacity-10 py-2.5 px-4 text-[#1BD15D] font-semibold text-sm md:text-base rounded w-full ${isClose ? '' : 'flex items-center gap-2'} ` : `bg-transparent py-2.5 px-4 font-semibold text-gray-600 text-sm md:text-base  rounded w-full ${isClose ? '' : 'flex items-center gap-2'} `} to="add-service" ><span className="flex items-start"><RiServiceLine className="text-2xl"></RiServiceLine><IoMdAdd className="text-[10px] -ml-1"></IoMdAdd></span> <span className={` duration-700 whitespace-nowrap ${isClose ? ' scale-0 opacity-0 w-0 op pointer-events-none' : ''}`} >SERVICE</span></NavLink>
    ]


    const handleSidebarToggle = () => {
        setIsClose((prevIsClose) => !prevIsClose);
    };

    return (
        <>
            <div>
                <div>
                    <div id="body" className="min-h-screen">

                        {/* Side Navbar's code start from here */}
                        <nav id="sidebar" className={`fixed top-0 left-0 h-[100%] overflow-hidden duration-700 w-[250px] bg-white space-y-14 z-10 border-r-2 ${isClose ? 'w-[73px] ' : ''}`}>
                            <div className="flex items-center gap-3 pl-6 pt-8">
                                <img className=" h-8" src="https://i.ibb.co/yNwX2Qj/Care-Lab-Logo-removebg-preview.png" alt="LOGO" />
                                <h1 id="linkName" className={`text-sm md:text-lg lg:text-lg xl:text-xl font-bold duration-700 ${isClose ? 'scale-0 w-0 pointer-events-none' : ''}`}>CareLab</h1>
                            </div>
                            <div className="h-full">
                                <ul className="menu menu-sm dropdown-content rounded-md space-y-3 h-full flex flex-col justify-between ">
                                    <div className="space-y-3">
                                        {
                                            Links.map((link, i) => <li key={i}>{link}</li>)
                                        }
                                    </div>
                                    <div className="pb-32 space-y-3 py-3 border-t ">
                                        <Link to="/"><li className=" font-semibold rounded w-full "><span className="flex items-center gap-2 py-2.5 px-5 rounded"><IoHomeOutline className="text-2xl"></IoHomeOutline> <span className={` duration-700 text-sm md:text-base ${isClose ? ' scale-0 w-0 pointer-events-none' : ''}`}>HOME</span></span></li></Link>
                                        <button className="w-full"><li className=" font-semibold rounded w-full "><span className="flex items-center gap-2 py-2.5 px-5 rounded"><IoLogOutOutline className="text-2xl"></IoLogOutOutline> <span className={` duration-700 text-sm md:text-base ${isClose ? ' scale-0 w-0 pointer-events-none' : ''}`}>LOGOUT</span></span></li></button>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                        {/* Side Navbar's code ends here */}

                        <section className={`relative min-h-screen py-2.5 bg-white duration-700 ${isClose ? 'w-[calc(100%-73px)] left-[73px]' : 'w-[calc(100%-250px)] left-[250px]'} `}>

                            {/* Dashboard Top Nav's Code Start from here */}
                            <div className={`flex items-center justify-between gap-2 z-40 fixed top-0 py-4 px-4 bg-white duration-700 ${isClose ? 'w-[calc(100%-73px)] left-[73px]' : 'w-[calc(100%-250px)] left-[250px]'} `}>
                                <FaBars onClick={() => handleSidebarToggle()} className="text-2xl cursor-pointer hidden lg:block " id="sidebar-toggle"></FaBars>
                                <div className=" relative max-w-[600px] w-full">
                                    <div className="relative max-w-[600px] w-full ">
                                        <div className="bg-white rounded-md">
                                            <input className="bg-[#F9FAFB] font-medium p-5 w-full rounded-md outline-none " type="text" placeholder="What you Search?" required />
                                        </div>
                                        <span className="absolute top-[9px] right-2.5">
                                            <button className=" p-3.5 border hover:bg-[#1BD15D] border-[#1BD15D] text-[#1BD15D] hover:text-white focus:text-white  focus:bg-[#1BD15D] duration-500 text-base rounded"><IoIosSearch></IoIosSearch></button>
                                        </span>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <abbr title={`Adriyan Ahmed Jubayer`}>
                                        <label tabIndex={0} className="btn btn-ghost btn-square avatar">
                                            <div className="w-10 rounded-lg">
                                                <img src="https://i.ibb.co/zH98DLb/images-q-tbn-ANd9-Gc-R77i-Oan-UEw-D6c-R1bth7-E0y0jn-AJCn-DH6-Zp1-Q-usqp-CAU.jpg" />
                                            </div>
                                        </label>
                                    </abbr>
                                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
                                        <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded">Adriyan</li>
                                        <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded">
                                            <Link className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>
                                        <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm btn-ghost rounded"><Link>Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Dashboard Top Nav's Code Ends here */}

                            <section className="min-h-screen mt-24 space-y-20 md:space-y-28 lg:space-y-32 xl:space-y-44 ">
                                <Outlet></Outlet>
                            </section>

                        </section>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Dashboard;