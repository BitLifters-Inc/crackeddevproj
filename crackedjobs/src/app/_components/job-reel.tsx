'use client'

import { api } from "~/trpc/react"

export const JobReel = () => {
  const getJobs = api.getJobs.useQuery();
  return (
    <div>
      {JSON.stringify(getJobs.data)}
    </div>
  )
}

