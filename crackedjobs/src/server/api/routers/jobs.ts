import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env";

import { jobType } from "../../../lib/types";

import {
  createTRPCRouter,
  // protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
// import { responseValidator } from "~/utils/validators/job-validator";

export const jobsRouter = createTRPCRouter({
  getHello: publicProcedure
    .query(() => 'hello testing'),
    
  getJobs: publicProcedure
  .query(async () => {
    let jobsExist = true;
    let totalJobs: jobType[] = [];
    let page = 1;
    while(jobsExist){
      const jobRes = await fetch(`https://api.crackeddevs.com/v1/get-jobs?page=${page}`,
            {
              headers: {
                'api-key': env.CRACKED_DEVS_API_KEY
              }
            }
          )
            
          const jobData: jobType[] = await jobRes.json();
  
          if(!jobRes.ok) {
            throw new TRPCError({code: 'NOT_FOUND'})
          }

          totalJobs = totalJobs.concat(jobData);
          console.log(totalJobs.length);
          page++;

          // to stop unlimited counting were gona go up to just 10 for pages which should be around 100 entries
          if(page === 2) {
            jobsExist = false
            return totalJobs
          }
          
          // if(jobData.length === 0){
          //   jobsExist = false;
          //   return totalJobs;
          // }
          
          // // const validated = responseValidator.parse(jobRes.json())
          // console.log(validated)
          // return jobRes.json();
    }
  }),

  getYesterdayJobs: publicProcedure
  .query(async () => {
    try {
      let jobsExist = true;
      let totalJobs: jobType[] = [];
      let page = 1;
      const currentDate = new Date();
      const pastDay = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000));

      while (jobsExist) {
        const jobRes = await fetch(`https://api.crackeddevs.com/v1/get-jobs?posted_after=${pastDay.toISOString().substring(0,19)}&page=${page}`, {
          headers: {
            'api-key': env.CRACKED_DEVS_API_KEY
          }
        });

        if (!jobRes.ok) {
          throw new Error(`Fetch failed with status ${jobRes.status}`);
        }

        const jobData = await jobRes.json();

        if (jobData.length === 0) {
          jobsExist = false;
          return totalJobs;
        }

        totalJobs = totalJobs.concat(jobData);
        console.log('Total jobs received:', totalJobs.length);
        page++;
      }

      return totalJobs;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to fetch jobs' });
    }
  }),
    getCurrentJobs: publicProcedure
    
    .query(async () => {
      // Get the current date and time
      const currentDate: Date = new Date();
      // Subtract 24 hours (in milliseconds) to get current time
      // fix later for specifically which time for now it is subtracting 2 hours
      // and have to fix time zones
      let jobsExist = true;
      let totalJobs: jobType[] = [];
      let page = 1;
      while(jobsExist){
        
        const jobRes = await fetch(`https://api.crackeddevs.com/v1/get-jobs?posted_after=${currentDate.toISOString().substring(0,19)}&page=${page}`,
          {
            headers: {
              'api-key': env.CRACKED_DEVS_API_KEY
            }
          }
        )
          
        // need variable for api fetch in form of array
      
        const jobData = await jobRes.json();
        
        if(!jobRes.ok) {
          throw new TRPCError({code: 'NOT_FOUND'})
        }
        
        
        if(jobData.length === 0){
          jobsExist = false;
          return totalJobs;
        }
        
        totalJobs = totalJobs.concat(jobData);
        console.log(totalJobs.length);
        page++;
        // // const validated = responseValidator.parse(jobRes.json())
        // console.log(validated)
        // return jobRes.json();
      }
    }),
})


