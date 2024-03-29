import React from "react";
import { SubCard } from "./subCard";
import { Combobox } from "./ui/dropdown";
import { jobType } from "~/lib/types";
import '../../../crackedjobs/src/styles/chart.css'
import '../styles/globals.css';

// interface ForecastCardProps {
//   jobPostingsToday: jobType[];
//   jobPostingsYesterday: jobType[];
// }

// const ForecastCard: React.FC<ForecastCardProps> = ({ jobPostingsToday, jobPostingsYesterday }) => {
//   // Calculate the percentage change in job postings
//   const percentageChange = jobPostingsYesterday ? 
//   ((jobPostingsToday.length - jobPostingsYesterday.length) / jobPostingsYesterday.length) * 100 :
//   0; // Default to 0 if jobPostingsYesterday is null or undefined


//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-3/4 bg-blue-300 opacity-95 shadow-lg">
//         <div className="flex items-center space-x-4 p-1 justify-center" style={{ paddingTop: "50px" }}>
//           <h1 className="font-bold text-4xl text-white">CrackedDev Job Forecast</h1>
//           <Combobox />
//         </div>
//         <div className="grid grid-cols-5 gap-4 p-5">
//           <SubCard  title="React" description="React looking grim" />
//           <SubCard title="Angular" description="Angular forecast" />
//           <SubCard title="Vue" description="Vue forecast" />
//           <SubCard title="Node.js" description="Node.js forecast" />
//           <SubCard title="GraphQL" description="GraphQL forecast" />
//         </div>
//         <div>Percentage Change in Job Postings from Yesterday: {percentageChange.toFixed(2)}%</div>
//       </div>
//     </div>
//   );
// };

const ForecastCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 bg-blue-400 shadow-lg rounded-md" style={{ opacity: 0.85 }}>
        <div className="flex items-center space-x-4 p-1 justify-center" style={{ fontFamily: 'PokemonFRLG, sans-serif', paddingTop: "50px" }}>
          <h1 className="font-bold text-4xl text-white" style={{ fontSize: '5rem' }}>CrackedDev Job Forecast</h1>
          <Combobox />
        </div>
        <div className="grid grid-cols-5 gap-3 p-6" style={{ fontFamily: 'PokemonFRLG, sans-serif' }} >
          <SubCard title="React" description="React looking grim" />
          <SubCard title="Angular" description="Angular forecast" />
          <SubCard title="Vue" description="Vue forecast" />
          <SubCard title="Node.js" description="Node.js forecast" />
          <SubCard title="GraphQL" description="GraphQL forecast" />
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
