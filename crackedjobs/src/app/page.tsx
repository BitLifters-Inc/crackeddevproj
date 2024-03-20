'use client'
import React, { useEffect, useState } from "react";
import ForecastCard from "../components/forecastCard";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { api } from "~/trpc/react";
import { type jobType } from "~/lib/types";
import JobCard from "~/components/JobCard";

export default function Home() {
  // const data: jobType[] = api.getJobs.useQuery()
  const { data: jobs, isLoading, error } = api.getJobs.useQuery()

  // const [work, setWork] = useState<jobType[]>([])


  return (
    <main className="flex justify-center items-center min-h-screen">


      <MaxWidthWrapper className = "m">
        <div className = "p-8 space-y-4">
          {isLoading ? (
            <div></div>
          ) : (
            jobs.map((info: jobType) => (
              <JobCard
                {...(info)}
                key={info.id}
              />
            ))
          )}
        </div>
        
      </MaxWidthWrapper>
      {/* <ForecastCard className="mx-auto" /> */}
      
    </main>
  );
}
