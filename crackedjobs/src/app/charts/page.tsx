import React from 'react';
import ForecastCard from "~/components/forecastCard";
// import css styling from styles folder
import '../../../src/styles/chart.css';

const Page = () => {
  return (
    <div className="bg-blue-100 h-screen">
      <ForecastCard />
    </div>
  );
};

export default Page;
