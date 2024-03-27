// jobsService.ts

import { jobType } from "~/lib/types";
import { TRPCError } from "@trpc/server";
import { env } from "~/env";

export async function getJobPostings(): Promise<jobType[]> {
  try {
    let jobsExist = true;
    let totalJobs: jobType[] = [];
    let page = 1;
    while (jobsExist) {
      const jobRes = await fetch(`https://api.crackeddevs.com/v1/get-jobs?page=${page}`, {
        headers: {
          'api-key': env.CRACKED_DEVS_API_KEY
        }
      });

      if (!jobRes.ok) {
        throw new TRPCError({ code: 'NOT_FOUND' });
      }

      const jobData: jobType[] = await jobRes.json();

      totalJobs = totalJobs.concat(jobData);
      console.log(totalJobs.length);
      page++;

      // Check if there are no more pages
      if (jobData.length === 0) {
        jobsExist = false;
      }
    }
    return totalJobs;
  } catch (error) {
    console.error('Error fetching job postings:', error);
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch job postings' });
  }
}

export async function getJobPostingsYesterday(): Promise<jobType[]> {
  try {
    const currentDate = new Date();
    const pastDay = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000));

    let jobsExist = true;
    let totalJobs: jobType[] = [];
    let page = 1;
    while (jobsExist) {
      const jobRes = await fetch(`https://api.crackeddevs.com/v1/get-jobs?posted_after=${pastDay.toISOString().substring(0, 19)}&page=${page}`, {
        headers: {
          'api-key': env.CRACKED_DEVS_API_KEY
        }
      });

      if (!jobRes.ok) {
        throw new TRPCError({ code: 'NOT_FOUND' });
      }

      const jobData: jobType[] = await jobRes.json();

      totalJobs = totalJobs.concat(jobData);
      console.log(totalJobs.length);
      page++;

      // Check if there are no more pages
      if (jobData.length === 0) {
        jobsExist = false;
      }
    }
    return totalJobs;
  } catch (error) {
    console.error('Error fetching job postings from yesterday:', error);
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch job postings from yesterday' });
  }
}
