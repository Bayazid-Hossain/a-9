import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../utilities/fakedb';
const JobDetails = () => {
    const { id } = useParams();
    const featureData = useLoaderData();
    let empty = {};

    if (featureData) {
        empty = featureData.find(singleData => singleData.id == id)
    }

    const { job_description, job_responsibility, education_requirement, experience, job_title, salary_range, phone, email, location,
    } = empty;

    const applyTOJob = (id) => {
        addToDb(id);

    }
    return (
        <>
        <h2 className='text-3xl text-center font-bold pt-4'>Job Details</h2>

            <div className='bobDetails mt-4 md:mt-5 lg:mt-[130px] flex flex-wrap justify-between'>

                <div className='w-full md:w-[calc(50%-10px)] lg:w-[75%-10px] mb-10 md:mb-0'>
                    <p className='mb-6'><span className='font-extrabold text-base '>Job Description: </span>{job_description}</p>
                    <p className='mb-6'><span className='font-extrabold text-base '>Job Responsibility: </span>{job_responsibility}</p>
                    <h5 className='font-extrabold text-base mt-6 mb-4'>Educational Requirements: </h5>
                    <p className='mb-6'>{education_requirement}</p>
                    <h5 className='font-extrabold text-base  mb-4'>Experiences:</h5>
                    <p>{experience}</p>
                </div>
                <div className='w-full md:w-[calc(50%-10px)]  lg:flex lg:w-[25%-10px] h-full mb-10 md:mb-0'>
                    <div className='h-full pb-[60px] bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg p-4'>
                        <h1 className='border-b-2 pb-4 border-slate-800 font-extrabold text-xl text-[#1a1919] pt-[20px] pl-[40px]'>Job Details</h1>
                        <p className='text-[#757575] text-xl ml-2 mt-4'><span className='font-extrabold text-xl text-[#474747] mr-3'>Salary:</span>{salary_range} (Per Month)</p>
                        <p className='text-[#757575] text-xl ml-2 mt-4'><span className='font-extrabold text-xl text-[#474747] mr-3'>Job Title:</span>{job_title}</p>
                        <h1 className='border-b-2 pb-4 border-slate-800 font-extrabold text-xl text-[#1a1919] pt-[20px] pl-[40px]'>Contact Information</h1>
                        <p className='text-[#757575] text-xl ml-2 mt-4'><span className='font-extrabold text-xl text-[#474747] mr-3'>Phone:</span>{phone}</p>
                        <p className='text-[#757575] text-xl ml-2 mt-4'><span className='font-extrabold text-xl text-[#474747] mr-3'>Email:</span>{email}</p>
                        <p className='text-[#757575] text-xl ml-2 mt-4'><span className='font-extrabold text-xl text-[#474747] mr-3'>Address:</span>{location}</p>
                        
                        <Link to='/applied-jobs'>
                        <button onClick={() => applyTOJob(id)} className='mt-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full lg:w-[450px] h-[65px] rounded-lg text-xl font-extrabold text-white'>
                            Apply Job
                        </button>

                        </Link>

                        <button className='mt-7 bg-gradient-to-r from-[#7E90FE] to-[#378c67] w-full lg:w-[450px] h-[65px] rounded-lg text-xl font-extrabold text-white'> <Link to='/'>
                            Back to Home
                        </Link></button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default JobDetails;