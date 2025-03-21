import React from "react";
import Programmer from "../assets/Programmer.png";

const Aboutus = () => {
    return (
        <div className="flex justify-center items-center w-full ">
            <div className="flex flex-col iteam-center justify-center  mx-auto gap-5">
                <h2 className="text-white text-4xl font-bold ">Explore API’s</h2>
                <p className="text-secondary-gray text-[16px] w-[386px]">
                    Well, we’re really different with another API’s platform.
                    But with AI, did you get what we mean? Yes, that’s it.
                </p>
            </div>
            <div className="flex  iteam-center justify-center  mx-auto ">
                <img src={Programmer} alt="" />
            </div>
        </div>
    );
};

export default Aboutus;
