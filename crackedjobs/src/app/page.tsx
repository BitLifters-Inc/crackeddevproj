'use client'
import React from "react";
import ForecastCard from "../components/mainCard";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { api } from "~/trpc/react";
import { type jobType } from "~/lib/utils";

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
