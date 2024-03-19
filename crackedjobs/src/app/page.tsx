'use client'
import React from "react";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { api } from "~/trpc/react";
import { type jobType } from "~/lib/types";
import JobCard from "~/components/JobCard";

export default function Home() {

  const { data: jobs, isLoading, error } = api.getJobs.useQuery()


  return (
    <main className="">
      <MaxWidthWrapper>
        {isLoading ? (
          <div></div>
        ) : (
          jobs?.map((info) => (
            <JobCard
              {...(info as jobType)}
              key={info.id.toString()}
            />
          ))
        )}
      </MaxWidthWrapper>
      {/* <ForecastCard className="mx-auto" /> */}
      
    </main>
  );
}
