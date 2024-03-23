import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen space-y-20 md:space-y-28 lg:space-y-32 xl:space-y-44 ">
                <Outlet />
            </main>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayout;