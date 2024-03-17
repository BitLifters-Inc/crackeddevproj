import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env";

import { jobType } from "~/lib/utils";

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

    getYesterdayJobs: publicProcedure
    .query(async () => {
      // variable to get jobs 24 hours from now
      // Get the current date and time
      let currentDate = new Date();

      // Subtract 24 hours (in milliseconds) to get yesterday's time
      currentDate.setTime(currentDate.getTime() - (24 * 60 * 60 * 1000));

      // Extract the components (year, month, day, hours, minutes, seconds)
      let year = currentDate.getFullYear();
      let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 to month as it is zero-indexed
      let day = String(currentDate.getDate()).padStart(2, '0');
      let hours = String(currentDate.getHours()).padStart(2, '0');
      let minutes = String(currentDate.getMinutes()).padStart(2, '0');
      let seconds = String(currentDate.getSeconds()).padStart(2, '0');

      // Construct the string using template literals
      let yesterdayTimeString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        const jobRes = await fetch(`https://api.crackeddevs.com/v1/get-jobs?posted_after=${yesterdayTimeString}`,
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
      let currentDate = new Date();

      // Subtract 24 hours (in milliseconds) to get current time
      // fix later for specifically which time for now it is subtracting 2 hours
      // and have to fix time zones
      currentDate.setTime(currentDate.getTime());

      // Extract the components (year, month, day, hours, minutes, seconds)
      let year = currentDate.getFullYear();
      let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 to month as it is zero-indexed
      let day = String(currentDate.getDate()).padStart(2, '0');
      let hours = String(currentDate.getHours()).padStart(2, '0');
      let minutes = String(currentDate.getMinutes()).padStart(2, '0');
      let seconds = String(currentDate.getSeconds()).padStart(2, '0');

      // Construct the string using template literals
      let currentTimeString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      console.log(currentTimeString);

      let jobsExist = true;
      let totalJobs: jobType[] = [];
      let page = 1;
      while(jobsExist){
        
        const jobRes = await fetch(`https://api.crackeddevs.com/v1/get-jobs?posted_after=${currentTimeString}&page=${page}`,
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

  
  // getJobs: publicProcedure.output(() => {

  //     return 'hello'
  //   }
  // ),
    // const jobRes = await fetch(
    //   "https://api.crackeddevs.com/v1/get-jobs",
    //   {
    //     headers: {
    //       'api-key': "b88335d0-6ee7-444d-9436-975a9ef6919b", 
    //     }
    //   }
    // )
    // if(!jobRes.ok) {
    //   throw new TRPCError({code: 'NOT_FOUND'})
    // }

    // const validated = responseValidator.parse(jobRes.json())
    // return validated;

    

  

