import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env";

import { type jobType } from "~/lib/utils";

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

          if(page === 10) {
            jobsExist = false;
            return totalJobs;
          }
          
          // if(jobData.length === 0){
          //   jobsExist = false;
          //   return totalJobs;
          // }
          
          totalJobs = totalJobs.concat(jobData);
          console.log(totalJobs.length);
          page++;
          // // const validated = responseValidator.parse(jobRes.json())
          // console.log(validated)
          // return jobRes.json();
    }
  }),

    getYesterdayJobs: publicProcedure
    .query(async () => {
      // variable to get jobs 24 hours from now
      // Get the current date and time
      const currentDate = new Date();

      // Subtract 24 hours (in milliseconds) to get yesterday's time
      const pastDay = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000))
      console.log(pastDay.toISOString().substring(0, 19))

      // Construct the string using template literals
        const jobRes = await fetch(`https://api.crackeddevs.com/v1/get-jobs?posted_after=${pastDay.toISOString().substring(0,19)}`,
          {
            headers: {
              'api-key': env.CRACKED_DEVS_API_KEY
            }
          }
        )
      

        if(!jobRes.ok) {
          throw new TRPCError({code: 'NOT_FOUND'})
        }
        
        // // const validated = responseValidator.parse(jobRes.json())
        // console.log(validated)
        return jobRes.json();
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


