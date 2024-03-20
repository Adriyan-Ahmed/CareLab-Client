import { BiSolidCapsule } from "react-icons/bi";
import { LiaCapsulesSolid } from "react-icons/lia";


const Banner = () => {
    return (
        <>
            <div className="bg-[#1BD15D] bg-opacity-10 py-20 relative ">
                <BiSolidCapsule className="absolute text-[120px] md:text-[150px] lg:text-[200px] xl:text-[300px] text-[#1BD15D] opacity-20 top-0 "></BiSolidCapsule>
                <BiSolidCapsule className="absolute text-[120px] md:text-[150px] lg:text-[200px] xl:text-[300px] text-[#1BD15D] opacity-20 bottom-0 right-0 "></BiSolidCapsule>
                <LiaCapsulesSolid className="absolute text-[120px] md:text-[150px] lg:text-[200px] xl:text-[300px] text-[#1BD15D] opacity-20 bottom-0 left-0 "></LiaCapsulesSolid>
                <LiaCapsulesSolid className="absolute text-[120px] md:text-[150px] lg:text-[200px] xl:text-[300px] text-[#1BD15D] opacity-20 top-0 right-0 "></LiaCapsulesSolid>
                <div className="container mx-auto relative">
                    <div className="mx-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="flex-1">
                                <div className="text-center md:text-left  xl:w-[600px] mx-auto ">
                                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-normal lg:leading-[70px] xl:leading-snug mb-3">Professional Care Of Your Health.</h1>
                                    <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-loose text-gray-500 ">We will help you in maintaining your health here we choose you a doctor who is experienced and certified in his field</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <img src="https://i.ibb.co/cJpksZk/Banner-png.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;