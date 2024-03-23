import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {



    const { LoginAccount, GoogleLogin } = useContext(AuthContext);




    const Location = useLocation();




    const navigation = useNavigate();




    const navigate = () => {

        console.log(Location.state);

        navigation(Location?.state ? Location.state : "/")

    }




    const handleLogin = e => {

        e.preventDefault()

        const form = e.target;

        const email = form.email.value;

        const pass = form.password.value;




        LoginAccount(email, pass)

            .then(res => {

                if (res) {

                    toast.success('Login successful! You now have access. 🎉😊', {

                        position: "top-center"

                    })

                    form.reset();

                    navigate();

                }

            })




            .catch(err => {

                if (err.message == 'Firebase: Error (auth/network-request-failed).') {

                    toast.error('Your Network Connection is Too Slow!')

                }

                else {

                    toast.error(err.message, {

                        position: "top-center"

                    })

                }

            })
    }





    const handleGGLLogin = () => {

        GoogleLogin()

            .then(res => {

                if (res) {

                    toast.success('Login successful! You now have access. 🎉😊', {

                        position: "top-center"

                    })

                    navigate();

                }

            })

            .catch(err => {

                toast.error(err.message)

            })

    }





    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4 min-h-screen flex items-center justify-center">
                    <div className=" p-8 border-[#1BD15D] border rounded space-y-14">
                        <div className="space-y-10">
                            <div className="px-4 py-3 border-[#1BD15D] border-2 rounded max-w-max mx-auto ">
                                <img className="h-16" src="https://i.ibb.co/yNwX2Qj/Care-Lab-Logo-removebg-preview.png" alt="" />
                            </div>
                            <div className="mx-auto space-y-3">
                                <h1 className=" text-2xl font-semibold text-center tracking-wider ">Join with us today</h1>
                                <p className="mx-auto text-gray-500 tracking-widest text-center  ">Enter you email and password to sign in you account</p>
                            </div>
                        </div>
                        <div className="space-y-9">
                            <form onSubmit={handleLogin} className='space-y-5'>
                                <div className='space-y-3'>
                                    <h6 className='font-bold pl-1'>E-mail Address</h6>
                                    <div className="relative input-box">
                                        <input className="border border-[#1BD15D] w-full py-2.5 rounded-md px-5 outline-none" type="email" name="email" placeholder="Enter Your Email" required />
                                    </div>
                                </div>
                                <div className='space-y-3'>
                                    <h6 className='font-bold pl-1 '>Password</h6>
                                    <div className="relative input-box">
                                        <input className="border border-[#1BD15D] w-full py-2.5 rounded-md px-5 outline-none" type="password" name="password" placeholder="Enter Your Password" required />
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-[#1BD15D] py-3 md:py-3 w-full text-white font-bold  rounded">LOGIN</button>
                                </div>
                                <p className='font-medium text-gray-400'>Doesn't have an account yet?<Link className='text-[#1BD15D] font-semibold underline' to="/sign-up">Sign up</Link> </p>
                            </form>
                            <div className='flex items-center'>
                                <div className='border border-[#1BD15D] w-full'></div>
                                <span className='font-medium text-gray-400 w-full text-center px-3 max-w-max'>or</span>
                                <div className='border border-[#1BD15D] w-full'></div>
                            </div>
                            <button onClick={handleGGLLogin} className='flex items-center justify-center gap-3 border-[#1BD15D] border-2 py-2.5 w-full rounded-md '>
                                <FaGoogle className=" text-[#1BD15D] "></FaGoogle>
                                <span className='font-bold text-[#1BD15D] '>GOOGLE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;