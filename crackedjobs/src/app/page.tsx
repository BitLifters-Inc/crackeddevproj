'use client'
import React, { useState } from "react";
import ForecastCard from "../components/forecastCard";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { api } from "~/trpc/react";
import { type jobType } from "~/lib/types";
import JobCard from "~/components/JobCard";

export default function Home() {

  const { data: jobs, isLoading, error } = api.getJobs.useQuery()

  const [work, setWork] = useState<jobType[]>([])


  return (
    <main className="">
      <MaxWidthWrapper className = "">
        <div className = "max-w-2xl">
          {isLoading ? (
            <div></div>
          ) : (
            jobs?.map((info: jobType) => (
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
