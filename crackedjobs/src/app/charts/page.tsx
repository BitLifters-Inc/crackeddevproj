// page.tsx

import React from 'react';
import { getJobPostings, getJobPostingsYesterday } from "../../server/api/routers/jobsService";
import { jobType } from "../../lib/types";
import ForecastCard from "../../components/forecastCard"

// export async function getServerSideProps() {
//   try {
//     const todayData: jobType[] = await getJobPostings();
//     const yesterdayData: jobType[] = await getJobPostingsYesterday();
//     return {
//       props: {
//         jobPostingsToday: todayData,
//         jobPostingsYesterday: yesterdayData
//       }
//     };
//   } catch (error) {
//     console.error('Error fetching job postings:', error);
//     return {
//       props: {
//         jobPostingsToday: [],
//         jobPostingsYesterday: []
//       }
//     };
//   }
// }

// const Page = ({ jobPostingsToday, jobPostingsYesterday }: { jobPostingsToday: jobType[], jobPostingsYesterday: jobType[] }) => {
//   return (
//     <div className="bg-blue-100 h-screen">
//       <ForecastCard jobPostingsToday={jobPostingsToday} jobPostingsYesterday={jobPostingsYesterday} />
//     </div>
//   );
// };

const Page = () => {
  return (
      <div className="bg-blue-100 h-screen">
    <div>
      <ForecastCard />
    </div>

      </div>
  );
};

export default Page;
