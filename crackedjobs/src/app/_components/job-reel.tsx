'use client'
import { useEffect, useState } from 'react'
import { api } from "~/trpc/react"



export const JobReel = () => {
  const [jobList, setJobList] = useState([])
  
  // const getJobs = api.getJobs.useQuery();

  const { data:jobs, isLoading, error } = api.getJobs.useQuery()



  return (
    <div>
      {JSON.stringify(jobs)}
    </div>
  )
}

