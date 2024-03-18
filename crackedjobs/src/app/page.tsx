'use client'
import React from "react";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { api } from "~/trpc/react";

export default function Home() {

  const { data:jobs, isLoading, error } = api.getJobs.useQuery()


  return (
    <main className="">
      <MaxWidthWrapper>
        {jobs?.map((info, index) => (
          <div key = {index}>
            {info.company}
          </div>
        ))}
      </MaxWidthWrapper>
      {/* <ForecastCard className="mx-auto" /> */}

      
    </main>
  );
}
