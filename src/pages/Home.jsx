import React, { useState } from "react";
import { useDataGlobally } from "../Context";
import Category from "../components/Cart/Category";
import Feature from "../components/Cart/Feature";

const Home = () => {
  const { cards, category } = useDataGlobally();

  const [cardCount, setCardCount] = useState(4);
  const [showBtn, setShowBtn] = useState(true);

  const sliceCard = cards.slice(0, cardCount);

  const showAllJobs = () => {
    setCardCount(cards.length);
    setShowBtn(false);
  };

  return (
    <>
      <div className="grid md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold leading-tight md:mt-28 my-3">
            One Step<br></br> Closer To Your <br></br>
            <span className="text-indigo-400">Dream Job</span>
          </h1>
          <p className="my-3">
            Explore thousands of job opportunities with all the<br></br>{" "}
            information you need. Its your future. Come find it. Manage all
            <br></br> your job application from start to finish.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div>
          <img
            className="w-full"
            src="/src/assets/All Images/P3OLGJ1 copy 1.png"
            alt=""
          />
        </div>
      </div>
      <section className="my-14">
        <h1 className="grid text-center font-bold text-4xl">Job Category List</h1>
        <p className="text-[#757575] text-center mt-1">
          Explore thousands of job opportunities with all the information you
          need. Its y our future
        </p>
        <div className="grid md:grid-cols-4 gap-14  my-10">
          {category.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </section>
      <section>
        <h1 className="grid text-center font-bold text-4xl">Featured Jobs</h1>
        <p className="text-[#757575] text-center mt-1">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {sliceCard.map((feature) => (
            <Feature key={feature.id} feature={feature}></Feature>
          ))}
        </div>
      </section>
      <button
        onClick={showAllJobs}
        className={`btn block mx-auto mt-8 my-5 ${
          showBtn ? "" : "hidden"
        }`}
      >
        See All Jobs
      </button>
    </>
  );
};

export default Home;
