import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Feature = ({ feature }) => {
  const { id,job_title, company_name, jobType, jobTime, location, salary_range, company_image } =
    feature;
  return (
    <div className=" border p-8 rounded-xl my-5 py-4">
      <img src={company_image} alt="" />
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
      <Link to={`/jobdetails/${id}`}>
       <button className="btn">View Details </button>
      </Link>

    </div>
  );
};

export default Feature;
