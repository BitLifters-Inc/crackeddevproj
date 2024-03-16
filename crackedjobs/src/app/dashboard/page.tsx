// 'use client'
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AppRouter } from "~/server/api/root";
import { api } from "~/trpc/server";

const page = () => {

  // const [count, setCount] = useState(0)
  // const [jobList, setJobList] = useState([])

  // const [jobs, setJobs] = useState<Array>([]);
  // const { query } = useRouter();
  const jobsQuery = api.jobs.getHello()


  return (
    <div>
      {jobsQuery}
    </div>
  )
};

export default page;
