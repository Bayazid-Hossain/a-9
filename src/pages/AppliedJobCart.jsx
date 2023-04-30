import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const AppliedJobCart = ({ cart }) => {
    console.log(cart);
    const { id, job_title, company_name, jobType, jobTime, location, salary_range, company_image } =
        cart;
    return (

        <>
        <div className=" lg:w-[70%] md:flex-row flex-col  mx-auto flex justify-between border p-8 rounded-xl my-5 py-4 shadow-lg">
           <div className='flex items-center justify-center bg-[#F4F4F4] border-spacing-1 w-48 p-5 shadow-lg rounded-lg'>
           <img className='w-[100%] h-20 ' src={company_image} alt="" />
           </div>
        <div className="">
        <h1 className="my-3 text-2xl font-bold mt-4">{job_title}</h1>
            <p className="my-23 mb-5">{company_name}</p>
            <div className="flex gap-4 my-2">
                <button className="btn btn-outline">{jobType}</button>
                <button className="btn btn-outline">{jobTime}</button>
            </div>
            <div className="md:flex gap-8 items-center my-3">
                <p className="flex items-center gap-2">
                    {" "}
                    <CiLocationOn /> {location}
                </p>
                <p className="flex items-center gap-2">
                    {" "}
                    <AiOutlineDollarCircle /> {salary_range}
                </p>
            </div>
        </div>
            <Link>
                <button className="btn">View Details </button>
            </Link>

        </div>
    </>
    


    );
};

export default AppliedJobCart;