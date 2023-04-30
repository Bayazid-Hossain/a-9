import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';
import AppliedJobCart from './AppliedJobCart';

const AppliedJobs = () => {

    const [jobData, setJobData] = useState([]);
    const [cart, setCart] = useState([]);
    const [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        fetch('/featured.json')
            .then(res => res.json())
            .then(data => setJobData(data))
    }, [])

    let storedId = getShoppingCart();
    useEffect(() => {
        let emptyArry = [];


        for (const id in storedId) {
            let addedArry = jobData.find(singleData => singleData.id == id)
            if (addedArry) {
                emptyArry.push(addedArry)
            }
        }
        setCart(emptyArry)
    }, [jobData])

    const filterHandler = (e) => {
        setFilterValue(e.target.value)

    }
    return (
        <div>
            <h2 className='text-3xl font-bold mt-4 text-center'>Applied Job</h2>
            <div className="w-[70%] mx-auto flex justify-end ">
                <select onChange={filterHandler} className="block min-w-fit cursor-pointer bg-white border border-gray-400 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500 appearance-none"
                >
                    <option value=""> Full-Time or Part-Time </option>
                    <option value="full">Full-Time</option>
                    <option value="part">Part-Time</option>
                </select>
            </div>
            {
               cart.map((singleCart) => {
                if (filterValue) {
                  if (filterValue === 'full' && singleCart.jobTime !== 'Full Time') return
                  if (filterValue === 'part' && singleCart.jobTime !== 'Part Time') return
                }
              
                return <AppliedJobCart cart={singleCart} key={singleCart.id}></AppliedJobCart>
              })
            }
        </div>
    );
};

export default AppliedJobs;